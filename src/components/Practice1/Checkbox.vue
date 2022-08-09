<script setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
library.add(faSquareCheck);
</script>

<template>
  <label class="custom-checkbox">
    <input
      type="checkbox"
      id="capital-input"
      name=""
      value="Bike"
      @click="$emit('select')"
      :checked="checked"
    />
    <span>
      <font-awesome-icon class="icon" icon="fa-solid fa-square-check" />
    </span>

    <slot></slot>
  </label>
</template>

<script>
export default {
  methods: {},
  props: { title: String, description: String, checked: Boolean },
};
</script>

<style lang="scss">
@use "../../scss/index.scss" as *;

.custom-checkbox {
  position: relative;
  display: flex;
  align-items: center;
  line-height: 24px;
  font-size: 1rem;
  input {
    display: none;
    // visibility: hidden;
  }
  span {
    display: block;
    height: 16px;
    width: 16px;
    border: 1px solid $black;
    border-radius: 3px;
    margin-right: 12px;
    position: relative;
    transition: all ease 0.1s;

    .icon {
      position: absolute;
      left: -2px;
      top: -2px;
      color: $secondary;
      opacity: 0.2;
      transform: scale(0.5);
      height: 18px;
      width: 18px;
      transition: all ease 0.1s;
    }
  }

  input:checked ~ span {
    border: 1px solid $secondary;
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
