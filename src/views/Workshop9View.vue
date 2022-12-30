<template>
  <v-row justify="center" class="container">
    <TopicAppoinment />
    <DateAppoinment />
  </v-row>
</template>

<script>
import TopicAppoinment from "../components/workshop9/TopicAppoinment.vue";
import DateAppoinment from "../components/workshop9/DateAppoinment.vue";
export default {
  components: {
    TopicAppoinment,
    DateAppoinment,
  },
};
</script>

<style scoped>
.container {
  min-width: 580px;
  min-height: 304px;
  color: black;
  margin: 0 auto;
  padding: 25px 50px;
  border-radius: 5px;
  z-index: 2;
  background: rgba(255, 255, 255, 0.85);
  display: flex;
  justify-content: center;
}
</style>
