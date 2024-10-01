function getweather(){
    const city = document.getElementById('cityname').value;
    axios.get(`https://api.weatherapi.com/v1/current.json?key=cf1a8dffc48b48b5b1e93411243009&q=${city}&aqi=no`)
  .then(function (response) {
    // handle success
    let weather = response.data;
   console.log(weather);
   console.log(response);
   document.getElementById("result").innerHTML=(`Temprature is ${weather.current.temp_c} and the country name is ${weather.location.country}` )
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}

