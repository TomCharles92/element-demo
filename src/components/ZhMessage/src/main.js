import Vue from 'vue';
import Main from './main.vue';
import { PopupManager } from 'element-ui/src/utils/popup';
import { isVNode } from 'element-ui/src/utils/vdom';
let MessageConstructor = Vue.extend(Main);  // 创建一个构造器，相当于Vue的子类

let instance;
// 用于存储多个实例
// Message.close，Message.closeAll 都涉及到 instances，所以不能在 main.vue 中定义
let instances = []; 
// z-index从2001开始计数，因为$message是全局注册的，
// 所以页面不关闭，该值不会重新计数
let seed = 1; // zIndex++

const Message = function(options) {
  if (Vue.prototype.$isServer) return; // 当前实例是否运行于服务器
  options = options || {};
  // 如果参数只有一个字符串
  if (typeof options === 'string') {
    options = {
      message: options
    };
  }
  let userOnClose = options.onClose; // ??? userOnClose 干嘛的？=> 用户点击关闭时，可以设置回调函数，message实例作为参数
  let id = 'message_' + seed++; // ？？每个实例的唯一值，可以用于关闭

  // ？？添加一个关闭方法 ?? 重写options.onClose
  options.onClose = function() {
    Message.close(id, userOnClose);
  };
  // 创建一个实例
  instance = new MessageConstructor({
    data: options
  });
  instance.id = id;
  // ？？判断是不是虚拟dom，不知道如何使用
  if (isVNode(instance.message)) {
    instance.$slots.default = [instance.message];
    instance.message = null;
  }
  // 将实例挂载
  instance.vm = instance.$mount();
  // ?? 我原以为 instance就是vm，区别在哪？
  document.body.appendChild(instance.vm.$el);
  instance.vm.visible = true;
  instance.dom = instance.vm.$el; // 当前实例的dom节点
  instance.dom.style.zIndex = PopupManager.nextZIndex(); // 从2000起
  instances.push(instance);
  return instance.vm;
};

// ??? 从结果来看是定义了4个方法
['success', 'warning', 'info', 'error'].forEach(type => {
  Message[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      };
    }
    options.type = type;
    return Message(options);
  };
});

// 关闭该实例
Message.close = function(id, userOnClose) {
  for (let i = 0, len = instances.length; i < len; i++) {
    if (id === instances[i].id) {
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i]);
      }
      instances.splice(i, 1);
      break;
    }
  }
};

// 关闭所有实例
Message.closeAll = function() {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close();
  }
};

export default Message;
