//selector
const messageBox = document.getElementById("message-box");



let watchID = " ";

const getLocation = () =>{
    if(navigator.geolocation){
        watchID =  navigator.geolocation.watchPosition(showPosition,showError);
    }else{
        messageBox.innerHTML = "Geolocation is not supported by this browser.";
    }
}


//showPosition
const showPosition = (position) =>{
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    messageBox.innerHTML = `Latitude = ${lat} <br/> Longitude = ${lon}`;

}

//showError
const showError = (error) =>{
    switch(error.code) {
        case error.PERMISSION_DENIED:
          messageBox.innerHTML = "User denied the request for Geolocation."
          break;
        case error.POSITION_UNAVAILABLE:
          messageBox.innerHTML = "Location information is unavailable."
          break;
        case error.TIMEOUT:
          messageBox.innerHTML = "The request to get user location timed out."
          break;
        case error.UNKNOWN_ERROR:
          messageBox.innerHTML = "An unknown error occurred."
          break;
      }
}

//clearWatch geo location
const stopWatching = () => {
        // Stop watching the user's location using the watchID
        navigator.geolocation.clearWatch(watchID);
        messageBox.innerHTML ='Geolocation watching stopped.';
        watchID = null; // Reset the watchID after stopping the watch
}
setTimeout(stopWatching, 1000);


