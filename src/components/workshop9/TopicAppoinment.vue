<template>
  <div class="input-container" id="input-container">
    <h1>ตารางนัดหมาย</h1>
    <form class="form" id="countDownForm">
      <label for="">หัวข้อ</label>
      <input type="text" class="title" id="title" />
      <label for="">วัน/เดือน/ปี</label>
      <input type="date" class="date-picker" id="date-picker" />
      <button type="submit">บันทึก</button>
    </form>
  </div>
</template>
<style scoped>
.input-container {
  position: relative;
  top: 20px;
}
h1 {
  font-size: 35px;
  text-align: center;
  margin-top: 0;
  margin-bottom: 10px;
}
.form {
  width: 480px;
}
label {
  font-weight: bold;
  margin-left: 10px;
}
input {
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  background: #fff;
  outline: none;
}
button {
  width: 100%;
  height: 40px;
  border-radius: 20px;
  margin-top: 15px;
  border: none;
  background: #006959;
  color: white;
  font-weight: bold;
  cursor: pointer;
  outline: none;
}
</style>
