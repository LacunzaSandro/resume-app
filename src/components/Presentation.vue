<template>
  <div class="container py-5 ">
    <a
      id="nosotros"
      class="pt-5" />
    <h1>Me presento</h1>
    <hr>
    <div class="row  pt-3 mb-5 justify-content-center text-justify ">
      <div class="col-md-12 col-lg-6 ">
        Mi nombre es Lacunza Sandro, siempre he sido un entusiasta de la programación. Todo eso se volvio más serío en los comienzos del 2019,
        al decidir comenzar la carrera de Técnico Universitario en programación en la reconocida Universidad Tecnologica Nacional.
        Ese instante fue la apertura de todo un mundo nuevo de desafios y asombro. Hoy me encuentro desarrollando mis habilidades en Globant
        en el puesto Test Automation Engineer. Todo se puede con esfuerzo.
      </div>
    </div>
    <a
      id="servicios"
      class="pt-5" />
    <h1>Estudios</h1>
    <hr>
    <div role="tablist">
      <div
        v-for="(item,index) in estudios"
        v-bind:key="index">
        <b-card
          class="mb-1"
          no-body>
          <b-card-header
            class="p-1"
            header-tag="header"
            role="tab">
            <b-button
              v-b-toggle="'accordion-productdetails'+index"
              block
              variant="info">{{item.title}}</b-button>
          </b-card-header>

          <b-collapse
            :id="'accordion-productdetails'+index"
            :accordion="'productdetails-accordion'+index"
            role="tabpanel">

            <div class="container-fluid">
              <div class="row">
                <div class="col-sm-4">
                  <span style="font-size:13px;font-weight:bold;">Detalle</span>
                  <div class="px-3 pt-2">
                    <p id="spnCustomerName">{{item.institution}}</p>
                    <p id="spnCustomerName">{{item.date}}</p>
                  </div>
                </div>


              </div>
            </div>
          </b-collapse>
        </b-card>
      </div>
    </div>

    <h1 class="my-5">Algunos de los proyectos en los que participe</h1>
    <div class="d-flex flex-wrap justify-content-center">

      <b-card
        v-for="(item,index) in trabajos"
        v-bind:key="index"
        class="mx-3 my-3"
        img-alt="Image"
        :img-src="item.img"
        img-top
        style="max-width:500px;"
        :title="item.titulo">
        <b-card-text>
          {{item.description}}
        </b-card-text>
        <template #footer>
          <small
            class="
        text-muted"
            title="Title">{{item.tecnologia}}</small>
        </template>
      </b-card>
    </div>

  </div>

</template>

<script>
  const institutolya = require("../assets/institutolya.png");
  const sonrisafeliz = require("../assets/sonrisafeliz.png");
  const saltarina = require("../assets/saltarina.png");
  export default {

    data () {
      return {
        estudios: [
          {
            title: "Introducción al desarrollo de Videojuegos" ,
            institution: "Online - InfoGamers",
            date: "Octubre 2021 - Duración 1 Mes"
          },
          {
            title: "Desarrollo Web con Python y Django - SQL Server" ,
            institution: "Online - INFORMATORIO 2° ETAPA",
            date: "Mayo 2021 - Septiembre 2021"
          },
          {
            title: "Técnico Universitario en Programación" ,
            institution: "Universidad Tecnologica Nacional",
            date: "Marzo 2019 - Mayo 2021"
          },
          {
            title: "Técnico Analista de Sistemas" ,
            institution: "Instituto Superior de Informática Virasoro ",
            date: "Marzo 2011 - Marzo 2013"
          }
        ],
        trabajos: [
          {
            titulo: "Institutolya.com",
            description: "Proyecto realizado en el Instituto de lenguas y arte L&A. Se desarrollo API y fronted de su página corporatíva",
            tecnologia: "Laravel - Vuetify",
            img: institutolya
          },
          {
            titulo: "sonrisafeliz.herokuapp.com",
            description: "Proyecto en el marco académico en donde se desarrollo una web para la atención al cliente de una odontóloga en tiempos de pandémia.",
            tecnologia: "Laravel - VueJs - Element",
            img: sonrisafeliz
          },
          {
            titulo: "VideoJuego desarrollado en Godot",
            description: "Un pequeño desarrollo sobre el motor Godot con el estilo de Mario Bros",
            tecnologia: "Godot",
            img: saltarina
          },
        ]
      }
    }
  }
</script>
<style scoped>

</style>
