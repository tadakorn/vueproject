<template>
  <h1>Home Workshop 11</h1>
</template>

<script>
export default {
  data() {
    return {
      isLogin: true,
    };
  },
  mounted() {
    if (!this.isLogin) {
      this.$router.push("/workshop-11/login");
    }
  },
};
</script>

<style scoped>
</style>
