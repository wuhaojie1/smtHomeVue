<template>
    <div class="header">
        <h3 class="goodsname">{{goodsname}}</h3>
        <a href=":Javascript" class="goodsmsg">|   {{goodsname+'(一级效能)'}}</a>
        <div class="goodsserve">
            <a href=":Javascript">概述  |</a>
            <a href=":Javascript">参数  |</a>
            <a href=":Javascript">安装服务  |</a>
            <a href=":Javascript">售后政策  |</a>
            <a href=":Javascript">F码通道  |</a>
            <a href=":Javascript">用户评价</a>
            <el-button type="primary">点击购买</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name:"goods-header",
    data(){
        return{
            goodsname:"米家互联网空调C1"
        }
    }
}
</script>

<style lang="less" scoped>
.header{
    height: 80px;
    width: 80%;
    margin: 0 auto;
}
.goodsname{
    float: left;
    margin-right: 5px;
    margin-top: 28px;
}
.goodsmsg{
    float: left;
    margin-top: 30px;
    font-size: 14px;
}
.goodsserve{
    float: right;
    margin-top: 21px;
    a{
        margin: 5px 5px 0 0;
    }
}
.el-button{
    height: 35px;
    line-height: 13px;
}
a{
    text-decoration: none;
    color: #000;
}
</style>