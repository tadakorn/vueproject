<template>
  <span id="toggle-icon">
    <span class="toggle-text">โหมดกลางวัน</span>
    <i class="mdi mdi-white-balance-sunny"></i>
  </span>
  <label class="theme-switch">
    <input type="checkbox" />
    <div class="slider round"></div>
  </label>
</template>

<script>
export default {
  methods: {},
};
</script>

<style scoped>
.theme-switch-container {
  display: flex;
  align-items: center;
  z-index: 100;
  position: fixed;
  right: 25px;
  top: 30px;
}
.theme-switch-container span {
  margin-right: 10px;
  font-size: 1rem;
}
.theme-switch {
  display: inline-block;
  height: 34px;
  position: relative;
  width: 60px;
}
.theme-switch input {
  display: none;
}
.toggle-text {
  position: relative;
  top: -4px;
  right: 5px;
  color: var(--text-color);
}
.slider {
  background: var(--primary-color);
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.4s;
}
.slider::before {
  background: #fff;
  content: "";
  bottom: 4px;
  height: 26px;
  left: 4px;
  position: absolute;
  transition: 0.4s;
  width: 26px;
}
input:checked + .slider::before {
  transform: translateX(26px);
}
.slider.round {
  border-radius: 34px;
}
.slider::before {
  border-radius: 50%;
}
</style>
