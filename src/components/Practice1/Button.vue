<script setup>
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faUserSecret,
  faPenToSquare,
  faFloppyDisk,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";

library.add(faUserSecret, faPenToSquare, faFloppyDisk, faSquareCheck);
</script>

<template>
  <button
    @click="$emit('select')"
    :class="[
      primary ? 'primary' : null,
      disable ? 'disable' : null,
      text ? 'text' : null,
    ]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    primary: Boolean,
    disable: Boolean,
    text: Boolean,
  },
};
</script>

<style scoped lang="scss">
@use "../../scss/index.scss" as *;

button {
  font-weight: 700;
  border-radius: 4px;
  color: $white;
  width: 104px;
  height: 32px;
  border: none;
  &:hover {
    cursor: pointer;
  }
}

button:first-of-type {
  margin-right: 11px;
}

.primary {
  background: $primary;

  color: $white;
}

.disable {
  background: $gray-gray03;
  &:hover {
    cursor: no-drop;
  }
}

.text {
  color: $text-black;
  background-color: white;
  width: 82px;
  height: 24px;
}
</style>
