<template>
  <div class="container">
    <div class="screen"></div>
    <div class="row">
      <div class="seat"></div>
      <div class="seat"></div>
      <div class="seat"></div>
      <div class="seat"></div>
      <div class="seat"></div>
      <div class="seat"></div>
      <div class="seat"></div>
      <div class="seat"></div>
    </div>
    <div class="row">
      <div class="seat"></div>
      <div class="seat"></div>
      <div class="seat occupied"></div>
      <div class="seat occupied"></div>
      <div class="seat"></div>
      <div class="seat"></div>
      <div class="seat"></div>
      <div class="seat"></div>
    </div>
    <div class="row">
      <div class="seat"></div>
      <div class="seat"></div>
      <div class="seat"></div>
      <div class="seat"></div>
      <div class="seat"></div>
      <div class="seat"></div>
      <div class="seat"></div>
      <div class="seat"></div>
    </div>
    <div class="row">
      <div class="seat"></div>
      <div class="seat"></div>
      <div class="seat"></div>
      <div class="seat"></div>
      <div class="seat"></div>
      <div class="seat"></div>
      <div class="seat"></div>
      <div class="seat"></div>
    </div>
    <div class="row">
      <div class="seat"></div>
      <div class="seat"></div>
      <div class="seat"></div>
      <div class="seat"></div>
      <div class="seat"></div>
      <div class="seat"></div>
      <div class="seat"></div>
      <div class="seat"></div>
    </div>
    <div class="row">
      <div class="seat"></div>
      <div class="seat"></div>
      <div class="seat"></div>
      <div class="seat"></div>
      <div class="seat"></div>
      <div class="seat"></div>
      <div class="seat"></div>
      <div class="seat"></div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.seat {
  background-color: #444451;
  height: 25px;
  width: 25px;
  margin: 3px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.row {
  display: flex;
  justify-content: center;
}
.seat.selected {
  background-color: greenyellow;
}
.seat.occupied {
  background-color: red;
}
.seat:nth-of-type(2) {
  margin-right: 18px;
}
.seat:nth-last-of-type(2) {
  margin-left: 18px;
}
.showcase {
  list-style: none;
  background: rgba(0, 0, 0, 0.1);
  padding: 5px 10px;
  display: flex;
  color: #777;
  justify-content: space-between;
  border-radius: 5px;
}
.showcase li {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
}
.showcase li small {
  margin-left: 2px;
}
.showcase.seat:not(.occupied):hover {
  cursor: default;
  transform: scale(1);
}
.seat:not(.occupied):hover {
  cursor: pointer;
  transform: scale(1.2);
}
/* .screen {
  background-color: #fff;
  width: 100%;
  height: 70px;
  margin: 10px 0;
  box-shadow: 0 3px 10px rgba(255, 255, 255, 0.7);
  transform: rotateX(-45deg);
} */
.container {
  perspective: 1000px;
  margin-bottom: 30px;
}
</style>
