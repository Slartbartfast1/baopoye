<template>
    <div>
    <ul class="mui-table-view">
        <router-link v-for="item in news" :key="item.uniquekey" :to="{path:'/newsContent',query:{newsUrl:item.url}}">
            <li class="mui-table-view-cell mui-media">
            <a href="javascript:;">
                <img class="mui-media-object mui-pull-left" :src=item.thumbnail_pic_s>
                <div class="mui-media-body">
                    {{item.title}}
                    <p class="mui-ellipsis">{{item.title}}</p>
                </div>
            </a>
        </li>
        </router-link>
        <router-view/>
    </ul>
    </div>

</template>

<script>
    export default {
        name: "news",
        mounted:function(){return this.getNews()},
        data(){
            return{
                news:[],
                url:'http://v.juhe.cn/toutiao/index?type=&key=6b1572da88601cd59f67caaca35f7be5'
            }
        },
        methods:{
            getNews(){
                this.$http.post("http://query.yahooapis.com/v1/public/yql",{q: "select * from json where url=\'" + this.url+ "'",
                    //代理返回格式
                    format: "json"},{emulateJSON: true})
                    .then(
                        (response)=>{
                            this.news=response.body.query.results.json.result.data
                            console.log(this.news)
                        },
                        (error)=>{
                            console.log(error);
                        }
                    );
            },
        },


    }

</script>

<style scoped lang="scss">
ul{
    margin-bottom: 50px;
}
</style>