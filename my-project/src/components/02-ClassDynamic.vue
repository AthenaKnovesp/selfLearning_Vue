<template>
  <div class="">
    <!-- 第一种方式: 直接绑定 -->
    <div>
      <div :class="active1">123</div>
      <button @click="change1()">切换样式1</button>
      <button @click="change2()">切换样式2</button>
    </div>
    <hr />
    <!-- 第二种方式: 对象方式(常用) 类样式能否其效果,依赖于其他的条件(true|false)-->
    <div>
      <div :class="{ box1: flag }">123</div>
      <div :class="{ box1: 2 == 3 }">123</div>
      <button @click="flag = !flag">切换Flag</button>
    </div>
    <hr />
    <!-- 第三种方式: 数组方式 -->
    <div :class="[active1, active2]">132</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active1: "box1",
      active2: "box2",
      flag: true,
    };
  },
  created() {},
  mounted() {},
  methods: {
    change1() {
      this.active1 = "box1";
    },
    change2() {
      this.active1 = "box2";
    },
  },
  components: {},
};
</script>

<style scoped>
.box1 {
  width: 100px;
  height: 100px;
  background-color: burlywood;
}
.box2 {
  width: 100px;
  height: 100px;
  background-color: greenyellow;
}
</style>
