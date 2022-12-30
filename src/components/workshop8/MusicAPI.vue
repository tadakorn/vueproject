<template>
  <h1 style="color: white">โปรแกรมเล่นเพลง (Music API)</h1>
  <div class="music-container" id="music-container">
    <div class="music-info">
      <h4 class="title" id="title">เพลงมาริโอ้</h4>
      <div class="progress-container" id="progress-container">
        <div class="progress" id="progress"></div>
      </div>
    </div>
    <audio src="" controls hidden id="audio"></audio>
    <div class="img-container">
      <img src="" alt="" id="cover" />
    </div>
    <div class="navigation">
      <button id="prev" class="action-btn">
        <i class="fas fa-backward"></i>
      </button>
      <button id="play" class="action-btn">
        <i class="fas fa-play"></i>
      </button>
      <button id="next" class="action-btn">
        <i class="fas fa-forward"></i>
      </button>
    </div>
  </div>
</template>

<style scoped>
.music-container {
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.6);
  display: flex;
  padding: 20px 30px;
  position: relative;
  margin: 100px 0;
  z-index: 10;
}
.img-container {
  position: relative;
  width: 100px;
}
/* .img-container img {
  width: inherit;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  bottom: 0;
  left: 0;
  animation: rotate 5s linear infinite;
  animation-play-state: paused;
} */

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.music-container.play .img-container img {
  animation-play-state: running;
}

.navigation {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.action-btn {
  background: #fff;
  border: 0;
  color: #dfdbdf;
  font-size: 20px;
  padding: 10px;
  margin: 0 20px;
}
.action-btn:focus {
  outline: 0;
}
.action-btn:active {
  transform: scale(0.98);
}
.music-info {
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 15px 15px 0 0;
  position: absolute;
  top: 0;
  width: calc(100%-40px);
  left: 20px;
  opacity: 0;
  transform: translateY(0%);
  padding: 10px 10px 10px 150px;
  transition: transform 0.3s ease-in, opacity 0.3s ease-in;
}
.music-container.play .music-info {
  transform: translateY(-100%);
  opacity: 1;
}
.music-info h4 {
  margin: 0;
}
.progress-container {
  background-color: #fff;
  width: 100%;
  height: 4px;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0;
}
.progress {
  background-color: red;
  width: 0%;
  height: 100%;
  border-radius: 5px;
  transition: width 0.1s linear;
}
</style>
