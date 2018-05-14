var BookStore = {
    adrress: "Avenida Paulista, 1374",
    lat: null, lng: null
}

var App = {
    Init: () => {
        App.ApplyEvents();
    },

    //Functions
    ApplyEvents: () => {

    }
}

//Maps
let map;

function InitMap(){
    map = new google.maps.Map($("#map"), {
        center: {lat: 0, lng: 0},
        zoom: 11
    });

    GeocodeAddress(BookStore.adrress, map);
}

function GeocodeAddress(address, map)  {
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({"address": address}, (results, status) => {
        if(status == "OK"){
            console.log(results) ;
        }
    });
}
//Init App
window.onload = () => {
    App.Init();
};