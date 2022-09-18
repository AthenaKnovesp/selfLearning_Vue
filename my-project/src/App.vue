<template>
  <div id="app">
    <!-- 3.使用组件 -->
    <!-- <Test /> -->
    <!-- <Aa /> -->
    <!-- <ClassDy /> -->
    <Person />
  </div>
</template>

<script>
// 1.引入组件
import Test from "./components/Test.vue";
import Aa from "./components/01-bind.vue";
import ClassDy from "./components/02-ClassDynamic.vue";
import Person from "./components/03-defineProperty.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  // 2.注册组件
  components: {
    Test,
    Aa,
    ClassDy,
    Person,
  },
};
</script>

<style></style>
