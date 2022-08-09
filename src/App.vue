<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />
    <div class="wrapper">
      <nav>
        <RouterLink v-for="item in nav" :to="`/${item}`">{{
          item.toUpperCase()
        }}</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView class="view" />
</template>

<script>
export default {
  data() {
    return {
      nav: ["home", "practice1", "practice2", "practice3", "practice4"],
    };
  },
};
</script>

<style scoped lang="scss">
header {
  position: fixed;
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  z-index: 1;
  align-items: center;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  left: 0;
  right: 0;
  top: 0;
  height: 70px;
  display: flex;
  align-items: center;
  background-color: white;
}

.wrapper {
  flex: 1;
  width: 100%;
}

.logo {
  width: 50px;
  display: block;
  margin: 0 1rem;
  height: 100%;
}

nav {
  width: 100%;
  // font-size: 1.6rem;
  text-align: center;
}

nav a.router-link-exact-active {
  color: #007bc3;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.view {
  padding: 80px 30px 30px 30px;
}
</style>
