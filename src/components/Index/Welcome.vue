<template>
  <article>
    <main>
      <h1>Welcome to Nanchang Metro</h1>
      <h2>{{date}} <span>{{time}}</span></h2>
      <div class="weather">
        <div class="space"></div>
        <img :src="weaImg"
             alt="">
        <div>
          <p>{{tem2}}<span>°C</span>~{{tem1}}<span>°C</span></p>
          <p>NanChang</p>
        </div>
        <div class="space"></div>
      </div>
      <h3>常用功能</h3>
      <div class="usual">
        <ul>
          <li class="space"></li>
          <li>
            <a href="./price.html">
              <img src="@/assets/images/mtrline.png"
                   alt="">
            </a>
          </li>
          <li>
            <a href="">
              <img src="@/assets/images/bustrans.png"
                   alt="">
            </a>
          </li>
          <li>
            <a href="">
              <img src="@/assets/images/swzl.png"
                   alt="">
            </a>
          </li>
          <li class="space"></li>
        </ul>
      </div>

    </main>
  </article>
</template>

<script>

export default {
  name: 'Welcome',
  props: [''],
  data () {
    return {
      //December 02,2019 <span>23:39:06 pm<
      date: '',
      time: '',
      tem1: '',
      tem2: '',
      wea: '',
    }
  },
  mounted () {
    setInterval(() => {
      this.setNowTimes();
    }, 1000)
    this.getWheather();
  },
  methods: {
    setNowTimes () {
      let myDate = new Date();
      let yy = myDate.getMonth() + 1;
      let mm = myDate.toDateString().split(" ")[1];
      let dd = String(myDate.getDate() < 10 ? '0' + myDate.getDate() : myDate.getDate());
      let hou = String(myDate.getHours() < 10 ? "0" + myDate.getHours() : myDate.getHours());
      let min = String(myDate.getMinutes() < 10 ? '0' + myDate.getMinutes() : myDate.getMinutes());
      let sec = String(myDate.getSeconds() < 10 ? '0' + myDate.getSeconds() : myDate.getSeconds());
      this.time = `${hou} : ${min} : ${sec}`;
      this.date = `${mm} ${dd} , ${yy}`;
    },
    getWheather () {
      let url = "https://www.tianqiapi.com/api/?version=v1&city=南昌&appid=32322521&appsecret=1bmVdWgG"
      this.axios.get(url).then((res) => {
        let data = res.data.data[0]
        this.tem1 = data.tem1.replace('℃', '');
        this.tem2 = data.tem2.replace('℃', '');
        this.wea = data.wea;
      })
    }
  },
  computed: {
    weaImg () {
      let img = "sunny.png";
      switch (this.wea) {
        case '晴': break;
        case '阴': img = 'cloudiness.png'; break;
        case '多云': img = 'cloudiness.png'; break;
        case '小雨': img = 'rain.png'; break;
        case (this.wea.match(/雨/) || {}).input: img = 'rain.png'; break;
        case '雪': img = 'snow.png'; break;
        case (this.wea.match(/雪/) || {}).input: img = 'snow.png'; break;
        default: break;
      }
      return require(`@/assets/images/${img}`);
    }
  },
}

</script>
<style scoped>
article {
  background: url("../../assets/images/bg1.jpg") no-repeat;
  background-size: 100%;
}

main {
  padding-top: 171px;
  text-align: center;
  color: #fff;
}

main h1 {
  font-size: 40px;
}

main h2 {
  font-size: 20px;
}
main h2 span {
  margin-left: 15px;
}

.weather {
  display: flex;
}

.weather p {
  font-size: 18px;
}

.weather p:first-child {
  font-size: 26px;
}

.weather span {
  font-size: 14px;
}

.weather img {
  height: 60px;
}

.weather > div {
  height: 100px;
  margin-left: 10px;
}
main h3 {
  font-size: 18px;
}

.usual {
  margin-top: 20px;
}

.usual ul {
  display: flex;
}

.usual ul li a {
  display: block;
  margin-left: 10px;
  margin-right: 10px;
  color: #fff;
  font-size: 14px;
}

.usual ul li a img {
  width: 92px;
  height: 92px;
  border-radius: 50%;
}

main {
  padding-bottom: 50px;
}
</style>
