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
  <button @click="$emit('select')"><slot></slot></button>
</template>

<script>
export default {
  props: { title: String, description: String },

  emit: ["select"],
};
</script>

<style scoped lang="scss"></style>
