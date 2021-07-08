<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home🏠</router-link> |
      <router-link to="/about">About🛑</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  background-color: rgb(176, 204, 203);
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #000000;

    &.router-link-exact-active {
      color: #0e5e3a;
    }
  }
}
</style>
