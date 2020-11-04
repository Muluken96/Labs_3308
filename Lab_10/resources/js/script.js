//helper functions
var dayOfWeek = "";
function formatDate(date, month, year)
{
  month = (month.length < 2) ? ('0' + month) : month;
  date = (date.length < 2)? ('0' + date) : date;
  return [year,month,date].join('-');
}
function getDayofWeek(date, month, year){
  var week_names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  dayOfWeek =  week_names[new Date([month,date,year].join('-')).getDay()];
}
function getFarenheitTemp(temp){
  return (9*temp/5)+32;
}

//run when the document object model is ready for javascript code to execute
//https://api.weatherstack.com/forecast?access_key=5bc82451636190abd9d7afe6fe9b20b5&query=40,60&forecast_days=7
$(document).ready(function() {
  var url ='https://api.weatherstack.com/forecast?access_key=5bc82451636190abd9d7afe6fe9b20b5&query=40,60&forecast_days=5'; //Place your weatherstack API Call Here - access_key to be used: 5bc82451636190abd9d7afe6fe9b20b5


  $.ajax({url:url, dataType:"jsonp"}).then(function(data) {
    console.log(data);
    console.log("Current Temp:" +data.current.temperature);
    var current_time = new Data(data.location.localtime);
    console.log(current_time.getDay());

    var img_today = data.current.weather_icons;

    var temp_today = getFarenheitTemp(data.current.temperature);
    var precip_today = data.current.precip;
    var humidity_today = data.current.humidity;
    var wind_today = data.current.wind_speed;
    var summary_today = data.current.weather_descriptions;


    var thermo_inner = '';
    if(temp_today <= 0){
      thermo_inner += 0 + '%';
    }
    else if(temp_today >= 100){
      thermo_inner += 100 + '%';
    }
    else{
      thermo_inner += temp_today + '%';
    }

  

    document.getElementById("humidity_today").innerHTML = dat.current.humidity_today;
    document.getElementById("summary_today").innerHTML = data.current.summary_today;
    document.getElementById("local_time").innerHTML = data.current.current_time;
    document.getElementById("imgage_today").src = data.currentimg_today;
    document.getElementById("precip_today").innerHTML = data.current.precip_today;
    document.getElementById("wind_today").innerHTML = data.current.wind_speed;
    document.getElementById("heading").innerHTML = ' - ' + data.location.name;
    document.getElementById("temp_time").innerHTML = data.current.temp.today;
    document.getElementById("thermometer_inner").style.height = thermo_inner;


    /*
      Read the current weather information from the data point values [https://weatherstack.com/documentation] to
      update the webpage for today's weather:
      1. image_today : This should display an image for today's weather.
               This will use the icon that is returned by the API. You will be looking for the weather_icons key in the response.

      2. location: This should be appended to the heading. For eg: "Today's Weather Forecast - Boulder"

      3. temp_today : This will be updated to match the current temperature. Use the getFarenheitTemp to convert the temperature from celsius to farenheit.

      4. thermometer_inner : Modify the height of the thermometer to match the current temperature. This means if the
                   current temperature is 32 F, then the thermometer will have a height of 32%.  Please note,
                   this thermometer has a lower boundary of 0 and upper boundary of 100.

      5. precip_today : This will be updated to match the current probability for precipitation. Be sure to check the unit of the value returned and append that to the value displayed.

      6. humidity_today : This will be updated to match the current humidity percentage (make sure this is listed as a
                percentage %)
          
        
      7. wind_today : This will be updated to match the current wind speed.

      8. summary_today: This will be updated to match the current summary for the day's weather.

    */
    //helper function - to be used to get the key for each of the 5 days in the future when creating cards for forecasting weather
    
    function getKey(i){
        var week_names = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];
        dayOfWeek=week_names[new Date(Object.keys(data.forecast)[i]).getDay()];
        return data.forecast[Object.keys(data.forecast)[i]];
    }

    var forecastElementStr = '';
    for(var i = 1; i<6;i++){
      var forecastObj = getkey(i);
      console.log(data);
        forecastElementStr += '<div style = "width: 20%;"><div class = "card"><div class = "card-body"><h5 class = "card-title" >'+forcastObj.dayOfweek+
        '</h5><p class = "card-text">High:' +forecastObj.maxtemp+'<br>Low:'+forecastObj.mintemp+'<br>Sunrise:'+forecastObj.sunrise+'<br>Sunset:'+forecastObj.sunset+'</p></div></div></div>';   
      
    }

    document.getElementById('5_day_forcast').innerHTML = forecastElementStr;
      
    /* Process the daily forecast for the next 5 days */

    /*
      For the next 5 days you'll need to add a new card listing:
        1. The day of the week
        2. The temperature high
        3. The temperature low
        4. Sunrise
        5. Sunset

      Each card should use the following format:
      <div style="width: 20%;">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title"><!-- List Day of the Week Here --></h5>
            <p class="card-text">High:<!--List Temperature High --> <br>
              Low: <!-- List Temperature Low --><br>
              Sunrise: <!-- List Time of Sunrise --><br>
              Sunset: <!-- List Time of Sunset --></p>
          </div>
        </div>
      </div>

      <Hint1 - To access the forecast data> You need to make sure to carefully see the JSON response to see how to access the forecast data. While creating the key to access forecast data make sure to convert it into a string using the toString() method.

      <Hint2 - To add the cards to the HTML> - Make sure to use string concatenation to add the html code for the daily weather cards.  This should
      be set to the innerHTML for the 5_day_forecast.
    */
  })
});