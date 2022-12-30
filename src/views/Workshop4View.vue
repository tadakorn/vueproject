<template>
  <v-container>
    <div class="container">
      <FastGameNav />
      <FastGameType />
    </div>
  </v-container>
</template>

<script>
import FastGameNav from "../components/workshop4/FastGameNav.vue";
import FastGameType from "../components/workshop4/FastGameType.vue";
export default {
  components: {
    FastGameNav,
    FastGameType,
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  padding: 20px;
  margin: 50px;
}
.container-2 {
  align-items: center;
  justify-content: center;
}
</style>
