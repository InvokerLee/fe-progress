<template>
  <div id="app">
    <h1>HelloWorld</h1>
    <button @click="a2t">ArrayToTree</button>
  </div>
</template>

<script>
import { arrayToTree, arrayToTree2 } from '@/utils';

export default {
  name: 'App',
  components: {},
  methods: {
    a2t() {
      const list = require('@/jsons/arr.json');
      console.time('1')
      console.log(arrayToTree(list, null))
      console.timeEnd('1')
      console.time('2')
      console.log(arrayToTree2(list, null))
      console.timeEnd('2')
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
