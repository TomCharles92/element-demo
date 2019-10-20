import Vue from "vue";
import Main from "./MyMessage.vue";

// 创建一个构造器，它相当于Vue的子类
let MessageConstructor = Vue.extend(Main);
let instance;
let instances = [];
let seed = 1;


// 作为最终导出的函数，它的作用是：
// 1.将MyMessage.vue实例化，然后手动挂载到dom节点上
// 2.另外可以在这个函数中处理一些逻辑
const MyMessage = function(options) {
  // 如果参数只有一个字符串
  if (typeof options === 'string') {
    options = {
      message: options
    };
  }

  // 1.实例化，没有el属性，不会挂载
  instance = new MessageConstructor({
    data: options
  });
  instance.id = `myMessage` + seed;
  instance.onClose = function(vm) {
    console.log(vm.id)
    MyMessage.close(vm.id);
  }
  // 2.模板已经渲染，但是不在document中，所以看不到
  instance.$mount();
  // 3.手动将模板放入document中
  document.body.appendChild(instance.$el);
  instance.visible = true;
  console.log(instance)
  instance.$el.style.zIndex = 2000 + seed++;
  instances.push(instance);
  return instance;
}

// 关闭该实例
MyMessage.close = function(id) {
  for(let i = 0; i < instances.length; i++) {
    if(id === instances[i].id) instances.splice(i, 1);
    break;
  }
}

export default MyMessage;

