<template>
  <div class="movie-container">
    <label for="">เลือกภาพยนตร์ :</label>
    <select name="" id="movie">
      <option value="150">มู่หลาน | ฿150</option>
      <option value="200">เทสล่า คนล่าอนาคต | ฿200</option>
      <option value="300">ฟัดข้ามโลก | ฿300</option>
    </select>
  </div>
  <div class="movie-container">
    <label for="">เลือกภาพยนตร์ :</label>
    <select name="" id="movie">
      <option value="150">มู่หลาน | ฿150</option>
      <option value="200">เทสล่า คนล่าอนาคต | ฿200</option>
      <option value="300">ฟัดข้ามโลก | ฿300</option>
    </select>
  </div>
</template>

<script></script>

<style scoped>
/* * {
  box-sizing: border-box;
}
body {
  background-color: #242323;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
} */
#movie {
  border: 1px solid black;
  margin-left: 5px;
}
.movie-container {
  margin: 20px 0;
}
.movie-container select {
  background-color: #fff;
  border: 0;
  border-radius: 5px;
  font-size: 14px;
  padding: 5px 15px 5px 15px;
  appearance: none;
}
</style>
