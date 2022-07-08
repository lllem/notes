<template>
  <nav class="p-3 shadow text-center">
    <router-link to="/">NOTES</router-link>
  </nav>

  <main>
    <router-view/>
  </main>

</template>

<style lang="scss">
#app {
  nav {
    position: relative;
  }
}
</style>
