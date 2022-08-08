<!-- <script setup></script> -->
<script setup>
import Checkbox from "./Checkbox.vue";
import Modal from "./Modal.vue";
</script>
<template>
  <div class="container">
    <div>
      <input />
    </div>
    <Modal @select="console()" />
  </div>
</template>

<script>
export default {
  data() {},

  methods: {
    console() {
      console.log("click");
    },
  },

  emits: ["select"],
};
</script>

<style lang="scss"></style>
