<template>
  <div id="newyear">
    <h1>Happy New Years | 2021</h1>
    <div id="countdown" class="countdown">
      <div class="time">
        <h2 id="days">00</h2>
        <small>วัน</small>
      </div>
      <div class="time">
        <h2 id="hours">00</h2>
        <small>ชั่วโมง</small>
      </div>
      <div class="time">
        <h2 id="minutes">00</h2>
        <small>นาที</small>
      </div>
      <div class="time">
        <h2 id="seconds">00</h2>
        <small>วินาที</small>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: "Roboto Slab", serif;
  box-sizing: border-box;
}
#newyear {
  width: 100%;
  background-image: url("https://images.unsplash.com/photo-1477738224882-4eba549a81ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 100vh;
  display: flex;
  margin: 0;
  color: #fff;
  overflow: hidden;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
}
/* body::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
} */
body * {
  z-index: 1;
}
h1 {
  width: 100%;
  font-size: 50px;
  margin-top: 100px;
  margin-bottom: 50px;
  text-align: center;
}
.countdown {
  display: flex;
  transform: scale(2);
}
.time {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 15px;
}
.time h2 {
  margin: 0 0 5px;
}
</style>
