<script setup>
import Checkbox from "./Checkbox.vue";
import Button from "./Button.vue";
</script>

<!-- ---------------------------------------------------------------->

<template>
  <div class="container">
    <div class="list">
      <div v-for="item in provinces" class="item">
        <Checkbox @select="$emit('select', item.code)">{{
          item.name
        }}</Checkbox>
      </div>
    </div>
    <div class="action">
      <Button
        v-if="options.length > 0"
        @select="$emit('select', 'agree')"
        :primary="true"
        >Đồng ý</Button
      >
      <Button v-else @select="$emit('select', 'agree')" :disable="true"
        >Đồng ý</Button
      >
      <Button @select="$emit('select', 'cancel')" :text="true">Huỷ</Button>
    </div>
  </div>
</template>

<!-- ---------------------------------------------------------------->

<script>
export default {
  props: { provinces: Array, options: Array },

  methods: {},
};
</script>

<!-- ---------------------------------------------------------------->

<style scoped lang="scss">
@use "../../scss/index.scss" as *;

.container {
  background: #ffffff;
  box-shadow: 0px 1px 8px rgba(102, 102, 102, 0.2);
  border-radius: 4px;
  height: 304px;
  width: 480px;
  padding: 16px 4px 16px 16px;
  display: flex;
  flex-direction: column;
  .list {
    overflow-y: scroll;
    flex: 1;
    margin-bottom: 16px;
  }

  .item {
    margin-bottom: 16px;
  }

  ::-webkit-scrollbar {
    width: 8px;
    border-radius: 6px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    // background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: $gray-gray03;
    border-radius: 6px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
}
</style>
