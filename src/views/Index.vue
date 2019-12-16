<template>
  <div id="index">
    <welcome />
    <slide />
    <card-list />
    <news />
  </div>
</template>

<script>
import Welcome from '@/components/Index/Welcome';
import Slide from '@/components/Index/Slide';
import CardList from '@/components/Index/CardList';
import News from '@/components/Index/News';
export default {
  name: 'Index',
  props: [''],
  data () {
    return {

    }
  },
  components: {
    Welcome,
    Slide,
    CardList,
    News,
  }
}

</script>
<style scoped>
</style>
