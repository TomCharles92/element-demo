<template>
  <div>
    <h1>渲染函数</h1>
    <AnchoredHeading :level="1">
      AnchoredHeading
      <slot></slot>
    </AnchoredHeading>

    <AnchoredHeading2 :level="3">
      AnchoredHeading2
      <slot></slot>
    </AnchoredHeading2>
  </div>
</template>

<script>
import AnchoredHeading from "@/components/AnchoredHeading";
import AnchoredHeading2 from "@/components/AnchoredHeading2";

export default {
  name: "RenderFunction",
  components: { AnchoredHeading, AnchoredHeading2 }
};
</script>

