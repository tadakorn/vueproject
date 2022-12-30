<template>
  <nav>
    <a href="index.html"><h2>Movies App (TMDb API)</h2></a>
    <h2>Years :</h2>
    <select id="years">
      <option value="2020">2020</option>
      <option value="2019">2019</option>
      <option value="2018">2018</option>
      <option value="2017">2017</option>
      <option value="2016">2016</option>
      <option value="2015">2015</option>
      <option value="2014">2014</option>
      <option value="2013">2013</option>
      <option value="2012">2012</option>
      <option value="2011">2011</option>
      <option value="2010">2010</option>
    </select>
  </nav>
  <div class="content" id="content"></div>
</template>

<style scoped>
nav {
  width: 100%;
  height: 60px;
  background-color: rgb(38, 38, 38);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid white;
}
nav h2 {
  margin: 0 20px;
  color: #fff;
}
nav a {
  text-decoration: none;
}
select {
  padding: 5px;
  outline: none;
  font-size: 1.2em;
  margin: 10px;
  width: 320px;
  border-radius: 5px;
}
.content div {
  width: 300px;
  height: 350px;
  margin: 20px 15px;
  background: #333;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
h2 {
  color: #fff;
  text-align: center;
  font-size: 1.3em;
}
.movie:hover {
  opacity: 90%;
  transform: scale(0.98);
}
</style>
