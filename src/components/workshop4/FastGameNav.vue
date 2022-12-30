<template>
  <button id="level-btn" class="level-btn">
    <i class="fas fa-cog"></i>
  </button>
  <div class="settings" id="settings">
    <form id="level-form">
      <label for=""><strong>ระดับความยาก :</strong></label>
      <select id="level">
        <option value="easy">ง่าย</option>
        <option value="medium">ปานกลาง</option>
        <option value="hard">ยาก</option>
      </select>
    </form>
  </div>
</template>

<style scoped>
.level-btn {
  cursor: pointer;
  font-size: 14px;
  border-radius: 4px;
  padding: 5px 15px;
  position: absolute;
  bottom: 30px;
  left: 30px;
}
.settings {
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 0 -50px 0 50px;
  border-radius: 4px;
  background-color: #FFCAC8;
}
.settings.hide {
  transform: translateY(-100%);
}
select {
  width: 200px;
  padding: 5px;
  appearance: none;
  border-radius: 5px;
}
label {
  color: black;
  text-align: center;
  padding-left: 150px;
}
</style>
