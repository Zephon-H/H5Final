<template>
  <header id="my-header"
          :class="{'bg-white':isWhite}">
    <section>
      <div class="left">
        <router-link to="/">
          <img src="@/assets/images/logo.png"
               alt="">
        </router-link>
      </div>
      <div class="space"></div>
      <div class="right">
        <div class="search">
          <img src="@/assets/images/search.png"
               alt="">
          <p>查询</p>
        </div>
        <div class="menu"
             @click="isShow=!isShow">
          <img src="@/assets/images/menu.png"
               alt="">
          <p>菜单</p>
        </div>
      </div>
      <section class="pop"
               v-show="isShow">
        <ul>
          <li v-for="(item, index) in datas"
              :key="index">
            <card :data=item />
          </li>
        </ul>
      </section>
    </section>
  </header>
</template>

<script>
import Card from '@/components/common/Card';
export default {
  name: 'MyHeader',
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
      ],
      isShow: false,
      isWhite: false
    }
  },
  mounted: function () {
    window.addEventListener('scroll', this.handleScroll, true);  // 监听（绑定）滚轮滚动事件
  },
  methods: {
    handleScroll: function () {
      let scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 30) {
        this.isWhite = true;
      } else {
        this.isWhite = false;
      }
    }
  },
  destroyed: function () {
    window.removeEventListener('scroll', this.handleScroll);   //  离开页面清除（移除）滚轮滚动事件
  },
  components: {
    Card
  }
}

</script>
<style scoped>
.bg-white {
  background-color: #fff;
}
header {
  /* background-color: #c00; */
  position: fixed;
  width: 100%;
  z-index: 99;
}
header > section {
  width: 100%;
  height: 100px;
  display: flex;
}

header:hover {
  background-color: #fff;
}

header .left {
  margin-left: 40px;
}

header .left img {
  margin-top: 20px;
  height: 60px;
}

.space {
  flex: 1;
}

header .right {
  margin-right: 40px;
  display: flex;
}

header .search {
  margin-top: 12px;
  padding-top: 10px;
  height: 60px;
  text-align: center;
  width: 60px;
}

header .search img {
  width: 27px;
}

header .menu {
  margin-top: 12px;
  margin-left: 10px;
  padding-top: 10px;
  height: 60px;
  text-align: center;
  width: 60px;
}

header .menu img {
  width: 30px;
  margin-bottom: 3px;
}
.menu,
.search {
  cursor: pointer;
}

header .menu:hover,
.search:hover {
  background-color: #ccc;
  color: #fff;
  border-radius: 5px;
}

.pop {
  position: absolute;
  width: 100%;
  height: 271px;
  background-color: #edf6f9;
  top: 90px;
}
.pop::after {
  content: "";
  position: absolute;
  top: -16px;
  right: 58px;
  display: block;
  width: 23px;
  height: 16px;
  background: url("../../assets/images/header.png") no-repeat;
  background-size: 23px auto;
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
  width: 240px;
  margin-top: 100px;
}
ul li img {
  width: 120px;
  height: 120px;
}
</style>
