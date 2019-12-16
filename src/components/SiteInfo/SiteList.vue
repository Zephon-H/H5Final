<template>
  <div id="site-list">
    <a href="#"
       v-for="(item, index) in data"
       :key="index">
      <el-card class="box-card">
        <div>
          <h1>{{item.site}}</h1>
          <img :src="i"
               v-for="(i, index1) in item.imgs"
               :key="index1"
               alt="">
        </div>
      </el-card>
    </a>
  </div>
</template>

<script>

export default {
  name: 'SiteList',
  props: [''],
  data () {
    return {
      data: [
        {
          site: '地铁大厦',
          imgs: [
            require("@/assets/images/1.png"),
            require("@/assets/images/2.png"),
          ],
        },
        {
          site: '八一广场',
          imgs: [
            require("@/assets/images/1.png"),
            require("@/assets/images/2.png"),
          ],
        },
        {
          site: '谢家村',
          imgs: [
            require("@/assets/images/1.png"),
          ],
        }
      ]
    }
  },
}

</script>
<style scoped>
#site-list {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  /* max-width: 1140px; */
}
h1 {
  margin: 0;
  font-size: 24px;
  margin-top: 20px;
}
#site-list a {
  display: block;
  width: 375px;
  margin-left: 20px;
  margin-right: 20px;
  position: relative;
}
.box-card {
  text-align: center;
  width: 375px;
  height: 235px;
  transition: background-color 0.3s;
  cursor: pointer;
}
a::after {
  content: "";
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: block;
  width: 12px;
  height: 10px;
  background: url("../../assets/images/gray.png") no-repeat;
  background-size: contain;
}
.box-card:hover {
  background-color: #e5e5e5;
}
img {
  margin-top: 60px;
  margin-left: 20px;
  margin-right: 20px;
}
</style>
