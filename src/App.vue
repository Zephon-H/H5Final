<template>
  <div id="app">
    <my-header />
    <router-view>
      <Index />
    </router-view>
    <my-footer />
  </div>
</template>

<script>
import MyHeader from '@/components/common/MyHeader'
import MyFooter from '@/components/common/MyFooter'
import Index from '@/views/Index';
export default {
  name: 'app',
  components: {
    MyHeader,
    MyFooter,
    Index,
  }
}
</script>

<style>
</style>
