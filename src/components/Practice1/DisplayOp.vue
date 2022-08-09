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
      <span class="icon"><font-awesome-icon icon="fa-solid fa-xmark" /> </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
  },
  methods: {
    onClickButton(data) {
      console.log("click", data);
    },
  },

  emits: ["select"],
};
</script>

<style scoped lang="scss">
@use "../../scss/index.scss" as *;

.container {
  background: #ffffff;
  display: flex;
  align-items: center;
  width: 480px;
  height: 48px;
  border: 1px solid $gray-gray02;
  border-radius: 4px;
  margin-top: 8px;
  margin-right: 4px;
  .tag {
    background: $gray-gray04;
    border-radius: 32px;
  }

  .title {
    padding: 4px 4px 4px 16px;
    background: $gray-gray04;
  }

  .icon {
    padding: 4px 10px 4px 10px;
    color: $text-black;
  }
}
</style>
