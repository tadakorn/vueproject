<template>
  <v-container>
    <v-row justify="center" class="text-center">
      <v-col cols="12">
        <div class="text-h4">บัญชีรายรับ - รายจ่าย</div>
      </v-col>
    </v-row>
    <v-row justify="center" class="text-center">
      <v-col cols="12" md="6">
        <BalanceDisplay :income="income" :expense="expense" />
      </v-col>
    </v-row>
    <v-row justify="center" class="text-center">
      <v-col cols="12" md="6">
        <TransactionForm @createTransaction="createTransaction" />
      </v-col>
    </v-row>
    <v-row justify="center" class="text-center">
      <v-col cols="12" md="6">
        <TransactionHistory
          :transactionList="transactionList"
          @deleteTransaction="deleteTransaction"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BalanceDisplay from "../components/workshop2/BalanceDisplay.vue";
import TransactionForm from "../components/workshop2/TransactionForm.vue";
import TransactionHistory from "../components/workshop2/TransactionHistory.vue";
export default {
  components: {
    BalanceDisplay,
    TransactionForm,
    TransactionHistory,
  },
  data() {
    return {
      income: 0,
      expense: 0,
      transactionList: [
        {
          transactionName: "a",
          amount: 10,
          amountType: "รายรับ",
        },
        {
          transactionName: "b",
          amount: 20,
          amountType: "รายรับ",
        },
        {
          transactionName: "c",
          amount: 30,
          amountType: "รายรับ",
        },
      ],
    };
  },
  mounted() {
    this.calculateBalance();
  },
  methods: {
    calculateBalance() {
      let income = 0;
      let expense = 0;
      this.transactionList.forEach((transaction) => {
        if (transaction.amountType === "รายรับ") {
          income += transaction.amount;
        } else {
          expense += transaction.amount;
        }
      });
      this.income = income;
      this.expense = expense;
    },
    createTransaction(value) {
      this.transactionList.push(value);
      this.calculateBalance();
    },
    deleteTransaction(value) {
      this.transactionList.splice(value, 1);
      this.calculateBalance();
    },
  },
};
</script>

<style scoped></style>
