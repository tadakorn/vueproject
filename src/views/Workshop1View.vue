<template>
  <div class="container">
    <TitleExchange />
  </div>
  <div class="container-1">
    <ExchangeMoney />
  </div>
</template>

<script>
import TitleExchange from "../components/workshop1/TitleExchange.vue";
import ExchangeMoney from "../components/workshop1/ExchangeMoney.vue";

export default {
  components: {
    TitleExchange,
    ExchangeMoney,
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  margin: 10px;
}
.container-1 {
  display: flex;
  flex-direction: column;
}
</style>
