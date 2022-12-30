<template>
  <div class="container">
    <form id="form" class="form" @submit.prevent="validateForm">
      <h2>แบบฟอร์มลงทะเบียน</h2>
      <div class="form-control">
        <label for="username">ชื่อผู้ใช้</label>
        <input
          type="text"
          v-model="username"
          placeholder="Enter Your Username"
          required
        />
      </div>
      <div class="form-control">
        <label for="password">รหัสผ่าน</label>
        <input
          type="password"
          placeholder="Enter Your Password"
          v-model="password"
          required
        />
      </div>
      <div class="form-control">
        <label for="confirm-password">ยืนยันรหัสผ่าน</label>
        <input
          type="password"
          placeholder="Enter Your Re-Password"
          v-model="confirmPassword"
          required
        />
      </div>
      <button type="submit">ลงทะเบียน</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    validateForm() {
      if (this.username && this.password && this.confirmPassword) {
        if (this.password != this.confirmPassword) {
          alert("คุณใส่รหัสผ่านไม่ตรงกัน");
          console.log("eeiei");
        } else {
          axios.post(
            "https://express-auth-kihk.onrender.com/api/auth/register",
            {
              username: this.username,
              password: this.password,
            }
          );
        }
      }
    },
  },
};
</script>

<style scoped>
body {
  background-color: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0;
}
.container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  width: 400px;
}
.form {
  padding: 30px 40px;
}
h2 {
  text-align: center;
  margin: 0 0 0 20px;
}
.form-control {
  position: relative;
  margin-bottom: 10px;
  padding-bottom: 20px;
}
.form-control label {
  color: #777;
  display: block;
  margin-bottom: 5px;
}
.form-control input {
  border: 2px solid #f0f0f0;
  border-radius: 10px;
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 14px;
}
.form-control input:focus {
  outline: 0;
  border-color: #777;
}
.form-control.error input {
  border-color: red;
}
.form-control.success input {
  border-color: green;
}
.form-control small {
  color: red;
  position: absolute;
  bottom: 0;
  left: 0;
  visibility: hidden;
}
.form-control.error small {
  visibility: visible;
}
.form button {
  cursor: pointer;
  background-color: #3498db;
  color: #fff;
  border: 2px solid #3498db;
  border-radius: 10px;
  margin-top: 20px;
  width: 100%;
  display: block;
  font-size: 16px;
  padding: 10px;
}
</style>
