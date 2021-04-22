<template>
  <div class="header">
    <router-link class="rule" to="/rule" v-if="rulePage" replace></router-link>

    <router-link class="rule" :to="rulePage ? '/rule' : '/home'" replace>{{
      rulePage ? "home" : "rule"
    }}</router-link>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const ROUTE = useRoute();
    let rulePage = ref(true);

    watch(
      () => ROUTE.path,
      () => {
        if (ROUTE.path == "/rule") {
          rulePage.value = false;
        } else {
          rulePage.value = true;
        }
      }
    );

    return { rulePage };
  },
};
</script>

<style lang="scss">
@import "../scss/common.scss";
.header {
  width: 100%;
  height: 5.46rem;
  background: url("../assest/EN.png") no-repeat center;
  background-size: 100% 100%;
  position: relative;
  .rule {
    width: 2.07rem;
    height: 0.7rem;
    position: absolute;
    bottom: 0.23rem;
    right: 0.13rem;
    font-size: 0.36rem;
    font-family: Roboto;
    font-weight: 900;
    color: #ffffff;
    line-height: 0.7rem;
    text-align: center;
    @include bgImage("../assest/Rules.png");
  }
}
</style>
