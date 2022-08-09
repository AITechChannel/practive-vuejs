<!-- <script setup></script> -->
<script setup>
import Checkbox from "./Checkbox.vue";
import Modal from "./Modal.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faXmark,
  faPenToSquare,
  faFloppyDisk,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";
library.add(faXmark, faPenToSquare, faFloppyDisk, faSquareCheck);
</script>

<template>
  <div class="container">
    <div class="search">
      <div class="tag">
        <span class="title">Hà Nội</span>
        <span class="icon"
          ><font-awesome-icon icon="fa-solid fa-xmark" />
        </span>
      </div>
      <input placeholder="Chọn tỉnh thành" />
    </div>
    <Modal @select="onClickButton" />
  </div>
</template>

<script>
export default {
  data() {},

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
  .search {
    // background-color: #f8f8f8;
    background: #ffffff;
    /* Primary */

    display: flex;
    align-items: center;
    width: 480px;
    height: 48px;

    border: 1px solid $gray-gray02;
    // box-shadow: 0px 0px 8px rgba(0, 123, 195, 0.32);
    border-radius: 4px;
    input {
      flex: 1;
      border: none;
      outline: none;
      color: $text-black;
    }

    input::placeholder {
      font-family: "Noto Sans", sans-serif;
      font-weight: 400;
      color: $gray-gray02;
    }

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
}
</style>
