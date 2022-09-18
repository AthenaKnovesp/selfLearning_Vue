<template>
  <div class="">
    <!-- 单向数据绑定 -->
    <!-- v-bind 动态绑定 标签属性 特点:单项数据流-->
    <a v-bind:href="link">baidu</a> <br />
    <!-- v-bind 语法糖 : -->
    <a :href="link">baidu</a> <br />
    <img :src="imgLink" alt="" width="100px" />

    <!-- 双向数据绑定 v-model -->
    <input :value="link" type="text" />
    <input v-model="link" type="text" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      link: "http://www.baidu.com",
      imgLink: "https://v2.cn.vuejs.org/images/logo.svg",
    };
  },
  created() {},
  mounted() {},
  methods: {},
  components: {},
};
</script>

<style scoped></style>
