<template>
  <v-row justify="center" class="text-center backgroundphoto">
    <v-col cols="12">
      <TopicMovieBooking />
      <SeatMovie />
      <BalanceMovie />
    </v-col>
  </v-row>
</template>

<script>
import TopicMovieBooking from "../components/workshop15/TopicMovieBooking.vue";
import SeatMovie from "../components/workshop15/SeatMovie.vue";
import BalanceMovie from "../components/workshop15/BalanceMovie.vue";
export default {
  components: {
    TopicMovieBooking,
    SeatMovie,
    BalanceMovie,
  },
};
</script>

<style scoped>
.backgroundphoto {
  margin: 0;
  padding-bottom: 20px;
  background-image: url("https://cdn.pixabay.com/photo/2016/03/26/13/09/notebook-1280538_960_720.jpg");
  background-size: cover;
  background-position: 50% 60%;
  background-attachment: fixed;
  color: white;
  overflow-y: hidden;
}
</style>
