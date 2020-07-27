<template>
  <div
    id="app"
    :style="isSetting?'padding-bottom:120px':''"
  >
    <router-view />
    <md-tab-bar
      v-if="isSetting"
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
import { isSetting } from '@config'
export default {
  data () {
    return {
      current: 1,
      items: [{ name: 1, label: '首页', icon: 'profession', path: '/' }, { name: 2, label: '调试', icon: 'id-card', path: '/about' }],
      isSetting
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


