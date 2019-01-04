<template>
  <v-flex mb-5 xs12>
    <h2 class="headline font-weight-bold mb-3">Curricula</h2>
    <v-layout justify-center>
      <a
        v-for="(curriculum, i) in curricula"
        :key="i"
        :src="curriculum.png"
        class="subheading mx-3"
        target="_blank"
      >{{ curriculum.name }}</a>
    </v-layout>
  </v-flex>
</template>
<script>
import { Component, Vue } from "vue-property-decorator";

@Component()
export default class extends Vue {
  curricula = [
    {
      png: "digitalart",
      name: "Digital Art22"
    },
    {
      png: "vive",
      name: "Virtual Reality"
    },
    { png: "zortrax", name: "3D Printing" },
    { png: "animation", name: "Animation" },
    { png: "minecraft", name: "Minecraft Modding" },
    { png: "robotics2", name: "Robotics" },
    { png: "appdev", name: "App Development" },
    { png: "xbox", name: "Video Game Design" },
    { png: "video", name: "Video Creation" }
  ];
}
</script>

<style>
</style>
