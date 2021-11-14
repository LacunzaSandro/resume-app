<template>
  <div
    id="app"
    class="container-fluid">
    <Header />
    <Banner />
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Banner from '@/components/Banner.vue'

  export default {
    name: "App",
    components: {
      Header,
      Banner,
    },
  };
</script>

<style lang="scss">
  @import '@/scss/_base.scss';
</style>
