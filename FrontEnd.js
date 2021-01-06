
var Offices = [
"Huntsville, AL 35806 USA",
"San Diego, CA 92110",
"San Diego, CA 92108",
"Aurora, CO  80011",
"Colorado Springs, CO 80915",
"Washington, DC 20005",
"Washington, DC 20003",
"Washington, DC 20024",
"Norfolk, VA 23502",
"Stafford, VA 22554",
"Seattle, WA 98101" ,
"Pyeongtaek-si, Gyeonggi-do, South Korea 17977",
"Germany",
"Netherlands",
"Cairo, Egypt",
"Beirut, Lebanon",
"Doha, Qatar",
"Abu Dhabi, United Arab Emirates",
"Dubai, United Arab Emirates"]

const baseURL = "http://api.weatherstack.com/current?access_key=a83e81cf4a1df8a917f1c9b78ee81efa&query="


function welcomeandshowWeather(name, zip) {
    var zipCode = zip;
    

    Offices.forEach(element => {
        var weatherURL = baseURL + element;
        $.ajax({
            url: weatherURL,
            method: "GET"
        }).then(function (weather) {
            console.log(weather.current,weather.current.temperature);
    
            $("#Weather").append("<h3>" + element + " cuurent weather is  " + weather.current.temperature + " °F ")
     
    
        })
    });

}




welcomeandshowWeather("Chris", 20904);
