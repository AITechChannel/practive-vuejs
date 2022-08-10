<script setup>
import Checkbox from "./Checkbox.vue";
import Button from "./Button.vue";
</script>

<!-- ---------------------------------------------------------------->

<template>
  <div class="container">
    <div class="list">
      <div
        v-for="(item, index) in provinces"
        :key="`province_${index}`"
        class="item"
      >
        <Checkbox @select="$emit('select', item.code)" :checked="item.checked"
          >{{ item.name }}
        </Checkbox>
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
      <Button
        class="btn-cancel"
        @select="$emit('select', 'cancel')"
        :text="true"
        >Huỷ</Button
      >
    </div>
  </div>
</template>

<!-- ---------------------------------------------------------------->

<script>
export default {
  props: { provinces: Array, options: Array, checked: Boolean },

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
  padding: 8px 2px 16px 0;
  display: flex;
  flex-direction: column;
  .list {
    overflow-y: scroll;
    height: 240px;
    width: 100%;
    position: relative;
  }

  .item {
    display: flex;
    align-items: center;
    height: 40px;
    &:hover {
      background-color: $hover;
    }
  }

  .action {
    margin-left: 16px;
    margin-top: 8px;
    flex: 1;
  }

  .btn-cancel {
    color: $primary;
  }

  ::-webkit-scrollbar {
    position: absolute;
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
    height: 62px;
    border-radius: 6px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: $gray-gray02;
  }
}
</style>
