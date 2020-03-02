<template>
    <div>
        <goods-header></goods-header>
        <goods-detail></goods-detail>
    </div>
</template>

<script>
import GoodsHeader from "../goodsdetail/g-detail-header";
import GoodsDetail from "../goodsdetail/g-detail-main";
export default {
    components:{GoodsHeader,GoodsDetail}
}
</script>

<style lang="less" scoped>

</style>