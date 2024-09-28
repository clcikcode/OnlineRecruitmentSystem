<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { mapActions } from 'vuex'
</script>

<template>
  <RouterView :afterLogin ="afterLogin" />
</template>

<script>
export default {
  name: 'App',
  components: {
    RouterLink,
    RouterView
  },
  data() {
    return {
      afterLogin: {
        loginbuttonShow: true,
        uname: '',
        userImg: ''
      }
    }
  },
  created() {
    console.log('App created')
    //防止刷新页面后vuex数据丢失
    if (localStorage.getItem('wsShouldReconnect') === 'true') {
      this.initWebSocket()
    }
    if (localStorage.getItem('loginbuttonShow') == 'false') {
      this.afterLogin.loginbuttonShow = false
    } else {
      this.afterLogin.loginbuttonShow = true
    }
    this.afterLogin.uname = localStorage.getItem('uname')
    this.afterLogin.userImg = localStorage.getItem('userImg')
    console.log(this.afterLogin)
  },
  beforeUpdate() {
    console.log('App beforeUpdate')
    this.afterLogin.loginbuttonShow = localStorage.getItem('loginbuttonShow')
    this.afterLogin.uname = localStorage.getItem('uname')
  },
  updated() {
    console.log('App updated')
    this.afterLogin.loginbuttonShow = localStorage.getItem('loginbuttonShow')
    this.afterLogin.uname = localStorage.getItem('uname')
  },
  methods: {
    ...mapActions(['wsModule', 'initWebSocket'])

  }
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  width: 1700px;
  
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
  min-height: 0;
  width: 1700px;
  overflow-x: hidden;
}

RouterView {
  border: 1px solid blue
}
</style>
