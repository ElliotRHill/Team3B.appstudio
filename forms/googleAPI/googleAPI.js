//Array with call from Postman
grocStores = ["Walmart","Hy-Vee: Broadway","ALDI: N 30th","Family Dollar: S 24th","ALDI: S 72nd","Family Dollar: 16th","Hy-Vee: Cass","Family Dollar: N 24th","Trader Joe's"]



//Declared arrays for markers
lat = [41.2626004, 41.261463, 41.3024318, 41.2512087, 41.2520613, 41.21445370000001, 41.2831746, 41.265507, 41.2482854]
lon = [-95.9811922, -95.879364, -95.9559953, -95.94750669999999, -96.0222567, -95.95798689999999, -95.9370907, -96.03931999999999, -96.0739732]

//API call
// 1. *** use your own url copied from Postman ****
let requestURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=grocery store &key=AIzaSyDoaVtASvuYckCYDer224otaiYRZApFXiw&location=41.265331,-95.949364&radius=2000&type=grocery_or_supermarket &maxprice=10"

function onXHRLoad() {
    let message = ""
    
    // 'this' is another name for the object returned from the API call
    let apiData = JSON.parse(this.responseText)
    
    for (i = 0; i <= apiData.results.length - 1; i++) {
        console.log(`${apiData.results[i].formatted_address}`)
        message = message + apiData.results[i].name + "\n" + apiData.results[i].formatted_address + "\n" + "\n" 
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


/////////////////////////////////////////////////////////////////////////////////////////

//Add to select
googleAPI.onshow=function(){
  selLoc.clear()   
    // put array of flavors in the dropdown (called populating it)
    for (i = 0; i < myPlaces.length; i++) 
        selLoc.addItem(myPlaces[i].name)
}
 

// multiple list choices allowed; uses button onclick
// Comment code above, and uncomment code below
/*
btnFavLoc.onclick=function(){
  // returns array of the choices' text
    let message = "You chose:"
  for (i = 0; i < selLoc.text.length; i++)
     message = message + "\n" + selLoc.text[i] + " \n" + "\n" 
     
  // remove the last comma
  // slice drops last 2 characters (comma and space)
  //     starts at 0, and goes to end of the 
  //     string minus 2 characters
  message = message.slice(0, -2)
  txtaLocation.value = message
*/




////////////////////////////////////////////Need to add markers into select//////////////////////////////////

myPlaces = [
              {name: "Walmart Neighborhood Market",lat:41.2626004,lon:-95.9811922},
              {name: "Hy-Vee: Broadway",lat:41.261463,lon:-95.879364},
              {name: "ALDI: N 30th",lat:41.3024318,lon:-95.9559953},
              {name: "Family Dollar: S 24th",lat:41.2512087,lon:-95.94750669999999},
              {name: "ALDI: S 72nd",lat:41.2520613,lon:-96.0222567},
              {name: "Family Dollar: 16th",lat:41.21445370000001,lon:-95.95798689999999},
              {name: "Family Dollar: N 24th",lat:41.2831746,lon:-95.9370907},
              {name: "Hy-Vee: Cass",lat:41.265507,lon:-96.03931999999999},
              {name: "Trader Joe's",lat:41.2482854,lon:-96.0739732}
            ]
///////////////////////////////////////////////////////
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
        label: point1,
        title: "My Location"    // hover by balloon tip tooltip name
    })

//loop of myPlaces to put markers on
    let tempPoint = ""
    let tempMarker = ""
    for (i = 0; i < myPlaces.length;i++) {
      tempPoint = new google.maps.LatLng(myPlaces[i].lat,myPlaces[i].lon)
      tempMarker = gmLocations.setMarker({
        position: tempPoint,
        //label: myPlaces[i].name
      })
    }
}


btnCL4.onclick = function() {
    // have to run this before you do anything else - call this getLocation button
    navigator.geolocation.getCurrentPosition(gotLocation)
    NSB.WaitCursor(true)
}



/*
selLoc.onclick = function(name) {
let tempPoint = ""
let tempMarker = ""
    for (i = 0; i < myPlaces.length;i++) {
      tempPoint = new google.maps.LatLng(myPlaces[i].lat,myPlaces[i].lon)
      tempMarker = gmLocations.setMarker({
        position: tempPoint,
        //label: myPlaces[i].name

marker = myPlaces[i].name
if (marker.name == myPlaces[i].name || myPlaces.length == 0) {
    marker.setVisible(true)
   }else{
    marker.setVisible(false)
    }
    }
    */
 

btnBackMenu.onclick=function(){
  ChangeForm(menu)
}
////////////////////////////////////////////////////////
  /*
  // ======= This function handles selections from the select box ====
      // === If the dummy entry is selected, the info window is closed ==
      function handleSelected(opt) {
        var i = opt.selectedIndex - 1; 
        if (i > -1) {
          GEvent.trigger(gmarkers[i],"click");
        }
        else {
          map.closeInfoWindow();
        }
      }
*/

