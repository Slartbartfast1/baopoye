<template>
    <div>
        <mt-header title="爆破页" fixed="true">
            <router-link to="/#" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div id="app">
            <div class="mui-input-row" v-on:keyup.enter="add">
                <mt-field placeholder="今天干点什么?" type="text" v-model="work">
                    <mt-button type="primary" size="normal" @click="add">提交</mt-button>
                </mt-field>
            </div>
            <ul class="mui-table-view">
                <transition-group appear>
                <li class="mui-table-view-cell" v-for="(item, i) in todo" :key="item.work">{{item.work}}<span
                        @click.prevent="remove(i)" class="mui-icon mui-icon-closeempty mui-pull-right"></span>
                </li>
                </transition-group>
            </ul>
        </div>
    </div>
</template>

<script>
import store from '../store.js'
    export default {
        store,
        name: "todo",
        data() {
            return {
                work: '',
                todo: this.$store.state.todo
            }
        },
        methods: {
            add() {
                var a = {work: this.work};
                this.$store.commit('add',a)
            },
            remove(i){
                this.$store.commit('remove',i)
            }
        },
    }
</script>

<style scoped lang="scss">
    #app {
        margin-top: 40px;
    }

    ul {
        margin-top: 10px;
    }
    .v-enter,
    .v-leave-to {
        opacity: 0;
        transform: translateY(80px);
    }

    .v-enter-active,
    .v-leave-active {
        transition: all 0.6s ease;
    }

    .v-move {
        transition: all 0.6s ease;
    }
</style>