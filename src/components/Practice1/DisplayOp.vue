<!-- <script setup></script> -->
<script setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFloppyDisk,
  faPenToSquare,
  faSortDown,
  faSquareCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faXmark, faPenToSquare, faFloppyDisk, faSquareCheck, faSortDown);
</script>

<template>
  <div class="container">
    <div class="tag" v-for="item in data">
      <span class="title">{{ item.name }}</span>
      <span class="icon" @click="$emit('delete', item.code, 'remove')"
        ><font-awesome-icon icon="fa-solid fa-xmark" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
  },
};
</script>

<style scoped lang="scss">
@use "../../scss/index.scss" as *;

.container {
  background: $white;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 7px;
  gap: 8px;
  width: 480px;
  min-height: 48px;
  border: 1px solid $gray-gray02;
  border-radius: 4px;
  margin-top: 8px;
  box-sizing: border-box;
  .tag {
    background-color: $gray-gray04;
    border-radius: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    margin-right: 4px;

    // min-width: 150px;
  }

  .title {
    padding: 4px 4px 4px 16px;
  }

  .icon {
    padding: 4px 10px 4px 10px;
    color: $text-black;
    &:hover {
      cursor: pointer;

      color: $primary;
    }
  }
}
</style>
