<template>
    <div class="home">
        <mt-header title="myApp">
        </mt-header>
        <img alt="Vue logo" src="../assets/logo.png">
        <index msg="myApp"/>
        <div class="mui-card">
            <a class="mint-cell">
                <div class="mint-cell-wrapper">
                    <div class="mint-cell-title">
                        <span class="mint-cell-text">日程</span>
                    </div>
                </div>
            </a>
            <transition-group appear>
                <mt-cell-swipe
                        v-for="(item,i) in todos"
                        :key="item.work"
                        :title=item.work
                        :right="[
    {
      content: '删除',
      style: { background: 'red', color: '#fff' },
      handler: function(){return remove(i)}
    }
  ]">

                </mt-cell-swipe>
            </transition-group>
        </div>
        <!--<p v-for="item in todos" :key="item.work">{{item.work}}</p>-->

    </div>
</template>

<script>
    // @ is an alias to /src
    import index from '@/components/index.vue'

    export default {
        name: 'home',
        components: {
            index
        },
        data() {
            return {
                todos: this.$store.state.todo,
            }
        },
        methods: {
            remove(i) {
                this.$store.commit('remove', i)
            }
        }
    }
</script>
<style scoped lang="scss">
    .mint-cell {
        background-color: #FFF;
    }

    .module {
        position: relative;
        display: inline-block;
        height: 10vw;
        width: 10vw;
        background-color: #DDD;
        margin: 10px;
    }

    .mint-cell-text {
        color: #42b983;
    }

    .mui-card {
        box-shadow: 0 0 10px rgba(0, 0, 0, .2);
        border-top-right-radius: 8px;
    }

    .home {
        margin-bottom: 55px;
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
