<template>
    <div>
        <mt-header title="新闻" fixed="true">
            <router-link to="/#" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <mt-navbar v-model="active" fixed="true">
            <mt-tab-item id="tab-container1">头条</mt-tab-item>
            <mt-tab-item id="tab-container2">社会</mt-tab-item>
            <mt-tab-item id="tab-container3">娱乐</mt-tab-item>
            <mt-tab-item id="tab-container4">体育</mt-tab-item>
            <mt-tab-item id="tab-container5">军事</mt-tab-item>
        </mt-navbar>
        <!-- tab-container -->
        <mt-tab-container v-model="active" swipeable>

            <mt-tab-container-item id="tab-container1">
                <ul class="mui-table-view">
                    <router-link v-for="item in touTiao" :key="item.uniquekey"
                                 :to="{path:'/newsContent',query:{newsUrl:item.url}}">
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
            </mt-tab-container-item>
            <mt-tab-container-item id="tab-container2">
                <ul class="mui-table-view">
                    <router-link v-for="item in sheHui" :key="item.uniquekey"
                                 :to="{path:'/newsContent',query:{newsUrl:item.url}}">
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
            </mt-tab-container-item>
            <mt-tab-container-item id="tab-container3">
                <ul class="mui-table-view">
                    <router-link v-for="item in yuLe" :key="item.uniquekey"
                                 :to="{path:'/newsContent',query:{newsUrl:item.url}}">
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
            </mt-tab-container-item>
            <mt-tab-container-item id="tab-container4">

                <ul class="mui-table-view">
                    <router-link v-for="item in tiYu"  :key="item.uniquekey"
                                 :to="{path:'/newsContent',query:{newsUrl:item.url}}">
                        <li class="mui-table-view-cell mui-media">
                            <a href="javascript:;">
                                <img  v-lazy="item.thumbnail_pic_s" class="mui-media-object mui-pull-left" >
                                <div class="mui-media-body">
                                    {{item.title}}
                                    <p class="mui-ellipsis">{{item.title}}</p>
                                </div>
                            </a>
                        </li>
                    </router-link>
                    <router-view/>
                </ul>

            </mt-tab-container-item>
            <mt-tab-container-item id="tab-container5">
                <ul class="mui-table-view">
                    <router-link v-for="item in junShi" :key="item.uniquekey"
                                 :to="{path:'/newsContent',query:{newsUrl:item.url}}">
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
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
    import { Indicator } from 'mint-ui';
    export default {
        name: "news",
        mounted: function () {
            this.getTouTiao();
            this.getSheHui();
            this.getYuLe();
            this.getTiYu();
            this.getJunShi();
        },

        data() {
            return {
                active: 'tab-container1',
                touTiao: [],
                sheHui: [],
                yuLe: [],
                tiYu: [],
                junShi: [],
                touTiaoUrl: 'http://v.juhe.cn/toutiao/index?type=&key=6b1572da88601cd59f67caaca35f7be5',
                sheHuiUrl: 'http://v.juhe.cn/toutiao/index?type=shehui&key=6b1572da88601cd59f67caaca35f7be5',
                yuLeUrl: 'http://v.juhe.cn/toutiao/index?type=yule&key=6b1572da88601cd59f67caaca35f7be5',
                tiYuUrl: 'http://v.juhe.cn/toutiao/index?type=tiyu&key=6b1572da88601cd59f67caaca35f7be5',
                junShiUrl: 'http://v.juhe.cn/toutiao/index?type=junshi&key=6b1572da88601cd59f67caaca35f7be5',
            }
        },

        methods: {
            getTouTiao() {
                Indicator.open();
                this.$http.post("http://query.yahooapis.com/v1/public/yql", {
                    q: "select * from json where url=\'" + this.touTiaoUrl + "'",
                    //代理返回格式
                    format: "json"
                }, {emulateJSON: true})
                    .then(
                        (response) => {
                            this.touTiao = response.body.query.results.json.result.data
                            Indicator.close();
                            // console.log(this.news)
                        },
                        (error) => {
                            console.log(error);
                            Indicator.close();
                        }
                    );

            },
            getSheHui() {
                Indicator.open();
                this.$http.post("http://query.yahooapis.com/v1/public/yql", {
                    q: "select * from json where url=\'" + this.sheHuiUrl + "'",

                    format: "json"
                }, {emulateJSON: true})
                    .then(
                        (response) => {
                            // console.log(response.body.query.results.json.result.data)
                            this.sheHui = response.body.query.results.json.result.data
                            Indicator.close();

                        },
                        (error) => {
                            console.log(error);
                            Indicator.close();
                        }
                    );
            },
            getYuLe() {
                Indicator.open();
                this.$http.post("http://query.yahooapis.com/v1/public/yql", {
                    q: "select * from json where url=\'" + this.yuLeUrl + "'",
                    format: "json"
                }, {emulateJSON: true})
                    .then(
                        (response) => {
                            // console.log(response.body.query.results.json.result.data)
                            this.yuLe = response.body.query.results.json.result.data
                            Indicator.close();

                        },
                        (error) => {
                            console.log(error);
                            Indicator.close();
                        }
                    );
            },
            getTiYu() {
                Indicator.open();
                this.$http.post("http://query.yahooapis.com/v1/public/yql", {
                    q: "select * from json where url=\'" + this.tiYuUrl + "'",
                    format: "json"
                }, {emulateJSON: true})
                    .then(
                        (response) => {
                            this.tiYu = response.body.query.results.json.result.data
                            Indicator.close();

                        },
                        (error) => {
                            console.log(error);
                            Indicator.close();
                        }
                    );
            },
            getJunShi() {
                Indicator.open();
                this.$http.post("http://query.yahooapis.com/v1/public/yql", {
                    q: "select * from json where url=\'" + this.junShiUrl + "'",
                    format: "json"
                }, {emulateJSON: true})
                    .then(
                        (response) => {
                            this.junShi = response.body.query.results.json.result.data
                            Indicator.close();

                        },
                        (error) => {
                            console.log(error);
                            Indicator.close();
                        }
                    );
            },
        },

    }

</script>

<style scoped lang="scss">
    .is-selected {
        margin-bottom: 0 !important;
    }

    ul {
        margin-bottom: 50px;
    }

    .mint-tab-container {
        text-align: left;
        margin-top:90px;

    }
    .mint-navbar{
        margin-top:40px;
    }
    .v-enter,
    .v-leave-to {
        opacity: 0;
    }

    .v-enter-active,
    .v-leave-active {
        transition: all 0.6s ease;
    }

    .v-move {
        transition: all 0.6s ease;
    }
</style>