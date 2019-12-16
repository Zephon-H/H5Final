<template>
  <div id="card">
    <router-link :to="data.url">
      <img :src="data.img"
           alt="">
      <p>{{data.title}}</p>
    </router-link>
  </div>

</template>

<script>

export default {
  name: 'Card',
  props: {
    data: {
      type: Object
    }
  },
  data () {
    return {

    }
  },
}

</script>
<style scoped>
a {
  color: #00467e;
  font-size: 18px;
  display: block;
  text-align: center;
  background-color: #edf6f9;
  border-radius: 5px;
}
a p {
  margin-top: 10px;
}
a img {
  /* width: 190px;
  height: 190px; */
  width: 50%;
  margin-top: -40px;
}
</style>
