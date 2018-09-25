<template>
  <div id="app">
    <router-view/>
    <nav class="mui-bar mui-bar-tab" >
      <router-link class="mui-tab-item" to="/#">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/news">
        <span class="mui-icon mui-icon-list"></span>
        <span class="mui-tab-label">新闻</span>
      </router-link>
      <router-link class="mui-tab-item" to="/myBlog">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">我的博客</span>
      </router-link>
      <router-link class="mui-tab-item" to="/todo">
        <span class="mui-icon-extra mui-icon mui-icon-extra-calendar"></span>
        <span class="mui-tab-label">日程</span>
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

nav{
  a{z-index:999!important;}
}
  body,html{
    padding:0;
    margin:0;
  }
</style>
