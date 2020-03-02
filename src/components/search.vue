<template>
    <div id="search" @click="searchClose" v-show="curtain">
        <div class="search-box">
            <div class="search-box-inputBox">
                <img src="../assets/img/header/search.png" class="search-img" @click="search">
                <input class="search-input"
                       :placeholder="placeholderText"
                       @click="inputClick"
                       v-model="inputText"/>
                <img src="../assets/img/header/close.png" class="close-img" @click="searchClose">
            </div>
            <div class="search-box-listBox" >
                <div class="search-results">
                    <div class="search-results-list">查找零售店</div>
                    <!-- <div class="search-results-list">查找零售店</div>
                    <div class="search-results-list">查找零售店</div>
                    <div class="search-results-list">查找零售店</div>
                    <div class="search-results-list">查找零售店</div>
                    <div class="search-results-list">查找零售店</div>
                    <div class="search-results-list">查找零售店</div>
                    <div class="search-results-list">查找零售店</div>
                    <div class="search-results-list">查找零售店</div>
                    <div class="search-results-list">查找零售店</div>
                    <div class="search-results-list">查找零售店</div>
                    <div class="search-results-list">查找零售店</div>
                    <div class="search-results-list">查找零售店</div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {stopEventBubble} from '../assets/js/common';
    export default {
        name: "search",
        data() {
            return {
                curtain: false,
                placeholderText:'搜索 smtHome.com',
                inputText:'',
            }
        },
        props: {
            show: {
                type: Boolean,
                default: false,
            },
        },
        watch: {
            show(v) {
                this.curtain = v
            }
        },
        methods: {
            searchClose() {
                this.curtain = false;
                this.$emit('changeEvent', this.curtain)
            },
            inputClick(e){
                // window.console.log(e);
                stopEventBubble(e)
            },
            search(e){
                stopEventBubble(e);
                // window.console.log(111)
            },
        }

    }
</script>

<style lang="less" scoped>
    #search {
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.4);

        .search-box {
            /*position: absolute;*/
            top: 0;
            width: 35%;
            height: 100vh;
            margin: 0 auto;

            .search-box-inputBox {
                height: 44px;
                position: relative;

                .search-input {
                    width: calc(100% - 39px - 38px);
                    height: 44px;
                    /*position: absolute;*/
                    padding: 0 38px 0 39px;
                    border: none;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    font-size: 15px;
                    background-color: #000;
                    color: #fff;
                    outline:none;
                }

                .search-img{
                    width: 22px;
                    height: 22px;
                    position: absolute;
                    left: 10px;
                    top: 12px;
                }
                .close-img{
                    position: absolute;
                    width: 14px;
                    height: 14px;
                    right: 10px;
                    top: 16px;
                    cursor: pointer;
                }

            }

            .search-box-listBox{
                font-size: 14px;
                line-height: 2;
                font-weight: 400;
                /* letter-spacing: -.016em; */
                font-family: "SF Pro Text","Myriad Set Pro","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
                /* display: none; */
                background: #fff;
                /* border-top: none; */
                border-bottom-left-radius: 18px;
                border-bottom-right-radius: 18px;
                /* color: #86868b; */
                /* min-height: 239px; */
                /* max-height: calc(100% - 44px); */
                 overflow-x: hidden;
                 overflow-y: auto;
                /* -webkit-overflow-scrolling: touch; */
                /* white-space: nowrap; */
                min-height: 240px;
                height: auto;

                .search-results{
                    margin: 0 40px;
                    padding: 24px 0 18px;

                    .search-results-list{
                        text-align: left;
                        margin: 6px auto;
                    }
                    .search-results-list:hover{
                        text-align: left;
                        margin: 6px auto;
                        background-color: #f5f5f7;
                        color: #06c;
                        cursor: pointer;
                    }

                }
            }
        }

        /*.curtain{
            background: rgba(0,0,0,0.48);
            display: none;
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 9998;
        }*/
    }
</style>