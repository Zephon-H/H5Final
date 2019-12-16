<template>
  <div id="card-list">
    <ul>
      <li v-for="(item, index) in datas"
          :key="index">
        <card :data=item />
      </li>
      <li class="more">
        <a href="#">查询标价</a>
        <a href="#">安全指南</a>
      </li>
    </ul>
  </div>
</template>

<script>
import Card from '@/components/common/Card';
export default {
  name: 'CardList',
  props: [''],
  data () {
    return {
      datas: [
        {
          url: '',
          title: '地铁乘坐小贴士',
          img: require('@/assets/images/tips.png')
        },
        {
          url: 'price',
          title: '车票',
          img: require('@/assets/images/tickets.png')
        },
        {
          url: '',
          title: '运行路线图',
          img: require('@/assets/images/map.png')
        },
        {
          url: 'site',
          title: '路线/站点信息',
          img: require('@/assets/images/message.png')
        },
        {
          url: 'trip',
          title: '旅游景点',
          img: require('@/assets/images/trip.png')
        }
      ]
    }
  },
  components: {
    Card
  }
}

</script>
<style scoped>
#card-list {
  max-width: 1410px;
  margin: 0 auto;
  margin-top: 80px;
}
ul {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  /* padding-left: 90px; */
}
ul li {
  height: 242px;
  width: 360px;
  /* width: 360px; */
  margin-left: 20px;
  margin-right: 20px;
}

.more > a {
  display: block;
  background: url("../../assets/images/price.png") no-repeat left center;
  color: #00467e;
  font-weight: bolder;
  background-size: 82px auto;
  height: 82px;
  line-height: 82px;
  padding-left: 110px;
}

.more > a:hover {
  text-decoration: underline;
}

.more > a:last-child {
  margin-top: 20px;
  background: url("../../assets/images/guide.png") no-repeat left center;
  background-size: 82px auto;
}
</style>
