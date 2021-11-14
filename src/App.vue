<template>
  <div
    id="app"
    class="container-fluid">
    <Header />
  </div>
</template>

<script>
  import Header from '@/components/Header'


  export default {
    name: "App",
    components: {
      Header,
    },
  };
</script>

<style lang="scss">
  @import '@/scss/_base.scss';
</style>
