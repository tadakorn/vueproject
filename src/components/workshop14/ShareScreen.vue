<template>
  <video id="video" width="640px" height="360px" hidden></video>
  <div class="button-container">
    <button id="requestbtn">ส่งคำขอ</button>
    <button id="sharebtn">แชร์หน้าจอ</button>
  </div>
</template>

<script></script>

<style scoped>
.button-container {
  border: 2px solid black;
  padding: 10px;
  border-radius: 7px;
  box-shadow: inset 0 20px 4px -19px rgba(255, 255, 255, 0.7);
  display: flex;
  margin-right: 5px;
  background-color: #5d5d5d;
}
button {
  cursor: pointer;
  outline: none;
  width: 200px;
  height: 75px;
  font-size: 25px;
}
</style>
