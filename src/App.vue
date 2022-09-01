<template>
  <NavigationHeader/>
  <router-view/>
  <footer>©{{ getCurrentYear }} CHRISTOPH EBERLE All rights reserved.</footer>
</template>

<script>
  import NavigationHeader from "./components/NavigationHeader.vue";

  export default {
    components:{
      NavigationHeader
    },
    computed: {
      getCurrentYear() { return new Date().getFullYear() }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

template {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: left;
  }

/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
