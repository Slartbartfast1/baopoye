<template>
    <div>
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
    height:500px;
}
</style>