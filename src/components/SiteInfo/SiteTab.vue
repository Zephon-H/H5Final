<template>
  <div id="site-tab">
    <article>
      <el-tabs type="border-card">
        <el-tab-pane>
          <div slot="label"
               class="tab">
            <img src="../../assets/images/1.png"
                 alt="">
            1号线
          </div>
          <section>
            <div class="title">
              <img src="../../assets/images/1.png"
                   alt="">
              <h2>1号线（24站）</h2>
              <a href="#">前往1号线页面</a>
            </div>
            <div class="site">
              <el-steps>
                <el-step v-for="(item, index) in items"
                         :key="index">
                  <img :src="item.icon"
                       alt=""
                       slot="icon">
                  <a href="#"
                     slot="title">{{item.title}}</a>
                </el-step>
              </el-steps>
            </div>
            <div class="show">
              <div class="space"></div>
              <img src="../../assets/images/a.jpg"
                   alt="">
              <img src="../../assets/images/b.jpg"
                   alt="">
              <div class="space"></div>
            </div>
            <a href="#"
               class="link">
              <i class="el-icon-arrow-right"></i>
              查看更多</a>
          </section>
        </el-tab-pane>
        <el-tab-pane>
          <div slot="label"
               class="tab">
            <img src="../../assets/images/2.png"
                 alt="">
            2号线
          </div>
          <section>
            a
          </section>
        </el-tab-pane>
      </el-tabs>
    </article>
  </div>
</template>

<script>

export default {
  name: 'SiteTab',
  props: [''],
  data () {
    return {
      items: [
        {
          title: '双港',
          icon: require('@/assets/images/1.png')
        },
        {
          title: '孔目湖',
          icon: require('@/assets/images/1.png')
        },
        {
          title: '长江路',
          icon: require('@/assets/images/1.png')
        },
        {
          title: '珠江路',
          icon: require('@/assets/images/1.png')
        },
        {
          title: '庐山南大道',
          icon: require('@/assets/images/1.png')
        },
        {
          title: '绿茵路',
          icon: require('@/assets/images/1.png')
        },
        {
          title: '卫东',
          icon: require('@/assets/images/1.png')
        },
        {
          title: '地铁大厦',
          icon: require('@/assets/images/1.png')
        },
        {
          title: '秋水广场',
          icon: require('@/assets/images/1.png')
        },
        {
          title: '滕王阁',
          icon: require('@/assets/images/1.png')
        },
        {
          title: '万寿宫',
          icon: require('@/assets/images/1.png')
        },
        {
          title: '八一馆',
          icon: require('@/assets/images/1.png')
        },
        {
          title: '丁公路北',
          icon: require('@/assets/images/1.png')
        },
        {
          title: '师大南路',
          icon: require('@/assets/images/1.png')
        },
        {
          title: '彭家桥',
          icon: require('@/assets/images/1.png')
        },
        {
          title: '谢家村',
          icon: require('@/assets/images/1.png')
        },
        {
          title: '青山湖大道',
          icon: require('@/assets/images/1.png')
        },
        {
          title: '高新大道',
          icon: require('@/assets/images/1.png')
        },
        {
          title: '艾溪湖西',
          icon: require('@/assets/images/1.png')
        },
        {
          title: '艾溪湖东',
          icon: require('@/assets/images/1.png')
        },
        {
          title: '太子殿',
          icon: require('@/assets/images/1.png')
        },
        {
          title: '奥体中心',
          icon: require('@/assets/images/1.png')
        },
        {
          title: '瑶湖西',
          icon: require('@/assets/images/1.png')
        }
      ]
    }
  },
}

</script>
<style scoped>
#site-tab {
  margin-top: 50px;
  background-color: #eef6f9;
}
article {
  max-width: 1140px;
  margin: 0 auto;
}
.tab {
  margin-top: 15px;
}
.tab img {
  width: 30px;
  height: 30px;
  left: 45px;
  /* margin-top: 20px; */
  position: absolute;
}
.tab::after {
  content: "";
  display: block;
  position: absolute;
  bottom: 8px;
  left: 48%;
  width: 7px;
  height: 4px;
  margin-left: -3px;
  background-repeat: no-repeat;
  background-position: left top;
  background-image: url("../../assets/images/arrow-off.png");
  -webkit-background-size: 7px 4px;
  background-size: 7px 4px;
}
.title {
  display: flex;
  height: 40px;
  line-height: 40px;
  margin-top: 20px;
}
.title img {
  width: 40px;
  height: 40px;
}

.title h2 {
  font-size: 16px;
  margin-left: 10px;
}
.title a {
  margin-left: 20px;
  font-size: 13px;
  color: #00467e;
}
.site {
  padding-left: 5px;
  padding-right: 5px;
  margin-top: 30px;
}
.site img {
  width: 30px;
  height: 30px;
}
.site a {
  /* margin: 0 auto; */
  display: block;
  margin-left: 6px;
  margin-top: 3px;
  width: 20px;
  color: #00467e;
  font-size: 12px;
  line-height: 18px;
}
.site a::before {
  content: "";
  display: block;
  width: 10px;
  height: 10px;
  background: url("../../assets/images/gray-down.png") no-repeat center;
  background-size: contain;
  margin-top: 2px;
}
.site a::after {
  content: "";
  display: block;
  width: 10px;
  height: 10px;
  background: url("../../assets/images/gray.png") no-repeat center;
  background-size: contain;
  margin-top: 2px;
}

.show {
  display: flex;
  margin-top: 50px;
}
.show img {
  width: 262px;
  height: 174px;
  margin-left: 15px;
  margin-right: 15px;
}

.link {
  display: block;
  height: 60px;
  line-height: 60px;
  width: 133px;
  margin: 0 auto;
  margin-top: 50px;
  text-align: left;
  padding-left: 30px;
  background-color: #fff;
  border: 1px solid #c2d0d5;
  border-radius: 3px;
  transition: background-color 0.3s;
  position: relative;
  margin-bottom: 50px;
  color: #00467e;
  font-weight: bold;
}
.link:hover {
  background-color: #d6dddf;
}
.link::after {
  content: "";
  /* display: block; */
  width: 12px;
  height: 12px;
  position: absolute;
  margin-left: 6px;
  top: 42%;
  background: url("../../assets/images/gray.png") no-repeat;
  background-size: contain;
}
</style>
<style >
#site-tab .el-tabs--border-card > .el-tabs__header {
  border: none;
  border-top: 1px solid #ccc;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
}
#site-tab .is-top {
  height: 88px;
  line-height: 88px;
  background: #fff;
}
#site-tab .el-tabs__item {
  width: 126px;
  text-align: center;
  color: #00467e;
  border-right: 1px solid #ccc;
}
#site-tab .is-active {
  background: #ccc;
}
#site-tab .el-tabs__item:hover {
  text-decoration: underline;
}
#site-tab .el-tabs {
  border: none;
  box-shadow: none;
}
#site-tab .el-tabs__content {
  padding: 0;
  background: #eef6f9;
}

#site-tab .el-step__line {
  background-color: red;
  height: 5px;
  top: 9px;
}
</style>