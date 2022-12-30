<template>
  <v-row justify="center" class="drag-drop">
    <v-col cols="12">
      <DiagramDrag />
    </v-col>
  </v-row>
</template>

<script>
import DiagramDrag from "../components/workshop13/DiagramDrag.vue";
export default {
  components: {
    DiagramDrag,
  },
};
</script>

<style scoped>
.drag-drop {
  margin: 0;
  background-image: url("https://cdn.pixabay.com/photo/2016/03/26/13/09/notebook-1280538_960_720.jpg");
  background-size: cover;
  background-position: 50% 60%;
  background-attachment: fixed;
  color: white;
  overflow-y: hidden;
}
</style>
