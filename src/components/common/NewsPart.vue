<template>
  <section id="newspart">
    <span>{{data.date}}</span>
    <div class="space"></div><a href="#">{{data.title}}</a>
  </section>
</template>

<script>

export default {
  name: 'NewsPart',
  props: ['data'],
  data () {
    return {

    }
  },
}

</script>
<style scoped>
#newspart {
  display: flex;
}
#newspart span {
  width: 120px;
}
#newspart a {
  width: 550px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #00467e;
  font-size: 16px;
}
</style>
