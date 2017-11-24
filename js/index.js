

$(document).ready(function() {
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
          $("body").css("background-image", "url('https://dncache-mauganscorp.netdna-ssl.com/cropped-wallpapers/2102/2102010-1280x800-[DesktopNexus.com].jpg?st=6j9p5NrowhgAznMh2EsoAA&e=1484097092')");
        } else if (whatIsIt == "clear") {
          $("body").css("background-image", "url('https://dncache-mauganscorp.netdna-ssl.com/cropped-wallpapers/1422/1422592-1280x800-[DesktopNexus.com].jpg?st=6nXDuXS-aeoYoiQ4ZOOASg&e=1484097823')");
        } else if (whatIsIt == "rain") {
          $("body").css("background-image", "url('https://dncache-mauganscorp.netdna-ssl.com/cropped-wallpapers/563/563956-1280x800-[DesktopNexus.com].jpg?st=oe4HPIx2gftr5A6mn8ShOw&e=1484133712')");
        } else if (whatIsIt == "snow") {
          $("body").css("background-image", "url('https://dncache-mauganscorp.netdna-ssl.com/cropped-wallpapers/1931/1931342-1280x800-[DesktopNexus.com].jpg?st=JInOo6NNDRPfSKJkS3Fuvg&e=1484097606')");
        } else if (whatIsIt == "thunderstorm") {
          $("body").css("background-image", "url('https://dncache-mauganscorp.netdna-ssl.com/cropped-wallpapers/1654/1654840-1280x800-[DesktopNexus.com].jpg?st=VIoYJHCQPDms5erppleKAA&e=1484097677')");
        } else if (whatIsIt == "dizzle") {
          $("body").css("background-image", "url('https://dncache-mauganscorp.netdna-ssl.com/cropped-wallpapers/563/563956-1280x800-[DesktopNexus.com].jpg?st=oe4HPIx2gftr5A6mn8ShOw&e=1484133712')");
        } else if (whatIsIt == "mist") {
          $("body").css("background-image", "url('https://dncache-mauganscorp.netdna-ssl.com/cropped-wallpapers/528/528959-1280x800-[DesktopNexus.com].jpg?st=zrQTouTo0iG3nDfLpSeYJQ&e=1484133773')");
        }
      }
      weatherBackground(currentWeather);
      var currentTemp = Math.floor(json["main"]["temp"]);

      $("#currentTemp").html(celTemp);
      var celTemp = currentTemp - 273;
      var fahTemp = 1.8 * (currentTemp - 273) + 32;
      $("#currentTemp").html(celTemp);

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
          $("body").css("background-image", "url('https://dncache-mauganscorp.netdna-ssl.com/cropped-wallpapers/2102/2102010-1280x800-[DesktopNexus.com].jpg?st=6j9p5NrowhgAznMh2EsoAA&e=1484097092')");
        } else if (whatIsIt == "clear") {
          $("body").css("background-image", "url('https://dncache-mauganscorp.netdna-ssl.com/cropped-wallpapers/1422/1422592-1280x800-[DesktopNexus.com].jpg?st=6nXDuXS-aeoYoiQ4ZOOASg&e=1484097823')");
        } else if (whatIsIt == "rain") {
          $("body").css("background-image", "url('https://dncache-mauganscorp.netdna-ssl.com/cropped-wallpapers/563/563956-1280x800-[DesktopNexus.com].jpg?st=oe4HPIx2gftr5A6mn8ShOw&e=1484133712')");
        } else if (whatIsIt == "snow") {
          $("body").css("background-image", "url('https://dncache-mauganscorp.netdna-ssl.com/cropped-wallpapers/1931/1931342-1280x800-[DesktopNexus.com].jpg?st=JInOo6NNDRPfSKJkS3Fuvg&e=1484097606')");
        } else if (whatIsIt == "thunderstorm") {
          $("body").css("background-image", "url('https://dncache-mauganscorp.netdna-ssl.com/cropped-wallpapers/1654/1654840-1280x800-[DesktopNexus.com].jpg?st=VIoYJHCQPDms5erppleKAA&e=1484097677')");
        } else if (whatIsIt == "dizzle") {
          $("body").css("background-image", "url('https://dncache-mauganscorp.netdna-ssl.com/cropped-wallpapers/563/563956-1280x800-[DesktopNexus.com].jpg?st=oe4HPIx2gftr5A6mn8ShOw&e=1484133712')");
        } else if (whatIsIt == "mist") {
          $("body").css("background-image", "url('https://dncache-mauganscorp.netdna-ssl.com/cropped-wallpapers/528/528959-1280x800-[DesktopNexus.com].jpg?st=zrQTouTo0iG3nDfLpSeYJQ&e=1484133773')");
        }
      }
      weatherBackground(currentWeather);
      var currentTemp = Math.floor(json["main"]["temp"]);

      
      var celTemp = currentTemp - 273;
      var fahTemp = 1.8 * (currentTemp - 273) + 32;
      $("#currentTemp").html(celTemp);

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