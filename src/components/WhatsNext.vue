<template>
  <v-flex mb-5 xs12>
    <h2 class="headline font-weight-bold mb-3">Whats Next</h2>

    <p
      class="subheading font-weight-regular"
    >GameStart School hosted classes from 2012 until Summer 2017 in Ann Arbor, Michigan.
      <br>Our tribe continues to use video games to change the world.
    </p>

    <v-layout justify-center>
      <a
        v-for="(item, i) in whatsNext"
        :key="i"
        :href="item.href"
        class="subheading mx-3"
        target="_blank"
      >{{ item.text }}</a>
    </v-layout>
  </v-flex>
</template>
<script>
import { Component, Vue } from "vue-property-decorator";

@Component()
export default class extends Vue {
  whatsNext = [
    {
      text: "GameChanger Charity",
      href: "https://www.gamechangercharity.org"
    },
    {
      text: "Inventonater", // RollerBuggy
      href: "https://www.inventonator.com"
    },
    {
      text: "Nightlife Arcade",
      href: "https://www.nightlifearcade.org"
    }
  ];
}
</script>

<style>
</style>
