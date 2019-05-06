<template>
  <div>
    <h3>组件基础</h3>
    <h4>使用事件抛出一个值</h4>
    <BlogPost :style="{ fontSize: postFontSize + 'em'}"
      v-for="post in posts"
      :key="post.id"
      :post="post"
      @enlargeText="postFontSize += $event"
    ></BlogPost>

    <h4>在组件上使用 v-model，手动实现 v-model的双向数据绑定</h4>
    <CustomInput :value="searchText" @input="searchText = $event"></CustomInput>
    <p>searchText: {{ searchText }}</p>
    <button @click="searchText += '223'">添加字符串223</button>
    <p><CustomInput v-model="searchText"></CustomInput></p>
  </div>
</template>

<script>
import BlogPost from "@/components/BlogPost";
import CustomInput from "@/components/CustomInput";
export default {
  name: "ComponentBasics",
  components: { BlogPost, CustomInput },
  data: function() {
    return {
      postFontSize: 1,
      posts: [
        { id: 1, title: "My journey with Vue", content: "XXX" },
        { id: 2, title: "Blogging with Vue", content: "XXX"  },
        { id: 3, title: "Why Vue is so fun", content: "XXX"  }
      ],

      searchText: ""
    };
  }
};
</script>
