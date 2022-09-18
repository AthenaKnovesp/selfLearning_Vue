<template>
  <!-- 必须要有一个根节点 -->
  <div>
    <h2>Index 子组件</h2>
    <span>
      {{ number }}
      <button @click="add()">Number+5</button>
    </span>

    <div>
      <ul>
        <li v-for="item in arr" :key="item">{{ item }}</li>
      </ul>
      <button @click="insert()">插入元素999</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 10,
      arr: [2, 4, 6, 8, 10],
    };
  },
  created() {},
  mounted() {},
  methods: {
    add() {
      this.number += 5;
    },
    insert() {
      this.arr.splice(2, 0, 999);
    },
  },
  components: {},
};
</script>

<style></style>
