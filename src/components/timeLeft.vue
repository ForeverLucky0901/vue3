<template>
  <div class="timeleft"><img src="../assest/ui3.png" alt="" /> {{ time }}</div>
</template>

<script>
export default {
  props: ["time"],
};
</script>

<style lang="scss" scoped>
@import "../scss/common.scss";
.timeleft {
  width: 3.84rem;
  height: 0.64rem;
  margin: 0.41rem auto 0;
  @include bgImage("../assest/ui2.png");
  font-size: 0.26rem;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #ffffff;
  line-height: 0.64rem;
}
</style>
