<template>
  <div>
    <div class="footer-head">
      <div class="footer-head-left">烹饪(44)</div>
      <div class="footer-head-right">
        <span>每页的结果</span>
        <select name id>
          <option value="12">12</option>
          <option value="24">24</option>
          <option value="36">36</option>
        </select>
        <select name id>
          <option value="最佳匹配">最佳匹配</option>
          <option value="最新发布">最新发布</option>
          <option value="价格(升序)">价格(升序)</option>
          <option value="价格(降序)">价格(降序)</option>
          <option value="评级">评级</option>
          <option value="产品类型">产品类型</option>
        </select>
      </div>
    </div>
    <div class="footer-main">
      <div class="footer-left">
        <p class="filter">过滤器</p>
        <div>产品类型</div>
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="复选框 A"></el-checkbox>
          <el-checkbox label="复选框 B"></el-checkbox>
          <el-checkbox label="复选框 C"></el-checkbox>
          <el-checkbox label="复选框 D"></el-checkbox>
          <el-checkbox label="复选框 E"></el-checkbox>
        </el-checkbox-group>
        <div class="charge">
          <p>价格范围</p>
          <el-slider :min="0" :max="5000" range v-model="minvalue"></el-slider>
          <p>￥{{minvalue}}</p>
        </div>
      </div>
      <div class="footer-right">
        <ul class="goodslist">
          <li>
            <div class="newgoods"></div>
            <img src="https://images.philips.com/is/image/PhilipsConsumer/HD9860_91-IMS-zh_CN?&wid=183&hei=183&$jpglarge$">    
            <!-- Premium XXL 型空气炸锅 HD9860/91 -->
            <h3></h3>
            <span class="goods">Premium</span>
            <p class="goodsname">XXL 型空气炸锅</p>
            <p class="goodsnum">HD9860/91</p>
            <ul>
              <li class="googsdata" v-for="items in googsdata" :key="items.index">{{items}}</li>
            </ul>
            <h4>￥{{charge}}</h4>
            <div class="moremsg"><router-link to="../goodsdetail/g-details">查看更多</router-link></div>
          </li>
          <li>
            <div class="newgoods"></div>
            <img src="https://images.philips.com/is/image/PhilipsConsumer/HD9860_91-IMS-zh_CN?&wid=183&hei=183&$jpglarge$">    
            <!-- Premium XXL 型空气炸锅 HD9860/91 -->
            <h3></h3>
            <span class="goods">Premium</span>
            <p class="goodsname">XXL 型空气炸锅</p>
            <p class="goodsnum">HD9860/91</p>
            <ul>
              <li class="googsdata" v-for="items in googsdata" :key="items.index">{{items}}</li>
            </ul>
            <h4>￥{{charge}}</h4>
            <div class="moremsg"><a href=":Javascript">查看更多</a></div>
          </li>
          <li>
            <div class="newgoods"></div>
            <img src="https://images.philips.com/is/image/PhilipsConsumer/HD9860_91-IMS-zh_CN?&wid=183&hei=183&$jpglarge$">    
            <!-- Premium XXL 型空气炸锅 HD9860/91 -->
            <h3></h3>
            <span class="goods">Premium</span>
            <p class="goodsname">XXL 型空气炸锅</p>
            <p class="goodsnum">HD9860/91</p>
            <ul>
              <li class="googsdata" v-for="items in googsdata" :key="items.index">{{items}}</li>
            </ul>
            <h4>￥{{charge}}</h4>
            <div class="moremsg"><a href=":Javascript">查看更多</a></div>
          </li>
          <li>
            <div class="newgoods"></div>
            <img src="https://images.philips.com/is/image/PhilipsConsumer/HD9860_91-IMS-zh_CN?&wid=183&hei=183&$jpglarge$">    
            <!-- Premium XXL 型空气炸锅 HD9860/91 -->
            <h3></h3>
            <span class="goods">Premium</span>
            <p class="goodsname">XXL 型空气炸锅</p>
            <p class="goodsnum">HD9860/91</p>
            <ul>
              <li class="googsdata" v-for="items in googsdata" :key="items.index">{{items}}</li>
            </ul>
            <h4>￥{{charge}}</h4>
            <div class="moremsg"><a href=":Javascript">查看更多</a></div>
          </li>
          <li>
            <div class="newgoods"></div>
            <img src="https://images.philips.com/is/image/PhilipsConsumer/HD9860_91-IMS-zh_CN?&wid=183&hei=183&$jpglarge$">    
            <!-- Premium XXL 型空气炸锅 HD9860/91 -->
            <h3></h3>
            <span class="goods">Premium</span>
            <p class="goodsname">XXL 型空气炸锅</p>
            <p class="goodsnum">HD9860/91</p>
            <ul>
              <li class="googsdata" v-for="items in googsdata" :key="items.index">{{items}}</li>
            </ul>
            <h4>￥{{charge}}</h4>
            <div class="moremsg"><a href=":Javascript">查看更多</a></div>
          </li>
          <li>
            <div class="newgoods"></div>
            <img src="https://images.philips.com/is/image/PhilipsConsumer/HD9860_91-IMS-zh_CN?&wid=183&hei=183&$jpglarge$">    
            <!-- Premium XXL 型空气炸锅 HD9860/91 -->
            <h3></h3>
            <span class="goods">Premium</span>
            <p class="goodsname">XXL 型空气炸锅</p>
            <p class="goodsnum">HD9860/91</p>
            <ul>
              <li class="googsdata" v-for="items in googsdata" :key="items.index">{{items}}</li>
            </ul>
            <h4>￥{{charge}}</h4>
            <div class="moremsg"><a href=":Javascript">查看更多</a></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkList: [],
      minvalue: 0,
      maxvalue: 5000,
      googsdata: [
        "智能感应技术",
        "去脂技术",
        "专利高速空气循环技术",
        "黑色、铜、1.4kg"
      ],
      charge:500
    };
  }
};
</script>

<style lang="less" scoped>
.footer-head {
  height: 84px;
  width: 960px;
  margin: auto;
}
.footer-head-left {
  float: left;
  font-size: 34px;
}
.footer-head-right {
  float: right;
  height: 64px;
  width: 374px;
  display: inline-block;
  margin-top: 20px;
}
.footer-head-right > span {
  margin-right: 10px;
}
.footer-head-right > select {
  margin-right: 10px;
}
.footer-main {
  margin: auto;
  width: 960px;
  height: 100%;
}
.footer-left {
  position: relative;
  height: 473px;
  width: 245.5px;
  float: left;
  border: 1px;
  border-style: dashed;
}
.footer-left > div {
  position: absolute;
  margin-top: 80px;
  margin-left: 20px;
}
.filter {
  font-size: 25px;
  margin-left: 20px;
  float: left;
  margin-top: 20px;
}
.el-checkbox {
  margin-top: 25px;
  margin-right: 200px;
  font-size: 20px;
  width: 0px;
}
.charge {
  position: absolute;
  top: 260px;
  width: 200px;
}
.footer-right {
  width: 700px;
  height: 800px;
  float: right;
}
.goodslist>li{
  list-style: none;
  display: block;
  height: 100%;
  width: 163.167px;
  border: 1px;
  border-style: solid;
  border-color: darkgrey;
  float: left;
  margin-right: 20px;
  margin-bottom: 20px;
}
.newgoods{
  width:161.617px;
  height:29.5px;
  margin-top: -10px;
}
img{
  text-align: center;
  height: 121.617px;
  width: 121.617px;
}
.goods{
  font-size: 14px;
  font-weight: bold;
  margin-right: 10px;
}
.goodsname{
  margin-top: -3px;
  font-size: 15px;
}
.goodsnum{
  font-size: 12px;
  margin-top: -5px;
  margin-left: -40px;
}
.googsdata{
  text-align: left;
  list-style: disc;
  font-size: 12px;
  color: darkgrey;   
}
.moremsg{
  border-top:white;
  height: 37px;
  width:163.617px;
}
.moremsg>a{
  text-decoration: none;
  line-height: 37px;
}
</style>