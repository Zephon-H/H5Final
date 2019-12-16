<template>
  <div id="news">
    <div class="news">
      <section>
        <h1>新闻</h1>
        <ul>
          <li v-for="(item, index) in list"
              :key="index">
            <news-part :data='item'></news-part>
          </li>
          <li>
            <router-link to="more">查看更多</router-link>
          </li>
        </ul>
      </section>
      <section class="space"></section>
      <section>
        <!-- <img src="@/assets/images/bg.jpg"
             alt=""> -->
        <video src="@/assets/video/video.mp4"
               controls></video>
      </section>
    </div>
  </div>
</template>

<script>
import NewsPart from '@/components/common/NewsPart'
export default {
  name: 'News',
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
        }]
    }
  },
  components: {
    NewsPart
  }
}

</script>
<style scoped>
#news {
  width: 100%;
  background-color: #f8f8f8;
  margin-bottom: 100px;
  padding-bottom: 50px;
}
.news {
  display: flex;
  max-width: 1280px;
  margin: 0 auto;
  padding-left: 200px;
  padding-right: 200px;
}

.news h1 {
  text-align: center;
  font-size: 32px;
  color: #00467e;
}

.news ul li {
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  /* width: 752px; */
  /* width:  */
  text-align: left;
  border-bottom: 1px solid #e2e2e2;
  margin-top: 15px;
  padding-bottom: 15px;
}

.news ul li:last-of-type {
  border: none;
}

.news ul li:last-of-type a {
  display: block;
  width: 100%;
  height: 50px;
  margin-left: 0;
  text-align: center;
  background-color: #a1a5aa;
  color: #fff;
  line-height: 50px;
}

.news ul li:last-of-type a:hover {
  text-decoration: none;
  background-color: #999;
  color: #ddd;
}

.news section img {
  margin-top: 34px;
  margin-left: 46px;
  width: 361px;
  height: 225px;
}
.news section video {
  margin-top: 34px;
  margin-left: 46px;
  width: 361px;
  height: 225px;
}
</style>
