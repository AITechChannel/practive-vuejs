<script setup>
import pcVN from "pc-vn";
import Checkbox from "./Checkbox.vue";
import Modal from "./Modal.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faXmark,
  faPenToSquare,
  faFloppyDisk,
  faSquareCheck,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import DisplayOp from "./DisplayOp.vue";
library.add(faXmark, faPenToSquare, faFloppyDisk, faSquareCheck, faSortDown);
</script>

<!-- ---------------------------------------------------------------->

<template>
  <div class="container">
    <div class="input-container">
      <input placeholder="Chọn tỉnh thành" @input="onChange" :value="input" />
      <span class="icon"
        ><font-awesome-icon icon="fa-solid fa-sort-down"
      /></span>
    </div>
    <DisplayOp @select="select" :data="options" />
    <Modal @select="select" :provinces="provinces" :options="options" />
  </div>
</template>

<!-- ---------------------------------------------------------------->

<script>
export default {
  created() {},

  data() {
    const provinces = pcVN.getProvinces();

    return {
      input: "",
      provinces: provinces,
      options: [],
    };
  },
  methods: {
    select(data) {
      const provinceSelector = this.provinces.find(
        (province) => province.code === data
      );

      const checkItem = this.options.find((province) => province.code === data);

      if (checkItem) {
        const indexCheckItem = this.options.findIndex(
          (province) => province.code === data
        );
        console.log(indexCheckItem);

        this.options.splice(indexCheckItem, 1);
      } else {
        this.options.push(provinceSelector);
      }

      console.log(provinceSelector);
      console.log("options", this.options);
    },

    // action(data) {},

    onChange(e) {
      console.log(this.input);
      this.input = e.target.value;

      const curr = this.provinces.filter((province) =>
        province.name.includes(this.input)
      );

      if (curr) {
        this.provinces = curr;
      } else {
        this.provinces = this.provinces;
      }
    },
  },
  emits: ["select"],
};
</script>

<!-- ---------------------------------------------------------------->

<style scoped lang="scss">
@use "../../scss/index.scss" as *;

.container {
  input {
    background: #ffffff;
    display: flex;
    align-items: center;
    // width: 480px;
    height: 48px;
    border: 1px solid $gray-gray02;
    border-radius: 4px;
    width: 100%;

    outline: none;
    color: $text-black;
    padding: 16px 40px 16px 10px;
  }

  input::placeholder {
    font-family: "Noto Sans", sans-serif;
    font-weight: 400;
    color: $gray-gray02;
  }

  .input-container {
    position: relative;
    width: 480px;

    .icon {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-60%);
      display: flex;
      align-items: center;
      font-size: 0.6rem;
      span {
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
