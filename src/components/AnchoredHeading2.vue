<script>
export default {
  name: "AnchoredHeading2",
  props: {
    level: {
      type: Number,
      required: true
    }
  },
  render: function(createdElement) {
    return createdElement("h" + this.level, this.$slots.default);
  }
};
</script>

