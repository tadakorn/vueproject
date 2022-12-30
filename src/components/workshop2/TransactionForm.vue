<template>
  <v-card elevation="4">
    <v-card-title>
      <div class="text-h5">เพิ่มธุรกรรม</div>
    </v-card-title>
    <v-card-text>
      <v-text-field
        type="text"
        v-model="transactionName"
        hide-details
        variant="outlined"
        density="compact"
        label="ระบุชื่อธุรกรรม"
      ></v-text-field>
      <div class="d-flex mt-4">
        <v-select
          class="mr-4"
          v-model="amountType"
          :items="amountTypeList"
          variant="outlined"
          density="compact"
          hide-details
        ></v-select>
        <v-text-field
          type="number"
          v-model="amount"
          hide-details
          variant="outlined"
          density="compact"
          label="ระบุจำนวนเงิน"
        ></v-text-field>
      </div>
    </v-card-text>
    <v-card-actions class="justify-center">
      <v-btn @click="createTransaction" variant="flat" color="purple"
        >เพิ่มธุรกรรม</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      transactionName: null,
      amount: null,
      amountType: "รายรับ",
      amountTypeList: ["รายรับ", "รายจ่าย"],
    };
  },
  methods: {
    createTransaction() {
      if (this.transactionName === null || this.amount === null) {
        alert("กรอกให้ครบ");
      } else {
        let transaction = {
          transactionName: this.transactionName,
          amount: parseInt(this.amount),
          amountType: this.amountType,
        };
        this.$emit("createTransaction", transaction);

        // หลังจากส่งข้อมูลให้ component ตัวแม่แล้ว ให้ reset ค่าใน form ทั้งหมด
        this.transactionName = null
        this.amount = null
        this.amountType = "รายรับ"
      }
    },
  },
};
</script>

<style scoped></style>
