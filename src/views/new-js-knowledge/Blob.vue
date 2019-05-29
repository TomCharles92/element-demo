<template>
  <div>
    Blob
  </div>
</template>

<script>
export default {
  name: "Blob",
  created() {
    this.getData()
  },
  methods: {
    getData() {
      this.$axios.get("https://dz.80txt.com/78256/%E7%AF%AE%E5%9D%9B%E7%AC%AC%E4%B8%80%E5%A4%96%E6%8C%82.zip")
        .then(res => {
          console.log(res)
        })
    }
  }
}
</script>

