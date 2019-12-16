<template>
  <div id="price">
    <article>
      <h1>查询票价、换乘</h1>
      <p>可以查询自出发站至到达站的换乘路线、所需时间和车票票价</p>
      <section>
        <el-tabs v-model="activeName2"
                 type="card">
          <el-tab-pane label="查询票价"
                       name="first">
            <section>
              <section>
                <!-- <div class="space"></div> -->
                <div class="left">
                  <el-form label-position="top"
                           label-width="80px">
                    <el-form-item label="出发站">
                      <el-cascader expandTrigger="hover"
                                   :options="options"
                                   v-model="startSite">
                      </el-cascader>
                    </el-form-item>
                    <el-form-item label="中转站">
                      <el-cascader expandTrigger="hover"
                                   :options="optionsMid"
                                   v-model="midSite">
                      </el-cascader>
                    </el-form-item>
                    <el-form-item label="到达站">
                      <el-cascader expandTrigger="hover"
                                   :options="options"
                                   v-model="desSite">
                      </el-cascader>
                    </el-form-item>
                  </el-form>
                </div>
                <div class="right">
                  <el-input placeholder="最近查询的路线(0)"
                            suffix-icon="el-icon-arrow-down">

                  </el-input>
                </div>
                <!-- <div class="space"></div> -->
              </section>
              <div>

                <div class="read">
                  <el-checkbox v-model="checked">我已经认真阅读 <a href="#">《使用票价查询时请注意》</a></el-checkbox>
                </div>

                <button class="bt-search"
                        @click="search()">查询</button>

              </div>
            </section>
          </el-tab-pane>
          <el-tab-pane label="查询换乘"
                       name="second">待添加</el-tab-pane>
        </el-tabs>
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
  name: 'Price',
  props: [''],
  data () {
    return {
      activeName2: 'first',
      options: [{
        value: '1',
        label: '1号线',
        children: [
          {
            value: 'x1',
            label: '双港口',
          },
          {
            value: 'x2',
            label: '孔目湖',
          },
          {
            value: 'x3',
            label: '长江路',
          },
          {
            value: 'x4',
            label: '珠江路',
          },
          {
            value: 'x5',
            label: '庐山南大道',
          },
          {
            value: 'x6',
            label: '绿茵路',
          },
          {
            value: 'x7',
            label: '卫东',
          },
          {
            value: 'x8',
            label: '地铁大厦',
          },
          {
            value: 'x9',
            label: '秋水广场',
          },
          {
            value: 'x10',
            label: '滕王阁',
          },
          {
            value: 'x11',
            label: '万寿宫',
          },
          {
            value: 'x12',
            label: '八一馆',
          },
          {
            value: 'x13',
            label: '八一广场',
          },
          {
            value: 'x14',
            label: '师大南路',
          },
        ],
      },
      {
        value: '2',
        label: '2号线',
        children: [
          {
            value: 'nanlu',
            label: '南路',
          },
          {
            value: 'dagang',
            label: '大岗',
          },
          {
            value: 'shengmi',
            label: '生米',
          },
          {
            value: 'jiulonghunan',
            label: '九龙湖南',
          },
          {
            value: 'shimingzhongxin',
            label: '市民中心',
          },
        ],
      }],
      optionsMid: [
        {
          value: 'none',
          label: '无'
        },
        {
          value: 'ditiedasha',
          label: '地铁大厦',
        },
        {
          value: 'bayiguangchang',
          label: '八一广场',
        }
      ],
      checked: false,
      startSite: [],
      midSite: [],
      desSite: [],
    }
  }, methods: {
    search () {
      if (this.checked) {
        this.axios.get(`/api/index.php?s=/Home/Api/getprice.html&start=x1&end=x2`)
          .then((response) => {
            window.console.log(response);
            this.$alert(`票价：${response.data}元`, '票价', {
              confirmButtonText: '确定',
            });
          })
          .catch((response) => {
            window.console.log(response);
          })
      }
    }
  },
}

</script>
<style scoped>
#price {
  width: 100%;
}
article {
  max-width: 1280px;
  padding-top: 100px;
  text-align: center;
  margin: 0 auto;
}

article h1 {
  font-size: 42px;
  color: #00467e;
}

article p {
  font-size: 18px;
  margin-bottom: 80px;
}

article section > section {
  width: 100%;
  border-top: 1px solid #ddd;
  margin-top: 30px;
  padding-top: 30px;
  display: flex;
}

.left {
  text-align: left;
  width: 50%;
}
.left .el-cascader {
  width: 80%;
}
.right {
  width: 40%;
  margin-left: 10%;
}

.left label,
p {
  font-size: 16px;
  font-weight: bold;
}

.start {
  display: flex;
  margin-top: 20px;
  height: 40px;
  line-height: 40px;
}

.left input {
  height: 35px;
  line-height: 35px;
  width: 493px;
  font-size: 19px;
  border: 1px #737373 solid;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.4) inset;
  padding-left: 5px;
}

.left input:focus {
  border: 2px solid #00a3d9;
}

.left button {
  height: 40px;
  background-color: #dae0e3;
  color: #fff;
  border: none;
  width: 73px;
  margin-left: 8px;
}

.pass {
  margin-top: 20px;
  display: flex;
}

.pass button {
  width: 40px;
  height: 40px;
  background: url("../assets/images/change.png") no-repeat center;
  background-size: 6px 18px;
  background-color: #00467e;
  cursor: pointer;
  color: #fff;
}

.pass button:hover {
  background-color: #2168a3;
}

.pass > button:first-child {
  width: 420px;
  height: 40px;
  text-align: center;
  background: none;
  background-color: #dae0e3;
  color: #000;
  margin-left: 0;
  font-size: 15px;
  margin-right: 30px;
}

#pass {
  display: none;
}

.pass {
  margin-bottom: 20px;
}

.pass > button:first-child:hover {
  text-decoration: underline;
  background-color: #bfcfd6;
  color: #00467e;
}

.dest {
  margin-top: 15px;
}

.date-p {
  margin-top: 30px;
  padding-top: 20px;
  margin-bottom: 10px;
  border-top: 1px solid #ddd;
}

.read {
  display: block;
  color: #00467e;
  font-size: 14px;
  width: 504px;
  margin: 0 auto;
  margin-top: 50px;
}
.read a {
  color: #00467e;
}

.read a:hover {
  text-decoration: underline;
  color: #00467e;
}
.bt-search {
  height: 40px;
  width: 504px;
  margin: 0 auto;
  margin-top: 50px;
  cursor: pointer;
  background-color: #dae0e3;
  border: none;
  color: #fff;
}

.bt-search:hover {
  background-color: #bfcfd6;
  color: #00467e;
}

.content {
  margin-bottom: 80px;
}
</style>
<style>
#price .el-tabs {
  /* width: 100%; */
  max-width: 1008px;
  margin: 0 auto;
}
#price .el-tabs--card > .el-tabs__header .el-tabs__nav {
  /* width: 90%; */
  width: 100%;
  margin: 0 auto;
  background-color: #dfe4e6;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
}
#price .el-tabs--card > .el-tabs__header .el-tabs__item {
  width: 50%;
  font-size: 14px;
  color: #000;
}
#price .el-tabs--card > .el-tabs__header .el-tabs__item:hover {
  background-color: #bfd0d6;
}
#price .el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
  background-color: #fff;
  box-shadow: inset 0 4px 0 #00a3d9;
  margin-bottom: 0;
}

/* #price .right .el-input__inner {
  height: 35px;
  line-height: 35px;
  width: 300px;
  font-size: 19px;
  border-radius: 0;
  border: 1px #737373 solid;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.4) inset;
  padding-left: 5px;
  margin-left: 70px;
} */

#price .el-breadcrumb__item {
  font-size: 12px;
}
#price .el-breadcrumb__item .is-link {
  color: #00467e;
}
#price .el-breadcrumb__item .is-link:hover {
  text-decoration: underline;
}
#price .el-breadcrumb {
  margin-bottom: 10px;
  margin-left: 30px;
}
</style>