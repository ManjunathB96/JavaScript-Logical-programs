/*
fetch :fetch is used to get data over the network

***getting response is a two stage process****
1]An object of response class containg status and ok  properties
status==>the http status code eg:200,
ok==>boolean true if the http status code is 200-299
2]after that we need to call another method to acceess the body in different formats

response.text() --read and return text
response.json() --parse the response as json
*/

// let p = fetch("https://goweather.herokuapp.com/weather/Newyork");
// p.then((value) => {
//    // console.log(value.status);
//   // console.log(value.ok);
//   // console.log(value.text()); it will give error we need to use only one either text or json
//     return value.json()
// }).then((data) => console.log(data));

let p = fetch("https://goweather.herokuapp.com/weather/Newyork");
p.then((value) => {
  return value.json();
}).then((data) => console.log(data));
/*
{
  wind: '4 km/h',
  description: 'Sunny',
  forecast: [
    { day: '1', temperature: '22 °C', wind: '13 km/h' },
    { day: '2', temperature: '22 °C', wind: '23 km/h' },
    { day: '3', temperature: '24 °C', wind: '26 km/h' }
  ]
}
*/