<template>
    <div id="box" >
        <mt-header title="我的博客" fixed="true">
            <router-link to="/myBlog" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <router-link to="/admin" slot="right">
                <span class="mui-icon mui-icon-compose"></span>
            </router-link>
        </mt-header>
        <iframe src="https://slartbartfast.cn/" frameborder="0"></iframe>
    </div>
</template>

<script>
    export default {
        name: "myBlog"
    }
</script>

<style scoped lang="scss">
    #box {
        padding-bottom:50px;
        height: calc(100vh - 50px);
        iframe {
            display: block;
            width: 100%;
            height:calc(100vh - 50px);
        }
    }
</style>