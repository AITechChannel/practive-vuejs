<script setup>
import pcVN from "pc-vn";
import Modal from "./Modal.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import DisplayOp from "./DisplayOp.vue";

library.add(faSortDown);
</script>

<!-- ---------------------------------------------------------------->

<template>
  <div class="practice1-container">
    <div class="input-container">
      <input
        @focusin="(showModal = true), (showOp = false)"
        placeholder="Chọn tỉnh thành"
        @input="onChange"
        :value="input"
      />
      <span class="icon"
        ><font-awesome-icon icon="fa-solid fa-sort-down"
      /></span>
    </div>

    <DisplayOp
      v-if="showOp"
      @select="select"
      :data="options"
      @delete="select"
    />

    <Modal
      v-if="showModal"
      @select="select"
      :provinces="filter ? provincesFilter : provinceCheck"
      :options="options"
    />
  </div>
</template>

<!-- ---------------------------------------------------------------->

<script>
export default {
  created() {
    if (this.provinceCheck.length === 0) {
      this.provinceCheck = this.provincesData;
    }
  },

  data() {
    const provincesData = pcVN.getProvinces();

    return {
      showOp: false,
      showModal: false,
      checked: false,
      filter: false,
      input: "",
      provincesData: provincesData,
      provinceCheck: [],
      provincesFilter: [],

      options: [],
    };
  },

  methods: {
    select(data, remove) {
      console.log("option provinces:", this.options);

      if (remove === "remove") {
        if (this.options.length == 1) {
          this.showOp = false;
        }
      }
      if (data === "agree") {
        this.showModal = false;
        this.showOp = true;
      } else if (data === "cancel") {
        this.showModal = false;
        this.filter = false;
      } else {
        const provinceSelector = this.provincesData.find(
          (e) => e.code === data
        );

        const checkItem = this.options.find((e) => e.code === data);

        if (checkItem) {
          const indexCheckItem = this.options.findIndex((e) => e.code === data);

          this.options.splice(indexCheckItem, 1);
        } else {
          this.options.push(provinceSelector);
        }

        const provinceCheck = this.provincesData.map((item) => {
          if (this.options.includes(item)) {
            return {
              ...item,
              checked: true,
            };
          } else {
            return {
              ...item,
              checked: false,
            };
          }
        });

        this.provinceCheck = provinceCheck;
      }
    },

    onChange(e) {
      this.input = e.target.value.trim();

      if (this.input !== "") {
        this.filter = true;
      } else {
        this.filter = false;
      }

      const curr = this.provinceCheck.filter((province) =>
        province.name.toLowerCase().match(this.input.toLowerCase())
      );

      if (curr.length > 0) {
        this.provincesFilter = curr;
      } else {
        this.provincesFilter = [];
      }
    },
  },

  computed() {},
};
</script>

<!-- ---------------------------------------------------------------->

<style scoped lang="scss">
@use "../../scss/index.scss" as *;

.practice1-container {
  margin: 0 auto;
  width: 480px;
  input {
    background: #ffffff;
    display: flex;
    align-items: center;
    height: 48px;
    border: 1px solid $gray-gray02;
    border-radius: 4px;
    width: 100%;
    outline: none;
    color: $text-black;
    padding: 16px 40px 16px 10px;
    font-size: 1rem;
    font-weight: 400;
  }

  input::placeholder {
    font-family: "Noto Sans", sans-serif;
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
  input:focus {
    border: 1px solid $primary;
  }
}
</style>
