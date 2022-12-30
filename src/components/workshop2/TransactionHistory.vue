<template>
  <v-card elevation="4">
    <v-card-title><div class="text-h5">ประวัติธุรกรรม</div></v-card-title>
    <v-card-text class="mt-n4">
      <v-card
        class="mt-4"
        v-for="(transaction, index) in transactionList"
        :key="index"
        density="compact"
      >
        <v-card-text class="d-flex align-center">
          <div>
            <div class="text-subtitle-1">
              {{ transaction.transactionName }}
            </div>
            <div class="text-subtitle-1 text-green">
              ฿{{ formatNumber(transaction.amount) }}
            </div>
          </div>
          <v-spacer />
          <v-col cols="2">
            <v-btn
              @click="deleteTransaction(index)"
              size="small"
              density="compact"
              icon="mdi-close"
              color="red"
            ></v-btn>
          </v-col>
        </v-card-text>
      </v-card>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["transactionList"],
  methods: {
    formatNumber(num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    },
    deleteTransaction(index) {
      this.$emit("deleteTransaction", index);
    },
  },
};
</script>

<style scoped></style>
