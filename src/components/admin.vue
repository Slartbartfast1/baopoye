<template>
    <div id="box" >
        <mt-header title="博客后台" fixed="true">
            <router-link to="/#" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <iframe src="https://slartbartfast.cn/admin/login.php" frameborder="0"></iframe>
    </div>
</template>

<script>
    export default {
        name: "admin"
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