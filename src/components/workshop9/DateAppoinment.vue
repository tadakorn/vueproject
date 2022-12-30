<template>
  <div class="countdown" id="countdown" hidden>
    <h1 id="countdown-title"></h1>
    <ul>
      <li><span></span>วัน</li>
      <li><span></span>ชั่วโมง</li>
      <li><span></span>นาที</li>
      <li><span></span>วินาที</li>
    </ul>
    <button id="countdown-button">ยกเลิก</button>
  </div>
  <div class="complete" id="complete" hidden>
    <h1 class="complete-title">แจ้งเตือน</h1>
    <h1 class="complete-info" id="complete-info"></h1>
    <button id="complete-button">สร้างรายการใหม่</button>
  </div>
</template>

<style scoped>
ul {
  margin-left: -45px;
}
li {
  display: inline-block;
  font-size: 30px;
  list-style-type: none;
  padding: 10px;
}
li span {
  display: block;
  font-size: 80px;
  text-align: center;
}
.complete {
  position: relative;
  top: 60px;
}
</style>
