<template>
    <div class="main">
      <div class="ad">
        <span class="main-header">烹饪</span>
        <div class="main-con">
          <span>一口弹糯</span><br>
          <span>爱上五谷杂粮</span>
        </div>
        <span class="main-con2">飞利浦迷你五谷电饭煲（IH电磁加热）新品上市</span>
        <el-row class="main-footer">
          <el-button type="primary">了解详情</el-button>
          <el-button type="primary">在零售商处购买</el-button>
        </el-row>
      </div>
    </div>
</template>

<script>
export default {
   
}
</script>

<style lang="less" scoped>
.main {
  position: relative;
  margin-bottom: 50px;
  background: url(../../assets/img/homepage/rice-cooker-L.jpg) no-repeat center;
  height: 590px;
  width: 100%;
  margin-top: -10px;
  margin: 0 auto;
}
.ad{
  margin: 0 auto;
}
.main > div {
  position: absolute;
  top:44px;
  left: 150px;
  height: 455px;
  width: 500px;
}
.main-header{
  font-size: 30px;
  color: white;
  position: relative;
  left: -70px;
  top: -30px;
}
.main-con{
  font-size: 55px;
  color: white;
  position: relative;
  left: 152px;
  text-align: left;
  margin-bottom: 150px;
  top:90px;
}
.main-con2{
  position: relative;
  left: 70px;
  top:-20px;
  text-align: left;
  color: white;

}
.main-footer{
  position: relative;
  left: 28px;
}
</style>