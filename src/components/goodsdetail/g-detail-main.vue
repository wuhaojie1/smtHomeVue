<template>
  <div class="main1">
    <div class="goodsprice" autoplay="true">
      <video src="http://i1.mifile.cn/f/i/2019/airconditionc1/v1/intro-video.mp4">
        
      </video>
      <h1 class="goodsname">{{goodsname}}
          <span>一级效能</span>
      </h1>
      <p class="goodsinfo">1.5匹 | 全直流变频 | 高效制冷/热 | 静音设计 | 自清洁 | 全屋互联</p>
      <h1 class="price">{{goodsprice}}</h1>
    </div>
    <div class="main2">
        <div class="main2-block">
            <div class="item">
                <h4>高效制冷/热</h4>
                <div>快速精准</div>
            </div>
            <div class="item">
                <h4>静音设计</h4>
                <div>安静贴心为您服务</div>
            </div>
        </div>
        <div class="main2-block">
            <div class="item">
                <h4>自动清洁</h4>
                <div>快速清洁，省心省力</div>
            </div>
            <div class="item">
                <h4>13键遥控器</h4>
                <div>便捷操作，握感舒适</div>
            </div>
        </div>
        <div class="main2-block">
            <div class="item">
                <h4>一级能效</h4>
                <div>直流变频，节能省电</div>
            </div>
            <div class="item">
                <h4>简约外观</h4>
                <div>贴合式设计</div>
            </div>
        </div>
        <div class="main2-block">
            <div class="item">
                <h4>接入全屋互联</h4>
                <div>全屋家电，智能互联</div>
            </div>
            <div class="item">
                <h4>售后无忧</h4>
                <div>6年质保</div>
            </div>
        </div>
    </div>
    <div class="main3">
        <h1>高效制冷/热，温度随心控制</h1>
        <p>管翅式换热器提供了充足的换热面积。98mm的超大贯流风扇使出风<br>
           更强劲，实现快速制冷制热。</p> 
        <ul class="mainul">
            <li>
                <div class="mainlidiv1">
                    660m<sup>3</sup>/h
                </div>
                <div class="mainlidiv2">循环风量</div>
            </li>
            <li>
                <div class="mainlidiv1">
                    1.5匹
                </div>
                <div class="mainlidiv2">适用面积16m <sup>2</sup></div>
            </li>
            <li>
                <div class="mainlidiv1">
                    大角度
                </div>
                <div class="mainlidiv2">送风</div>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "goods-detail",
  data() {
    return {
        goodsname:"米家互联网空调C1",
        goodsprice:"￥2399"
    };
  }
};
</script>

<style lang="less" scoped>
.goodsprice{
    margin: 0 auto;
    position: relative;
}
.goodsprice>video{
  background: url(http://i1.mifile.cn/f/i/2019/airconditionc1/v1/intro-video.mp4)
    no-repeat 0 0;
  height: 758.8px;
  width: 1349.13px;
}
.goodsname{
    position: absolute;
    top: 500px;
    display: block;
    width: 1349.13px;
    color:grey;
    letter-spacing: .5rem;
    span{
        font-size: 18px;
    }
}
.goodsinfo{
    position: absolute;
    top: 570px;
    display: block;
    width: 1349.13px;
    color: grey;
}
.price{
    display: block;
    color: gold;
    top: 600px;
    position: absolute;
    width: 1349.13px;
}
.main2{
    margin: 0 auto;
    height: 100%;
    width: 1000px;
    text-align: center;
    display: flex;
}
.main2-block{
    flex: 1;
    color: grey;
}
.item{
    div{
        margin-top: -5px;
        font-size: 12px;
    }
}
.main3{
    position: relative;
    height: 737.8px;
    width: 1349px;
    background: url(http://i1.mifile.cn/f/i/2019/airconditionc1/v1/fast.jpg?V2) no-repeat 0 0;
    background-size: 100% 100%;
    margin-top: 40px;
    h1{
        display: block;
        width: 1349px;
        margin: 0 auto;
        position: absolute;
        top: 250px;
        color: white;
        
    }
    p{
        display: block;
        width: 1349px;
        margin: 0 auto;
        position: absolute;
        top: 320px;
        color: white;
    }
}
.mainul{
    display: table;
    height: 64px;
    width: 600px;
    position: absolute;
    top: 380px;
    left: 335px;
    margin:  0 auto;
    text-align: center;
    li{
        list-style: none;
        color: white;
        float: left;
        height: 63px;
        width: 200px;
        line-height: 30px;
        .mainlidiv1{
            font-size: 25px;
            font-weight: bold;
            text-align: center;
        }
        .mainlidiv2{
            font-size: 15px;
            opacity: 0.7;
            text-align: center;
        }
    }
}
</style>