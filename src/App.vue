<template>
  <div
    id="app"
    class="container-fluid">
    <Header />
    <Banner />
    <Presentation />
    <Contacto />
    <Mapa />
    <Footer />
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Banner from '@/components/Banner.vue'
  import Presentation from '@/components/Presentation.vue'
  import Contacto from '@/components/Contacto.vue'
  import Mapa from '@/components/Mapa.vue'
  import Footer from '@/components/Footer.vue'
  export default {
    name: "App",
    components: {
      Header,
      Banner,
      Presentation,
      Contacto,
      Mapa,
      Footer,
    },
  };
</script>

<style lang="scss">
  @import '@/scss/_base.scss';
</style>
