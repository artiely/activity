<template>
  <div class="home">
    用户ID {{uid}}
  </div>
</template>

<script>
// @ is an alias to /src
import { getUserID } from '@/utils/nativeApi'
export default {
  name: "home",
  data () {
    return {
      uid: ''
    }
  },
  created () {
    getUserID().then(res => {
      this.uid = res
      console.log(res)
    })
  }
};
</script>
