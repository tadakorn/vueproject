<template>
  <div class="container">
    <template v-if="isRunning">
      <h2>เกมพิมพ์เร็ว | Speed Typing</h2>
      <h1>{{ randomWord }}</h1>

      <input
        v-model="wordInput"
        type="text"
        name=""
        id="text"
        autocomplete="off"
        placeholder="ป้อนคำคุณเห็น"
      />
      <p class="time-container">
        เวลา <span id="time">{{ time }}</span> วินาที
      </p>
      <p class="score-container">
        <span id="score">{{ score }}</span> คะแนน
      </p>
    </template>
    <div v-else id="gameover-container" class="gameover-container">
      <h1>จบเกมแล้วนะครับ</h1>
      <p>คะแนนของคุณ = {{ score }} แต้ม</p>
      <v-btn @click="initial">เล่นอีกครั้ง</v-btn>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isRunning: true,
      wordList: ["แมว", "ไก่", "หมู", "ปลา", "ม้า", "วัว", "ควาย"],
      randomWord: null,
      wordInput: null,
      score: 0,
      time: 5,
      interval: null,
    };
  },
  mounted() {
    this.initial();
  },
  methods: {
    initial() {
      this.isRunning = true;
      this.score = 0;
      this.setRandomWord();
      this.setCountdown();
    },
    setRandomWord() {
      const randomIndex = Math.floor(Math.random() * this.wordList.length);
      this.randomWord = this.wordList[randomIndex];
    },
    setCountdown() {
      this.time = 5;
      clearInterval(this.interval);

      this.interval = setInterval(() => {
        if (this.time === 0) {
          clearInterval(this.interval);
          this.isRunning = false;
        } else {
          this.time--;
        }
      }, 1000);
    },
  },
  watch: {
    wordInput(value) {
      if (value === this.randomWord) {
        this.wordInput = null;
        this.setRandomWord();
        this.setCountdown();
        this.score += 10;
      }
    },
  },
};
</script>

<style scoped>
.container {
  background-color: #34495e;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  color: #fff;
  position: relative;
  text-align: center;
  width: 500px;
}
h2 {
  background-color: rgba(0, 0, 0, 0.3);
  padding: 8px;
  margin: 0 0 40px;
}
.word {
  margin: 0;
  color: yellow;
}
input {
  border: 0;
  border-radius: 20px;
  font-size: 18px;
  width: 300px;
  padding: 12px 20px;
  margin-top: 10px;
  text-align: center;
  background-color: #fff;
}
.time-container {
  position: absolute;
  top: 80px;
  left: 25px;
  color: greenyellow;
}
.score-container {
  position: absolute;
  top: 80px;
  right: 25px;
}
.gameover-container {
  background: inherit;
  /* position: absolute; */
  top: 0;
  left: 0;
  width: 100%;
  /* height: 100%; */
  z-index: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
}
</style>
