<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="200"></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">GameStart School</h1>
        <p
          class="subheading font-weight-regular"
        >We are a tribe of artists, programmers, educators, and game designers
          <br>using video games to change the world.
        </p>
      </v-flex>

      <v-flex xs12>
        <h2 class="headline font-weight-bold mb-3">Rough Statistics</h2>
        <p class="subheading font-weight-regular">[Outreach, Courses, Hospitals]</p>
      </v-flex>

      <WhatsNext/>

      <v-flex xs12>
        <h2 class="headline font-weight-bold mb-3">Cofounders</h2>
        <p class="subheading font-weight-regular">TEDX VIDEO</p>
      </v-flex>

      <v-flex xs12 mb-5>
        <h2 class="headline font-weight-bold mb-3">Project Archive</h2>
        <v-layout justify-center>
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >{{ link.text }}</a>
        </v-layout>
      </v-flex>

      <v-flex xs12>
        <h2 class="headline font-weight-bold mb-3">Why We Play</h2>
        <p class="subheading font-weight-regular">a b c d e</p>
      </v-flex>
      <Partners/>
    </v-layout>
  </v-container>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import Partners from "./Partners.vue";
import WhatsNext from "./WhatsNext.vue";
import Curricula from "./Curricula.vue";

@Component({ components: { Partners, WhatsNext, Curricula } })
export default class App extends Vue {
  ecosystem = [
    {
      text: "vuetify-loader",
      href: "https://github.com/vuetifyjs/vuetify-loader"
    },
    {
      text: "github",
      href: "https://github.com/vuetifyjs/vuetify"
    },
    {
      text: "awesome-vuetify",
      href: "https://github.com/vuetifyjs/awesome-vuetify"
    }
  ];

  importantLinks = [
    {
      text: "Documentation",
      href: "https://vuetifyjs.com"
    },
    {
      text: "Chat",
      href: "https://community.vuetifyjs.com"
    },
    {
      text: "Made with Vuetify",
      href: "https://madewithvuetifyjs.com"
    },
    {
      text: "Twitter",
      href: "https://twitter.com/vuetifyjs"
    },
    {
      text: "Articles",
      href: "https://medium.com/vuetify"
    }
  ];
}
</script>

<style>
</style>
