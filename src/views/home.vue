<template>
  <div class="home">
    <div class="content">
      <div class="tabBox">
        <span @click="myTab(1)" :class="flag ? 'active' : ''">This Week</span>
        <span @click="myTab(2)" :class="flag ? '' : 'active'">Last Week</span>
      </div>
      <timeLeft :time="time" />
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, onUpdated, onUnmounted } from "vue";
import timeLeft from "../components/timeLeft";
export default {
  setup() {
    let state = reactive({
      flag: true,
      time: "6Day 05:05:29",
    });
    function myTab(type) {
      if (type == 1) {
        state.flag = true;
      } else {
        state.flag = false;
      }
    }
    onMounted(() => {
      console.log("mounted!");
    });
    onUpdated(() => {
      console.log("updated!");
    });
    onUnmounted(() => {
      console.log("unmounted!");
    });
    return {
      ...toRefs(state),
      myTab,
    };
  },
  components: {
    timeLeft,
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/common";
.home {
  width: 100%;
  height: 100%;
  .content {
    width: 7rem;
    height: 10.57rem;
    background: #ffffff;
    margin: 0 auto;
    text-align: center;
    .tabBox {
      width: 100%;
      height: 1.2rem;
      display: flex;
      justify-content: space-between;

      span:nth-child(1) {
        flex: 1;
        height: 1.2rem;
        font-size: 0.38rem;
        font-family: Roboto;
        font-weight: 900;
        color: #9441e3;
        line-height: 1.2rem;
        white-space: nowrap;
      }
      span:nth-child(2) {
        flex: 1;
        height: 1.2rem;
        font-size: 0.38rem;
        font-family: Roboto;
        font-weight: 900;
        color: #985f24;
        line-height: 1.2rem;
        white-space: nowrap;
      }
      .active {
        @include bgImage("../assest/UI1.png");
      }
    }
  }
}
</style>
