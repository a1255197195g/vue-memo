<template>
  <div id="app">
    <Menu  class="menu-field"></Menu>
  </div>
</template>

<script>

import Menu from './components/Menu.vue'
export default {
  name: 'App',
  components: {
    Menu
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  padding-top: 50px;
}
</style>
