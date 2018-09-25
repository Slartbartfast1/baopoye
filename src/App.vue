<template>

  <div id="app">
    <router-view/>
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/#">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/news">
        <span class="mui-icon mui-icon-list"><span class="mui-badge">9</span></span>
        <span class="mui-tab-label">新闻</span>
      </router-link>
      <router-link class="mui-tab-item" to="/2">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">通讯录</span>
      </router-link>
      <router-link class="mui-tab-item" to="/3">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">设置</span>
      </router-link>
    </nav>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
  body,html{
    padding:0;
    margin:0;
  }
</style>
