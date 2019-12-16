<template>
  <div id="siteinfomation">
    <h1>路线/站点信息</h1>
    <h2>热门站点信息</h2>
    <site-list />
    <h2>站查询</h2>
    <div class="search">
      <el-input placeholder="站名、站编号"
                suffix-icon="el-icon-search"
                class="search-input">
      </el-input>
      <a href="#">按拼音查找</a>
    </div>
    <h2>查看路线信息</h2>
    <site-tab />
    <h2>相关链接</h2>
    <section class="about">
      <a href="#">
        <h3><i class="el-icon-arrow-right"></i>运行路线图</h3>
        <div class="space"></div>
        <img src="@/assets/images/sitemap.png"
             alt="">
      </a>
      <div class="space"></div>
      <a href="#">
        <h3><i class="el-icon-arrow-right"></i>查询票价、换乘</h3>
        <div class="space"></div>
        <img src="@/assets/images/searchprice.png"
             alt="">
      </a>
      <div class="space"></div>
      <a href="#">
        <h3><i class="el-icon-arrow-right"></i>袖珍安全指南</h3>
        <div class="space"></div>
        <img src="@/assets/images/safetyguide.png"
             alt="">
      </a>
    </section>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>票价查询</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
import SiteList from '@/components/SiteInfo/SiteList';
import SiteTab from '@/components/SiteInfo/SiteTab';
export default {
  name: 'SiteInformation',
  props: [''],
  data () {
    return {

    }
  },
  components: {
    SiteList,
    SiteTab
  }
}

</script>
<style scoped>
#siteinfomation {
  padding-top: 100px;
}
h1,
h2 {
  text-align: center;
  color: #00467e;
}
h1 {
  font-size: 42px;
}
h2 {
  font-size: 32px;
  margin-top: 80px;
}
.search {
  width: 560px;
  margin: 0 auto;
  margin-top: 50px;
  text-align: center;
}
.search-input {
  margin-bottom: 30px;
}
.search a {
  font-size: 16px;
  color: #00467e;
}
.search a:hover {
  text-decoration: underline;
}
.search a::after {
  content: "";
  display: inline-block;
  width: 12px;
  height: 10px;
  background: url("../assets/images/gray.png") no-repeat;
  background-size: 12px auto;
  margin-left: 5px;
}
.about {
  display: flex;
  padding-bottom: 50px;
  width: 1145px;
  margin: 0 auto;
  padding-top: 50px;
}
.about a {
  display: block;
  height: 98px;
  line-height: 98px;
  width: 260px;
  display: flex;
  border: 1px solid #ddd;
}
.about h3 {
  margin-left: 10px;
  font-size: 16px;
  color: #00467e;
}
.about a img {
  height: 72px;
  width: 72px;
  margin-top: 15px;
  margin-right: 10px;
}
.about a:last-child img {
  height: 72px;
  width: 92px;
  margin-top: 15px;
  margin-right: 10px;
}
</style>
<style>
#siteinfomation .search-input .el-input__inner {
  border-radius: 27px;
  height: 54px;
  border-color: #9bafb5;
}
#siteinfomation > span {
  font-size: 34px;
  margin-right: 5px;
  margin-top: 6px;
  font-weight: bold;
  color: #00467e;
}

#siteinfomation .el-breadcrumb {
  clear: both;
  margin-bottom: 10px;
  margin-left: 30px;
}
#siteinfomation .el-breadcrumb__item {
  font-size: 12px;
}
#siteinfomation .el-breadcrumb__item .is-link {
  color: #00467e;
}
#siteinfomation .el-breadcrumb__item .is-link:hover {
  text-decoration: underline;
}
</style>
