<template>
  <pull-to @infinite-scroll="loadmore">
    <ul class="list">
      <li v-for="(item, index) in dataList" :key="index">{{ item }}</li>
    </ul>
    <div class="loading-bar">
      <svg class="icon icon-loading" aria-hidden="true">
        <use xlink:href="#icon-loading"></use>
      </svg>
      加载中...
    </div>
  </pull-to>
</template>

<script>
import PullTo from "vue-pull-to";
export default {
  name: "VuePullTo",
  components: { PullTo },
  data: function() {
    return {
      dataList: [
        "(ง •̀_•́)ง",
        "(´・ω・`) ",
        "（/TДT)/ ",
        ">ㅂ<",
        "o(*≧▽≦)ツ",
        "(≖ ‿ ≖)✧",
        "(o^∇^o)ﾉ",
        " (´・ω・)ﾉ",
        "(´・ω・`)",
        "ヽ(･ω･｡)ﾉ",
        "(｀･ω･´)",
        "╰(*°▽°*)╯",
        "╮(￣▽￣)╭",
        "(￣▽￣)~*",
        "(⊙ˍ⊙)",
        "(￣0 ￣)y",
        "(ง •̀_•́)ง",
        "(´・ω・`) ",
        "（/TДT)/ ",
        ">ㅂ<",
        "o(*≧▽≦)ツ",
        "(≖ ‿ ≖)✧",
        "(o^∇^o)ﾉ",
        " (´・ω・)ﾉ",
        "(´・ω・`)",
        "ヽ(･ω･｡)ﾉ",
        "(｀･ω･´)",
        "╰(*°▽°*)╯",
        "╮(￣▽￣)╭",
        "(￣▽￣)~*",
        "(⊙ˍ⊙)",
        "(￣0 ￣)y",
        "(ง •̀_•́)ง",
        "(´・ω・`) ",
        "（/TДT)/ ",
        ">ㅂ<",
        "o(*≧▽≦)ツ",
        "(≖ ‿ ≖)✧",
        "(o^∇^o)ﾉ",
        " (´・ω・)ﾉ",
        "(´・ω・`)",
        "ヽ(･ω･｡)ﾉ",
        "(｀･ω･´)",
        "╰(*°▽°*)╯",
        "╮(￣▽￣)╭",
        "(￣▽￣)~*",
        "(⊙ˍ⊙)",
        "(￣0 ￣)y"
      ],
      iconLink: ""
    };
  },
  methods: {
    loadmore() {
      console.log(223);
      setTimeout(() => {
        this.dataList = this.dataList.concat(this.dataList);
      }, 1000);
    }
  }
};
</script>
