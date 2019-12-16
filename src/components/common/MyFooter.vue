<template>
  <footer>
    <div class="space"></div>
    <div>
      <section>
        <section class="about">
          <h1>关于我们</h1>
          <p>南昌轨道交通集团成立于2008年10月，现有员工4300余人，下设3个分公司、3个全资子公司、5个参股子公司。主要承担南昌市轨道交通建设的融资、建设、运营、管理职能。</p>
          <h1>联系我们</h1>
          <p>江西省南昌市红谷滩新区 丰和中大道 地铁大厦</p>
          <p>集团传真:0791-83892008 客服中心热线:0791-96999</p>
          <p>邮编:330038 集团邮箱：ncrtxx@163.com</p>
        </section>
        <section class="other">
          <h1>问询</h1>
          <div>
            <a href="#">常见问题</a>
            <a href="#">失物招领</a>
          </div>
          <h1>关注我们</h1>
          <p></p>
          <div>
            <div>
              <p>南昌地铁运营</p>
              <img src="@/assets/images/wx1.png"
                   alt="">
            </div>
            <div>
              <p>南昌地铁发布</p>
              <img src="@/assets/images/wx2.png"
                   alt="">
            </div>
          </div>
        </section>
      </section>
      <div class="copyright">
        Copyright 2008-2018 www.ncmtr.com All Rights Reserved
      </div>
    </div>
    <div class="space"></div>
  </footer>
</template>

<script>

export default {
  name: 'MyFooter',
  props: [''],
  data () {
    return {

    }
  },
}

</script>
<style scoped>
footer {
  width: 100%;
  background-color: #0b5d9f;
  display: flex;
}

footer > div > section {
  display: flex;
  background-color: none;
}

.about {
  background-color: rgb(0, 0, 0, 0.1);
  margin-top: 20px;
  padding: 20px;
}

.about h1 {
  font-size: 24px;
  color: #fff;
}

.about p {
  width: 480px;
  word-break: normal;
  word-wrap: break-word;
  color: #c1cbd9;
  margin-top: 5px;
}

.about p:first-of-type {
  text-indent: 2em;
}

.other {
  margin-left: 30px;
  color: #fff;
}

.other > div {
  display: flex;
}

.other h1:first-child {
  margin-top: 40px;
}

.other h1 {
  font-size: 24px;
}

.other a {
  display: block;
  width: 260px;
  height: 64px;
  line-height: 64px;
  text-align: center;
  background-color: #fff;
  border-radius: 5px;
  color: #00467e;
  font-weight: bolder;
}

.other a:hover {
  background-color: #ddd;
}

.other a:last-of-type {
  margin-left: 40px;
}

.other img {
  width: 120px;
  height: 120px;
}

.other div > div p {
  padding-left: 30px;
  display: block;
  height: 22px;
  margin-bottom: 10px;
  font-size: 14px;
  background: url("../../assets/images/wechat.png") no-repeat left center;
  background-size: 22px auto;
}

.other div > div {
  margin-right: 50px;
}

footer .copyright {
  padding-top: 50px;
  padding-bottom: 20px;
  text-align: right;
  color: #fff;
  width: 1140px;
  margin: 0 auto;
}
</style>
