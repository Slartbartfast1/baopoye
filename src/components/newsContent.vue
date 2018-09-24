<template>
    <div>
        <mt-header title="爆破页">
            <router-link to="/news" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <iframe :src="this.$route.query.newsUrl" frameborder="0"></iframe>
    </div>
</template>

<script>

    export default {
        mounted: function () {

            console.log(this.$route.query.newsUrl)
        },
        name: "newsContent",
    }
</script>


<style scoped>
iframe{
    width: 100%;
    height:100vh;
}
</style>