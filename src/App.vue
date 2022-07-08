<template>
<div>

  <nav class="p-3 shadow sticky-top bg-white">
    <router-link to="/" class="logo">NOTES</router-link>

    <router-link to="/notes/new" class="btn btn-primary btn-sm ms-auto">
      Добавить запись
    </router-link>
  </nav>

  <main>
    <router-view/>
  </main>
</div>

</template>

<style lang="scss">
#app {
  nav {
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }

  .logo {
    font-weight: bold;
    text-decoration: none;
    font-size: 150%;
  }
}
</style>
