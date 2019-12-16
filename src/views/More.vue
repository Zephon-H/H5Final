/*
 * @Author: zephon 
 * @Date: 2019-12-06 09:52:18 
 * @Last Modified by: zephon
 * @Last Modified time: 2019-12-15 00:33:37
 */
<template>
  <div id="more">
    <article>
      <h1>新闻</h1>
      <div class="news">
        <section>
          <ul>
            <li v-for="(item, index) in list"
                :key="index">
              <news-part :data='item'></news-part>
            </li>
          </ul>
        </section>
      </div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>新闻</el-breadcrumb-item>
      </el-breadcrumb>
    </article>
  </div>

</template>

<script>
import NewsPart from '@/components/common/NewsPart'
export default {
  name: 'More',
  props: [''],
  data () {
    return {
      list: [
        {
          date: '2019年11月15日',
          title: '南昌轨道交通第二期建设规划调整顺利通过环评 将尽快上报国家发改委审批',
        },
        {
          date: '2019年11月01日',
          title: '集团党委副书记、总经理赴项目分公司讲授“不忘初心 牢记使命”主题教育专题党课',
        },
        {
          date: '2019年10月31日',
          title: '南昌轨道交通集团召开“不忘初心、牢记使命”主题教育对照党章党规找差距专题会',
        },
        {
          date: '2019年11月15日',
          title: '南昌轨道交通第二期建设规划调整顺利通过环评 将尽快上报国家发改委审批',
        },
        {
          date: '2019年11月01日',
          title: '集团党委副书记、总经理赴项目分公司讲授“不忘初心 牢记使命”主题教育专题党课',
        }
      ]
    }
  },
  components: {
    NewsPart
  }
}

</script>
<style scoped>
#more {
  width: 100%;
  padding-top: 100px;
}
article {
  max-width: 1280px;
  text-align: center;
  margin: 0 auto;
  text-align: center;
}

article h1 {
  font-size: 42px;
  color: #00467e;
}

.news {
  margin-bottom: 150px;
}

.news section {
  width: 800px;
  margin: 0 auto;
  text-align: left;
  /* background-color: #c00; */
}
.news ul {
  margin-top: 50px;
}
.news ul li {
  height: 45px;
  line-height: 45px;
  border-bottom: 1px solid #e2e2e2;
}
.el-breadcrumb {
  margin-bottom: 10px;
  margin-left: 30px;
}
</style>
<style>
#more .el-breadcrumb__item {
  font-size: 12px;
}
#more .el-breadcrumb__item .is-link {
  color: #00467e;
}
#more .el-breadcrumb__item .is-link:hover {
  text-decoration: underline;
}
</style>
