<template>
  <!-- object.defineproperty 方法 -->
  <div class="">
    <button @click="load()">Person</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    load() {
      let number = 18;
      let human = {
        name: "张三",
        age: "18",
      };
      Object.defineProperty(human, "sex", {
        //value: "男",
        // enumerable: true, // 可枚举(遍历)
        // writable: true, // 可修改
        // configurable: true, // 属性可以被删除
        get() {
          return number;
        },
        set(value) {
          return value;
        },
      });
      console.log(human);
    },
  },
  components: {},
};
</script>

<style scoped></style>
