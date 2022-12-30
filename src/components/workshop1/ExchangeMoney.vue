<template>
  <div class="container">
    <div class="currency">
      <select v-model="currency_one" @change="calculateMoney">
        <option
          :value="currency"
          v-for="currency in currency_list"
          :key="`one_${currency}`"
        >
          {{ currency }}
        </option>
      </select>
      <form>
        <input
          type="number"
          v-model="currency_one_value"
          hide-details
          variant="outlined"
          @input="calculateMoney"
        />
      </form>
    </div>
    <div class="swap-container">
      <div class="btn_swap">
        <button class="btn" id="btn" @click="swapCurrency">สลับสกุลเงิน</button>
      </div>
      <div class="rate_change">
        <div class="rate" id="rate">อัตราการแลกเปลี่ยน</div>
      </div>
    </div>
    <div class="currency">
      <select v-model="currency_two" @change="calculateMoney">
        <option
          :value="currency"
          v-for="currency in currency_list"
          :key="`two_${currency}`"
        >
          {{ currency }}
        </option>
      </select>
      <form>
        <input
          type="number"
          v-model="currency_two_value"
          hide-details
          variant="outlined"
          @input="calculateMoney"
        />
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      rate_text: "สลับอัตราการแลกเปลี่ยน",
      currency_one: "USD",
      currency_one_value: 1,
      currency_two: "THB",
      currency_two_value: 1,
      currency_list: [
        "AED",
        "ARS",
        "AUD",
        "BGN",
        "BRL",
        "BSD",
        "CAD",
        "CHF",
        "CLP",
        "CNY",
        "COP",
        "CZK",
        "DKK",
        "DOP",
        "EGP",
        "EUR",
        "FJD",
        "GBP",
        "GTQ",
        "HKD",
        "HRK",
        "HUF",
        "IDR",
        "ILS",
        "INR",
        "ISK",
        "JPY",
        "KRW",
        "KZT",
        "MXN",
        "MYR",
        "NOK",
        "NZD",
        "PAB",
        "PEN",
        "PHP",
        "PKR",
        "PLN",
        "PYG",
        "RON",
        "RUB",
        "SAR",
        "SEK",
        "SGD",
        "THB",
        "TRY",
        "TWD",
        "UAH",
        "USD",
        "UYU",
        "VND",
        "ZAR",
      ],
    };
  },

  mounted() {
    this.calculateMoney();
  },

  methods: {
    calculateMoney() {
      axios
        .get(`https://api.exchangerate-api.com/v4/latest/${this.currency_one}`)
        .then((response) => {
          let rate = response.data.rates[this.currency_two];
          this.rate_text = `1 ${this.currency_one} = ${rate} ${this.currency_two}`;
          this.currency_two_value = (this.currency_one_value * rate).toFixed(2);
        });
    },
    swapCurrency() {
      let temp = this.currency_one;
      this.currency_one = this.currency_two;
      this.currency_two = temp;

      // this.currency_one_value = 1;
      // this.currency_two_value = 1;

      this.calculateMoney();
    },
  },
};
</script>

<style scoped>
.btn {
  background-color: orange;
  cursor: pointer;
  border-radius: 5px;
  font-size: 12px;
  padding: 5px 12px;
}
.money-img {
  width: 215px;
}
.currency {
  padding: 40px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.currency select {
  padding: 10px 20px 10px 10px;
  border: 1px solid #dedede;
  font-size: 16px;
  background: transparent;
  appearance: none;
}
.currency input {
  border: 0;
  background: transparent;
  font-size: 30px;
  text-align: right;
}
.swap-container {
  padding: 0px 30px 0px 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.btn_swap {
  font-size: 20px;
  text-align: left;
  display: flex;
  flex-direction: row;
}
.rate_change {
  font-size: 20px;
  padding: 10px 15px 10px 120px;
  text-align: right;
  display: flex;
  flex-direction: row;
}
select:focus,
input:focus,
button:focus {
  outline: 0;
}
</style>
