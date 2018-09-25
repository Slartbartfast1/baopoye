<template>
    <div id="box" fixed="true">
        <mt-header title="爆破页">
            <router-link to="/#" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <iframe src="https://www.slartbartfast.cn" frameborder="0"></iframe>
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
        height: calc(100vh - 80px);
        iframe {
            display: block;
            width: 100%;
            height:calc(100vh - 80px);
        }
    }
</style>