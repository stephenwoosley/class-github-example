
let theMap = L.map('mapid');

const public_token = "pk.eyJ1Ijoia3JhYjcxOTEiLCJhIjoiY2p1eGJuZHdxMGxsZjRlbzBoc2Vuc3R0aSJ9.0C-gyciyb3J6J1-Butq6hg";

(function () {
    if ("geolocation" in navigator) {
        /* geolocation is available */
        navigator.geolocation.getCurrentPosition(function (position) {
            setMapPos(position.coords.latitude, position.coords.longitude);
        });
    } else {
        /* geolocation IS NOT available */
    }
})();

const setMapPos = (lat, lng) => {
    theMap.setView([lat, lng], 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + public_token, {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'your.mapbox.access.token'
    }).addTo(theMap);
}