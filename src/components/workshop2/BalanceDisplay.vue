<template>
  <v-card elevation="4">
    <v-card-title><div class="text-h5">ยอดคงเหลือ (บาท)</div> </v-card-title>
    <v-card-text>
      <div :class="balanceColor">฿{{ formatNumber(balance) }}</div>
      <div class="income-expense-container">
        <div>
          <div class="text-h5">รายรับ</div>
          <div class="text-h6 text-green">฿{{ formatNumber(income) }}</div>
        </div>
        <div>
          <div class="text-h5">รายจ่าย</div>
          <div class="text-h6 text-red">฿{{ formatNumber(expense) }}</div>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["income", "expense"],
  methods: {
    formatNumber(num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    },
  },
  computed: {
    balance() {
      return this.income - this.expense;
    },
    balanceColor() {
      if (this.balance === 0) {
        return "text-h4";
      } else if (this.balance > 0) {
        return "text-h4 text-green";
      } else {
        return "text-h4 text-red";
      }
    },
  },
};
</script>

<style scoped>
h1 {
  letter-spacing: 1px;
  margin: 0;
}
h4 {
  margin: 0;
}
.income-expense-container {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: var(--box-shadow);
  padding: 20px;
  margin: 20px 0;
}
.income-expense-container > div {
  flex: 1;
  text-align: center;
}
.income-expense-container > div:first-of-type {
  border-right: 1px solid #dedede;
}
.money {
  font-size: 20px;
  letter-spacing: 1px;
  margin: 5px 0;
}
</style>
