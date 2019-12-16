/*
 * @Author: zephon 
 * @Date: 2019-12-07 23:12:22 
 * @Last Modified by: zephon
 * @Last Modified time: 2019-12-07 23:47:03
 */
<template>
  <div id="trip">
    <article>
      <h1>乘坐地铁游览南昌</h1>
      <p>南昌地铁带您玩转南昌人气景点！</p>
      <img src="../assets/images/big-map.jpg"
           alt="">
      <h2>请选择您要前往的区域</h2>
      <h3>南昌地铁1号线区域</h3>
      <section>
        <ul>
          <li v-for="(item, index) in data[0]['1']"
              :key="index">
            <a href="#">
              <img :src="getImgUrl(item.img)"
                   alt="">
              <h4>
                <i class="el-icon-arrow-right" />{{item.name}}</h4>
              <p>{{item.site}}</p>
            </a>
          </li>
        </ul>
      </section>
      <h3>南昌地铁2号线区域</h3>
      <section>
        <ul>
          <li v-for="(item, index) in data[0]['2']"
              :key="index">
            <a href="#">
              <div class="bg">
                <img :src="getImgUrl(item.img)"
                     alt="">
              </div>
              <h4>
                <i class="el-icon-arrow-right" />{{item.name}}</h4>
              <p>{{item.site}}</p>
            </a>
          </li>
        </ul>
      </section>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>票价查询</el-breadcrumb-item>
      </el-breadcrumb>
    </article>

  </div>
</template>

<script>

export default {
  name: 'Trip',
  props: [''],
  data () {
    return {
      data: [
        {
          "1": [
            {
              name: "瑶湖郊野森林公园",
              site: "瑶湖西站",
              img: "yaohu.jpg",
            },
            {
              name: "江西师范大学",
              site: "奥体中心站",
              img: "jxsf.jpg",
            },
            {
              name: "艾溪湖森林湿地公园",
              site: "艾溪湖东站",
              img: "aixihu.jpg",
            },
            {
              name: "南昌海洋公园",
              site: "艾溪湖西站",
              img: "haiyanggongyuan.jpg",
            },
            {
              name: "恒茂梦时代广场",
              site: "谢家村站",
              img: "hengmao.jpg",
            },
            {
              name: "699文化创意园",
              site: "谢家村站",
              img: "699.jpg",
            },
            {
              name: "青山湖",
              site: "彭家桥站",
              img: "qingshanhu.jpg",
            },
            {
              name: "人民公园",
              site: "丁公路北站",
              img: "renming.jpg",
            },
            {
              name: "八一起义纪念馆",
              site: "八一馆站",
              img: "81.jpg",
            },
            {
              name: "滕王阁",
              site: "滕王阁站",
              img: "tengwangge.jpg",
            },
            {
              name: "江西省博物馆",
              site: "滕王阁站",
              img: "bowuguan.jpg",
            },
            {
              name: "秋水广场",
              site: "秋水广场",
              img: "qiushui.jpg",
            },
          ],
          "2": [

            {
              name: "绿地303观光厅",
              site: "地铁大厦站",
              img: "303.jpg",
            },
            {
              name: "魅力赣江水上乐园",
              site: "学府大道东站",
              img: "shuishangleyuan.jpg",
            },
            {
              name: "中国傩园",
              site: "卧龙山站",
              img: "nuoyuan.jpg",
            },
            {
              name: "南昌瓷板画艺术博物馆",
              site: "卧龙山站",
              img: "cipan.jpg",
            },
            {
              name: "滨江月季园",
              site: "卧龙山站",
              img: "yueji.jpg",
            },
            {
              name: "南昌国际体育中心",
              site: "国体中心站",
              img: "tiyu.jpg",
            },
            {
              name: "南昌绿地博览中心",
              site: "国博站",
              img: "lvdi.jpg",
            },
            {
              name: "九龙湖公园",
              site: "市民中心站",
              img: "jiulonghu.jpg",
            },
            {
              name: "卢塞恩小镇",
              site: "市民中心站",
              img: "lusaien.jpg",
            },
            {
              name: "南昌万达海洋乐园",
              site: "九龙湖南站",
              img: "wandahaiyangleyuan.jpg",
            },
            {
              name: "南昌万达乐园",
              site: "九龙湖南站",
              img: "wandaleyuan.jpg",
            },
          ]
        }
      ]
    }
  },
  methods: {
    getImgUrl (url) {
      return require('../assets/images/pic/' + url);
    }
  },
}

</script>
<style scoped>
article {
  padding-top: 100px;
  text-align: center;
  width: 1410px;
  margin: 0 auto;
}

article h1 {
  font-size: 42px;
  color: #00467e;
}

article p {
  margin-bottom: 30px;
  font-size: 18px;
}

article h2 {
  color: #00467e;
  font-size: 32px;
}

article h3 {
  clear: both;
  font-size: 24px;
  color: #000;
  font-weight: bold;
  margin-top: 30px;
}

article > img {
  margin: 0 auto;
}

article section {
  margin-top: 30px;
}

article ul {
  padding-left: 100px;
  padding-right: 100px;
}

article ul li {
  margin-left: 40px;
  float: left;
  text-align: left;
}

article ul li a:hover {
  text-decoration: underline;
}

article ul li a h4 {
  color: #00467e;
  font-size: 18px;
}

article ul a h4 i {
  font-weight: bolder;
  height: 26px;
  line-height: 26px;
  margin-right: 3px;
  font-size: 16px;
}
article ul li a p {
  margin-top: 5px;
  font-size: 14px;
  color: #000;
}
opacity {
  transition-property: opacity;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transition-delay: 0s;
}
article ul li img {
  width: 360px;
  height: 240px;
  transition: opacity 0.3s;
}
.bg {
  background-color: #000;
}
article ul li img:hover {
  opacity: 0.8;
}
</style>
<style>
#trip .el-breadcrumb {
  clear: both;
  margin-bottom: 10px;
  margin-left: 30px;
}
#trip .el-breadcrumb__item {
  font-size: 12px;
}
#trip .el-breadcrumb__item .is-link {
  color: #00467e;
}
#trip .el-breadcrumb__item .is-link:hover {
  text-decoration: underline;
}
</style>