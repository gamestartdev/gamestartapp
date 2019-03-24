<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <v-img :src="require('../assets/logo.png')" class="my-3" contain height="200"></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">GameStart School</h1>
        <p
          class="subheading font-weight-regular"
        >We are a cohort of artists, programmers, educators, and game designers
          <br>connecting youth to a creative relationship with technology.
        </p>
      </v-flex>

      <WhatsNext/>
      <v-flex xs12>
        <h2 class="headline font-weight-bold mb-3">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/rYCDaXgcKCA"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </h2>
        <p
          class="subheading font-weight-regular"
        >In 2013, Nate and David started volunteering to teach after school programs kids how to program using video games. 
        <br>In 2014 they gave a TEDx talk which generated a flood of interest and by 2017 the program had become a thriving social enterprise serving afterschool programs, hospitalized children facing life-threatening illness, youth navigating the juvenile detention system,</p>
      </v-flex>


      <v-flex xs12 mb-5>
        <h2 class="headline font-weight-bold mb-3">In the News</h2>
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

  importantLinks = [
    {
      text: "Click On Detroit",
      href: "http://bit.ly/GS_ClickOnDetroit"
    },
    {
      text: "Concentrate Media",
      href: "http://bit.ly/GS_Concentrate"
    },
    {
      text: "Ann Arbor Observer",
      href: "http://bit.ly/GS_Observer"
    },
    {
      text: "Crazy Wisdom",
      href: "http://bit.ly/GS_CrazyWisdom"
    },
    {
      text: "NBC Nightly News",
      href: "http://bit.ly/GS_NbcNightly"
    }
  ];
}
</script>

<style>
</style>
