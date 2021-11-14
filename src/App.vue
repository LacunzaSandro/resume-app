<template>
  <div
    id="app"
    class="container-fluid">
    <Header />
    <Banner />
    <Presentation />
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Banner from '@/components/Banner.vue'
  import Presentation from '@/components/Presentation.vue'

  export default {
    name: "App",
    components: {
      Header,
      Banner,
      Presentation,
    },
  };
</script>

<style lang="scss">
  @import '@/scss/_base.scss';
</style>
