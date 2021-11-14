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
  ::-webkit-scrollbar {
    width: 8px;
    background-color: rgb(172, 7, 215);
}

::-webkit-scrollbar-thumb {
    background-color: rgb(172, 7, 215);
}

::-webkit-scrollbar-thumb:hover {
    background-color: rgb(172, 7, 215);
    text-decoration: none;
}

::-webkit-scrollbar-track {
    box-shadow: inset 0 0 4px rgba(0,0,0,0.6);
    background-color: gray;
}

::-webkit-scrollbar-track:hover {
    background-color: gray;
}
.no-decoration:hover {
  background-color: gray;;
}
</style>
