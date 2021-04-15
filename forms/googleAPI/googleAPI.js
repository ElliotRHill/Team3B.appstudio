//Array with call from Postman
grocStores = ["Walmart Neighboorhood Market", "Hy-Vee", "ALDI", "Family Dollar", "ALDI", "Family Dollar",  "Hy-Vee", "Family Dollar", "Trader Joe's"]

//Declared arrays for markers
returnedLoc = [[41.2626004, -95.9811922, "Walmart Neighborhood Market"], [41.261463, -95.879364, "Hy-Vee"], [41.3024318, -95.9559953, "ALDI"], [41.2512087, -95.94750669999999, "Family Dollar"], [41.2520613, -96.0222567, "ALDI"], [41.21445370000001, -95.95798689999999, "Family Dollar"], [41.2831746, -95.9370907, "Family Dollar"], [41.265507, -96.03931999999999, "Hy-Vee"][41.2482854, -96.0739732, "Trader Joe's"]]
marker = ["marker2", "marker3", "marker4", "marker5", "marker6", "marker7", "marker8", "marker9"]
point = ["point2", "point3", "point4", "point5", "point6", "point7", "point8", "point9"]

//API call
// 1. *** use your own url copied from Postman ****
let requestURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=grocery store &key=AIzaSyDoaVtASvuYckCYDer224otaiYRZApFXiw&location=41.265331,-95.949364&radius=2000&type=grocery_or_supermarket &maxprice=10"

function onXHRLoad() {
    let message = ""
    
    // 'this' is another name for the object returned from the API call
    let apiData = JSON.parse(this.responseText)
    
    for (i = 0; i <= apiData.results.length - 1; i++) {
        console.log(`${apiData.results[i].formatted_address}`)
        message = message + apiData.results[i].formatted_address + "\n" + apiData.results[i].name + "\n" + "\n" 
    }
    
    // 2. *** put your textarea control name here ****
    txtaLocation.value = message


    
    // if want to add to database call a function here that does that
    // addToDatabase()
}

function callAPI(URL) {
    var xhttp = new XMLHttpRequest();
    
    // if you need cors (you'll get a cors error if you don't have it and you need it)
    // use this code to add the cors code to your url 
    xhttp.open('GET', 'https://cors.bridged.cc/' + requestURL)
    
    // if you DON'T need cors use this code:
    //xhttp.open('GET',URL)
    
    /* Headers */
    // if you need to set the returned data type, use this line of code: 
    //xhttp.setRequestHeader('Content-Type', 'application/json')
    
    // if you need authorization token (stored in myToken) use this line of code: 
    // xhttp.setRequestHeader('Authorization', 'Bearer ' + myToken)
    
    // if you need a key and it's not in the url use code in one of the following
    // examples (think of headers as parameters)
    // or just use the Postman url which has all the parameters already added like I did here. 
    
    
    // Here are headers you might need: 
    /*
    xhttp.setRequestHeader('key','AIzaSyCE-pjULPU_Gp5Qf0qL39tVsdJBX55J0cY')
    xhttp.setRequestHeader('location','41.276900,-95.942310')
    xhttp.setRequestHeader('rankby','distance')
    xhttp.setRequestHeader('type','restaurant')
    */

    // make the API request
    xhttp.addEventListener('load', onXHRLoad)
    xhttp.send()
}

// 3. *** add a new button onclick event and put the callAPI code into it ***


btnLocation.onclick=function(){
   // call the code that will make the API call, then process what comes back
    callAPI(requestURL)
}


/*
This gets your current location and marks it, then also marks the other 4 
locations coded below. You could hard-code these like they are or 
use a variable. 
* remember, you may have to zoom out the map to see all of the markers. 

Before this will work, you need a Google Cloud API key that is enabled
for use with Google Maps and Google Places API's, and that is associated 
with a Billing account (in case you are a hacker). 
  
So do this: 
Get a Google Maps api key and then enable it for Google Maps APIs and 
for Google Places APIs (most common ones). To enable the key with these two, 
go to your Google Maps Console (search “google api 
key dashboard console”). Then click left menu 
‘Credentials’. Pick your API key, and click 'Library' in left side menu. On next 
page click the ‘Maps Javascript API’ one. On next 
page click ‘Enable’. Repeat for 'Places API'. 

Next you have to go to billing and give Google your 
credit card for this API. You can cancel this when course is done 
(if you get charged at all, it will only be pennies). 

Now put your API key in the apikey property. 
*/

var marker
var infowindow
var currentLat, currentLong

function gotLocation(location, lat, long) {

    gmLocations.mapOptions.latitude = location.coords.latitude
    gmLocations.mapOptions.longitude = location.coords.longitude
    
    currentLat22 =location.coords.latitude
    currentLong22 = location.coords.longitude
    console.log(`lat and long are ${currentLat22} and ${currentLong22}`)
    gmLocations.refresh()

    //Put a marker on our location
    point1 = new google.maps.LatLng(location.coords.latitude, location.coords.longitude)
    marker1 = gmLocations.setMarker({
        position: point1
    });

    //Walmart
    point2 = new google.maps.LatLng(41.2626004, -95.9811922);
    marker2 = gmLocations.setMarker({
        position: point2
      
    });

    //Hyvee
    point3 = new google.maps.LatLng(41.261463, -95.879364);
    marker3 = gmLocations.setMarker({
        position: point3
     
    });

    //Family Dollar
    //loop possibility
    point4 = new google.maps.LatLng(41.2512087, -95.94750669999999);
    marker4 = gmLocations.setMarker({
        position: point4, 
    
    });
     //Aldi
    point5 = new google.maps.LatLng(41.3024318, -95.9559953);
    marker5 = gmLocations.setMarker({
        position: point5
        
        });
        
         //ALDI
    point6 = new google.maps.LatLng(41.2520613, -96.0222567);
    marker6 = gmLocations.setMarker({
        position: point6
   
        });
          //"Family Dollar"
    point7 = new google.maps.LatLng(41.21445370000001, -95.95798689999999);
    marker7 = gmLocations.setMarker({
        position: point7
    
        });
          //"Family Dollar"
    point8 = new google.maps.LatLng(41.2831746, -95.9370907);
    marker8 = gmLocations.setMarker({
        position: point8
    
        });
          //, "Hy-Vee"
    point9 = new google.maps.LatLng(41.265507, -96.03931999999999);
    marker9 = gmLocations.setMarker({
        position: point9
     
        });
          //, "Trader Joe's
    point10 = new google.maps.LatLng(41.2482854, -96.0739732);
    marker10 = gmLocations.setMarker({
        position: point10
       
      });

};


btnCL4.onclick = function() {
    // have to run this before you do anything else - call this getLocation button
    navigator.geolocation.getCurrentPosition(gotLocation)
    NSB.WaitCursor(true)
}




//Add to select
googleAPI.onshow=function(){
  selLoc.clear()   
    // put array of flavors in the dropdown (called populating it)
    for (i = 0; i < grocStores.length; i++) 
        selLoc.addItem(grocStores[i])
}


// multiple list choices allowed; uses button onclick
// Comment code above, and uncomment code below

btnFavLoc.onclick=function(){
  // returns array of the choices' text
    let message = "You chose:"
  for (i = 0; i < selLoc.text.length; i++)
     message = message + " " + selLoc.text[i] + ", " 
     
  // remove the last comma
  // slice drops last 2 characters (comma and space)
  //     starts at 0, and goes to end of the 
  //     string minus 2 characters
  message = message.slice(0, -2)
  txtaLocation.value = message
  
}


