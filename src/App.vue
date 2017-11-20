<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <div class="content">{{ count }} {{ bar }}</div>
    <button @click="inc">click me</button>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        msg: ''
      }
    },
    computed: {
      count () {
        return this.$store.state.count
      },
      bar () {
        return this.$store.state.foo.bar
      }
    },
    methods: {
      changeMsg() {
        this.msg = 'message';
      },
      inc () {
        this.$store.commit('increment')
      }
    },
    mounted() {
      this.changeMsg();
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  margin-top: 10px;
}
</style>
