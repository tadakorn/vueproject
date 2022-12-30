<template>
  <h1 class="main-title">แผนผังการทำงาน</h1>
  <div class="drag-container">
    <ul class="drag-list">
      <!-- category 1 -->
      <li class="drag-column backlog-column">
        <span class="header">
          <h1>งานค้าง</h1>
        </span>
        <div class="custom-scroll" id="backlog-content">
          <ul class="drag-item-list" id="backlog-list">
            <li class="drag-item" draggable="true">ออกแบบ Animation</li>
            <li class="drag-item" draggable="true">ส่งงานลูกค้า</li>
            <li class="drag-item" draggable="true">เสนองบประมาณ</li>
          </ul>
        </div>
      </li>
      <!-- category 2 -->
      <li class="drag-column progress-column">
        <span class="header">
          <h1>ดำเนินการ</h1>
        </span>
        <div class="custom-scroll" id="progress-content">
          <ul class="drag-item-list" id="backlog-list">
            <li class="drag-item" draggable="true">ออกแบบโลโก้</li>
            <li class="drag-item" draggable="true">ตัดต่อและเรนเดอร์</li>
          </ul>
        </div>
      </li>
      <!-- category 3 -->
      <li class="drag-column complete-column">
        <span class="header">
          <h1>เสร็จสมบูรณ์</h1>
        </span>
        <div class="custom-scroll" id="complete-content">
          <ul class="drag-item-list" id="complete-list"></ul>
        </div>
      </li>

      <!-- category 3 -->
      <li class="drag-column reject-column">
        <span class="header">
          <h1>ไม่ผ่าน</h1>
        </span>
        <div class="custom-scroll" id="reject-content">
          <ul class="drag-item-list" id="reject-list"></ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
:root {
  --category-1: #a2622d;
  --category-2: #1b6161;
  --category-3: #248224;
  --category-4: #a22d22;
}

html {
  box-sizing: border-box;
}

h1 {
  letter-spacing: 2px;
  text-shadow: 2px 2px 5px black;
}
.main-title {
  text-align: center;
  font-size: 3rem;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.drag-container {
  margin: 20px;
}
.drag-list {
  display: flex;
  align-items: flex-start;
}
.drag-column {
  flex: 1;
  margin: 0 10px;
  position: relative;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  overflow-x: hidden;
}
.header {
  display: flex;
  justify-content: center;
  margin: 10px;
  border-radius: 10px;
}
.header h1 {
  font-size: 1.25rem;
}
.backlog-column .header {
  background-color: var(--category-1);
}
.progress-column .header {
  background-color: var(--category-2);
}
.complete-column .header {
  background-color: var(--category-3);
}
.reject-column .header {
  background-color: var(--category-4);
}
.custom-scroll {
  overflow-y: auto;
  max-height: 52vh;
}
.drag-item-list {
  min-height: 50px;
}
.drag-item {
  margin: 10px;
  padding: 10px;
  height: fit-content;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  line-height: 1.5rem;
  letter-spacing: 1px;
  cursor: pointer;
}
</style>
