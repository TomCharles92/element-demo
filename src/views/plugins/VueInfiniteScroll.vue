<template>
  <div>
    VueInfinityScroll
    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
      <ul class="list">
        <li v-for="(item, index) in dataList" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueInfiniteScroll",
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
      busy: false
    };
  },
  methods: {
    loadMore: function() {
      this.busy = true;

      setTimeout(() => {
        // for (var i = 0, j = 10; i < j; i++) {
        //   this.data.push({ name: count++ });
        // }
        this.dataList = this.dataList.concat(this.dataList);
        this.busy = false;
      }, 1000);
    }
  }
};
</script>

