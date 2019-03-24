<template>
  <v-flex mb-5 xs12>
    <h2 class="headline font-weight-bold mb-3">A New Adventure</h2>

    <p
      class="subheading font-weight-regular"
    >In 2018, GameStart donated it’s equipment and technology to <a href="http://www.gamersociety.org/">a charity run by several of our experienced 
    instructors</a> with a demonstrated capacity to continue delivering our curricula to the community.  
    
    <br><br>Nate and David have since joined forces with GameChanger Charity, where they continue to 
    pursue their passion for connecting youth in need with technology that can enrich their lives. 
            <br><br><br>Nate is currently working on a memorialized version of this landing page, please check back soon for updates or get in touch with us by email: info@gamestartschool.org
 
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
      href: "https://twitter.com/inventonater"
    }
  ];
}
</script>

<style>
</style>
