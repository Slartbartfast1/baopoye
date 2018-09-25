<template>
    <div>
        <mt-header title="新闻" fixed="true">
            <router-link to="/news" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <iframe :src="this.$route.query.newsUrl" frameborder="0"></iframe>
    </div>
</template>

<script>
    export default {
        name: "newsContent",
    }
</script>

<style scoped lang="scss">
    div {
        padding-bottom: 50px;
        height: calc(100vh - 50px);
        iframe {
            display: block;
            width: 100%;
            height: calc(100vh - 50px);
        }
    }
</style>