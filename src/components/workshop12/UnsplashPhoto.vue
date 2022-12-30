<template>
  <h1>Infinite Scroll | Unsplash API</h1>
  <div id="img-container" class="img-container"></div>
</template>

<script></script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 25px;
  margin-bottom: 15px;
  font-size: 40px;
  letter-spacing: 4px;
}
.img-container {
  margin: 10px 20%;
}
.img-container img {
  width: 100%;
  margin-top: 5px;
}
@media screen and (max-width: 600px) {
  h1 {
    font-size: 20px;
  }
  .img-container {
    margin: 10px;
  }
}
</style>
