<template>
    <div id="nav-header" :class="curtain === true ? 'nav-header nav-header-active' : 'nav-header' ">
        <div class="header-menu" v-show="!curtain">
            <div class="menu-item">
                <div class="menu-item-text">主页</div>
            </div>
            <div class="menu-item">
                <div class="menu-item-text">推荐</div>
            </div>
            <div class="menu-item">
                <div class="menu-item-text">通知</div>
            </div>
            <div class="menu-item">
                <div class="menu-item-text">购物车</div>
            </div>
            <div class="menu-item">
                <div class="menu-item-text">我的</div>
            </div>
            <div class="menu-item search-item" @click="tosearch">
                <!--<a id="ac-gn-link-search" class="ac-gn-link ac-gn-link-search" href="/cn/search"
                   data-analytics-title="search" data-analytics-click="search" data-analytics-intrapage-link=""
                   aria-label="搜索 apple.com.cn" role="button" aria-haspopup="true"></a>-->
                <!--<div class="menu-item-text">购物车</div>-->
                <img class="search-image" src="../assets/img/header/search.png">
            </div>
        </div>
        <search :show="curtain"
                @changeEvent="changeEvent"/>
    </div>
</template>

<script>
    import Search from "./search";
    export default {
        name: "nav-header",
        components: {Search},
        data() {
            return {
                activeIndex: '1',
                curtain: false
            }
        },
        mounted() {
        },
        computed: {

        },
        watch: {},
        methods: {
            // handleSelect(key, keyPath) {
            //     window.console.log(key, keyPath);
            // },
            tosearch(){
                this.curtain = true;
            },
            changeEvent(curtain){
                this.curtain = curtain
            },
        }
    }
</script>

<style lang="less" scoped>
    .nav-header-active{
        background: #000 !important;
        width: 100%;
        height: 44px;
    }
    .nav-header {
        background: rgba(0, 0, 0, 0.8);
        width: 100%;
        height: 44px;

        .header-menu {
            overflow: hidden;
            height: 44px;
            display: flex;
            max-width: 980px;
            margin: 0 auto;
            justify-content: space-between;

            .menu-item {
                line-height: 44px;
                cursor: pointer;

                .menu-item-text {
                    margin: 0 10px;
                    font-size: 14px;
                    color: #f5f5f7;
                    font-weight: 400;
                    opacity: .8;
                    /*outline-offset: -7px;*/
                    font-family: "SF Pro SC", "HanHei SC", "SF Pro Text", "Myriad Set Pro", "SF Pro Icons", "PingFang SC", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
                }

                .search-image {
                    width: 22px;
                    height: 22px;
                    margin: 0 10px;
                }
            }
            .menu-item:hover{
                line-height: 44px;
                cursor: pointer;

                .menu-item-text {
                    margin: 0 10px;
                    font-size: 14px;
                    color: #f5f5f7;
                    font-weight: 400;
                    opacity: .95;
                    /*outline-offset: -7px;*/
                    font-family: "SF Pro SC", "HanHei SC", "SF Pro Text", "Myriad Set Pro", "SF Pro Icons", "PingFang SC", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
                }

                .search-image {
                    width: 22px;
                    height: 22px;
                    margin: 0 10px;
                }
            }

            .search-item{
                display: flex;
                align-items: center;
            }
        }
    }
</style>