<template>
  <div id="slide">
    <el-carousel trigger="click"
                 height="150px">
      <el-carousel-item v-for="(item, index) in slides"
                        :key="index">
        <img :src="item.img"
             alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>

export default {
  name: 'Slide',
  props: [''],
  data () {
    return {
      slides: [
        {
          img: require('@/assets/images/bg.jpg'),
        },
        {
          img: require('@/assets/images/bg1.jpg'),
        }
      ]
    }
  },
}

</script>
<style scoped>
.el-carousel__item {
  width: 790px;
  height: 150px;
  line-height: 150px;
}
.el-carousel__item img {
  height: 150px;
  width: 790px;
}
#slide {
  width: 790px;
  margin: 0 auto;
  margin-top: 50px;
}
</style>
