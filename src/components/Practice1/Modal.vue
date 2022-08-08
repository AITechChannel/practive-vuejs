<script setup>
import Checkbox from "./Checkbox.vue";
import Button from "./Button.vue";
</script>

<template>
  <div class="container">
    <div class="capital-item">
      <Checkbox v-for="item in 30">Hanoi</Checkbox>
    </div>

    <Button @select="$emit('select')">Đồng ý</Button>
    <Button @select="$emit('select')">Huỷ</Button>
  </div>
</template>

<script>
export default {
  data() {},

  methods: {},

  emits: ["select"],
};
</script>

<style scoped lang="scss">
.container {
  background: #ffffff;
  box-shadow: 0px 1px 8px rgba(102, 102, 102, 0.2);
  border-radius: 4px;
  height: 304px;
  padding: 16px 4px 16px 16px;
  .capital-item {
    overflow-y: scroll;
    height: 80%;
  }
}
</style>
