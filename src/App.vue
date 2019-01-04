<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>GameStart</span>
        <span class="font-weight-light">School</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="https://github.com/gamestartdev" target="_blank">
        <span class="mr-2">GitHub Archive</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <Main/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Main from "./components/Main.vue";

@Component({ components: { Main } })
export default class App extends Vue {}
</script>
