<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home|
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
    <md-tab-bar
      v-model="current"
      :items="items"
      :has-ink="false"
      class="nav"
      @change="navChange"
    >
      <template
        slot="item"
        slot-scope="{ item }"
      >
        <div class="custom-item">
          <div class="text">
            <span v-text="item.label"></span>
          </div>
        </div>
      </template>
    </md-tab-bar>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  data () {
    return {
      current: 1,
      items: [{ name: 1, label: '首页', icon: 'profession', path: '/' }, { name: 2, label: '调试', icon: 'id-card', path: '/about' }],
    }
  },
  watch: {
    $route: {
      handler (val) {
        if (val.path === '/about') {
          this.current = 2
        } else {
          this.current = 1
        }
      },
      deep: true
    }
  },
  methods: {
    navChange (item) {
      this.$router.replace(item.path)
    }
  }
};
</script>
<style lang="stylus">
#app {
  padding-bottom: 160px;
}

.nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  box-shadow: 0 0 10px -3px rgba(0, 0, 0, 0.5);

  .custom-item {
    text-align: center;
  }
}
</style>


