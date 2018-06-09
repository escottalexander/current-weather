

$(document).ready(function() {
  $body = $("body");

$(document).on({
    ajaxStart: function() { $body.addClass("loading");    },
     ajaxStop: function() { $body.removeClass("loading"); }    
});
  //////begin initial execution
  $.getJSON("https://api.openweathermap.org/data/2.5/weather?zip=23139,us&APPID=2c3ea1a7f2c335edf2e3683d525a4445", function(json) {

      // $(".message").html(JSON.stringify(json));
      var location = json["name"];
      $("#location").html(location);

      var currentWeather = json["weather"][0]["main"];

      $("#currentWeather").html(currentWeather);

      function weatherBackground(whatIsIt) {
        whatIsIt = whatIsIt.toLowerCase();
        if (whatIsIt == "clouds") {
          $("body").css("background-image", "url('https://gdurl.com/N9WR')");
        } else if (whatIsIt == "clear") {
          $("body").css("background-image", "url('https://gdurl.com/G6qS')");
        } else if (whatIsIt == "rain") {
          $("body").css("background-image", "url('https://gdurl.com/Umy5')");
        } else if (whatIsIt == "snow") {
          $("body").css("background-image", "url('https://gdurl.com/keGW')");
        } else if (whatIsIt == "thunderstorm") {
          $("body").css("background-image", "url('https://gdurl.com/meHF')");
        } else if (whatIsIt == "drizzle") {
          $("body").css("background-image", "url('https://gdurl.com/d_WC')");
        } else if (whatIsIt == "mist") {
          $("body").css("background-image", "url('https://gdurl.com/oAf9')");
        }
      }
      weatherBackground(currentWeather);
      var currentTemp = Math.floor(json["main"]["temp"]);

      $("#currentTemp").html(fahTemp);
      var celTemp = currentTemp - 273;
      var fahTemp = 1.8 * (currentTemp - 273) + 32;
      $("#currentTemp").html(fahTemp);
      
      $("#scale").on("click", function() {
        if ($("#scale").html() == "C") {
          $("#currentTemp").html(fahTemp);
          $("#scale").html('F');
        } else {
          $("#currentTemp").html(celTemp);
          $("#scale").text("C");
        }
      });

    });
////////end the initial execution
  
$body = $("body");

$(document).on({
    ajaxStart: function() { $body.addClass("loading");    },
     ajaxStop: function() { $body.removeClass("loading"); }    
});

  //if search is made, execute all of this
  $("#getMessage").on("click", function() {
    var zipCode = $('#zipEnter').val();
    //console.log(zipCode);
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&APPID=2c3ea1a7f2c335edf2e3683d525a4445", function(json) {

      // $(".message").html(JSON.stringify(json));
      var location = json["name"];
      $("#location").html(location);

      var currentWeather = json["weather"][0]["main"];

      $("#currentWeather").html(currentWeather);

      function weatherBackground(whatIsIt) {
        whatIsIt = whatIsIt.toLowerCase();
        if (whatIsIt == "clouds") {
          $("body").css("background-image", "url('https://gdurl.com/N9WR')");
        } else if (whatIsIt == "clear") {
          $("body").css("background-image", "url('https://gdurl.com/G6qS')");
        } else if (whatIsIt == "rain") {
          $("body").css("background-image", "url('https://gdurl.com/Umy5')");
        } else if (whatIsIt == "snow") {
          $("body").css("background-image", "url('https://gdurl.com/keGW')");
        } else if (whatIsIt == "thunderstorm") {
          $("body").css("background-image", "url('https://gdurl.com/meHF')");
        } else if (whatIsIt == "drizzle") {
          $("body").css("background-image", "url('https://gdurl.com/d_WC')");
        } else if (whatIsIt == "mist") {
          $("body").css("background-image", "url('https://gdurl.com/oAf9')");
        }
      }
      weatherBackground(currentWeather);
      var currentTemp = Math.floor(json["main"]["temp"]);

      
      $("#currentTemp").html(fahTemp);
      var celTemp = currentTemp - 273;
      var fahTemp = 1.8 * (currentTemp - 273) + 32;
      $("#currentTemp").html(fahTemp);
      $("#scale").html('F');
      $("#scale").on("click", function() {
        if ($("#scale").html() == "C") {
          $("#currentTemp").html(fahTemp);
          $("#scale").html('F');
        } else {
          $("#currentTemp").html(celTemp);
          $("#scale").text("C");
        }
      });
      
    });
  });
  
});