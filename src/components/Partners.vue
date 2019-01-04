<template>
  <v-flex mb-5 xs12>
    <h2 class="headline font-weight-bold mb-3">Partners</h2>
    <v-layout justify-center>
      <a
        v-for="(partner, i) in partners"
        :key="i"
        :href="partner.link"
        class="subheading mx-3"
        target="_blank"
      >{{ partner.name }}</a>
    </v-layout>
  </v-flex>
</template>
<script>
import { Component, Vue } from "vue-property-decorator";

@Component()
export default class extends Vue {
  partners = [
    {
      name: "Gamer Society",
      img: "gamersociety",
      link: "//www.gamersociety.org/"
    },
    {
      name: "C.S. Mott Children's Hospital",
      img: "mott",
      link: "//www.mottchildren.org/"
    },
    {
      name: "EMU Bright Futures",
      img: "emubf",
      link: "//emubrightfutures.org/"
    },
    {
      name: "Youth Arts Alliance!",
      img: "yaa",
      link: "//youthartsalliance.com/"
    },

    {
      name: "Gamers Outreach",
      img: "gamersoutreach",
      link: "//www.gamersoutreach.org/"
    },
    {
      name: "Child's Play",
      img: "childsplay",
      link: "//childsplaycharity.org/"
    },
    {
      name: "Game Changer",
      img: "gamechanger",
      link: "//www.gamechangercharity.org/"
    },
    {
      name: "Health Design By Us",
      img: "healthdesign",
      link: "//www.healthdesignby.us/"
    },

    {
      name: "Wolverine Pathways",
      img: "umich",
      link: "//wolverinepathways.umich.edu/"
    },
    { name: "Neutral Zone", img: "neutralzone", link: "//neutral-zone.org/" },
    {
      name: "Ann Arbor District Library",
      img: "aadl",
      link: "//www.aadl.org/"
    },
    {
      name: "Washtenaw Community College",
      img: "wcc",
      link: "//www.wccnet.edu/"
    }
  ];
}
</script>

<style>
</style>
