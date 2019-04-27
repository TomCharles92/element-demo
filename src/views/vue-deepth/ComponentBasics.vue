<template>
  <div>
    <h3>组件基础</h3>
    <BlogPost :style="{ fontSize: postFontSize + 'em'}"
      v-for="post in posts"
      :key="post.id"
      :post="post"
      @enlargeText="postFontSize += $event"
    ></BlogPost>
  </div>
</template>

<script>
import BlogPost from "@/components/BlogPost";
export default {
  name: "ComponentBasics",
  components: { BlogPost },
  data: function() {
    return {
      postFontSize: 1,
      posts: [
        { id: 1, title: "My journey with Vue", content: "XXX" },
        { id: 2, title: "Blogging with Vue", content: "XXX"  },
        { id: 3, title: "Why Vue is so fun", content: "XXX"  }
      ]
    };
  }
};
</script>
