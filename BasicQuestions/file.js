let p = fetch("https://goweather.herokuapp.com/weather/France");
p.then((value) => {
  return value.json();
}).then((data) => console.log(data));