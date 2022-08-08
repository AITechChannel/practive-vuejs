<script setup>
import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faUserSecret,
  faPenToSquare,
  faFloppyDisk,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";

library.add(faUserSecret, faPenToSquare, faFloppyDisk, faSquareCheck);
</script>

<template>
  <label class="custom-checkbox">
    <input type="checkbox" id="capital-input" name="" value="Bike" />
    <span>
      <font-awesome-icon class="icon" icon="fa-solid fa-square-check" />
    </span>

    <slot></slot>
  </label>
</template>

<script>
export default {
  data() {},
  props: { title: String, description: String },
  emit: ["select"],
};
</script>

<style lang="scss">
.custom-checkbox {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-size: 1rem;
  input {
    display: none;
    // visibility: hidden;
  }
  span {
    display: block;
    height: 16px;
    width: 16px;
    border: 1px solid #333;
    border-radius: 3px;
    margin-right: 10px;
    position: relative;
    .icon {
      position: absolute;
      left: -2px;
      top: -2px;

      color: #45d1c9;
      opacity: 0.2;
      transform: scale(0.5);
      height: 18px;
      width: 18px;
      transition: all ease 0.1s;
    }
  }

  input:checked ~ span {
    // border: none;
    .icon {
      opacity: 1;
      transform: scale(1);
    }
  }

  &:hover {
    cursor: pointer;
  }
}
</style>
