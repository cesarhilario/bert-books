var BookStore = {
    adrress: "Avenida Paulista, 1374",
    LatLgn: null
}

var App = {
    Init: () => {
        App.ApplyEvents();
    },

    //Functions
    ApplyEvents: () => {
        $("#btnTraceRoute").on("click", () => {
            if(!$("#ipt-address").value == ""){
                var travelMode = $("#opt1").checked ? 0 : 1;
                var address = $("#ipt-address").value;

                var origin;
                GeocodeAddress(address, (results) => {
                    origin = results[0].geometry.location;
                    TraceRoute(map, origin, BookStore.LatLgn, travelMode);
                });
            }else{
                alert("Digite um Endereço");
            }
        });
    }
}

//Maps
let map;

function InitMap(){
    map = new google.maps.Map($("#map"), {
        zoom: 18
    });

    GeocodeAddress(BookStore.adrress, (results) => {
        BookStore.LatLgn = results[0].geometry.location

        map.setCenter(results[0].geometry.location);

        let marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location,
            title: "Bert Books"
        });
    });
    
}

function GeocodeAddress(address, callback)  {
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({"address": address}, (results, status) => {
        if(status == "OK"){
                callback(results);
            
        }
    });
}

function TraceRoute(map, origin, destination, _travelMode){
    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();

    let travelMode = (_travelMode == 0) ? google.maps.DirectionsTravelMode.TRANSIT : google.maps.DirectionsTravelMode.DRIVING;
    var request = {
        origin: origin,
        destination: destination,
        travelMode : travelMode
    }

    directionsService.route(request, (response, status) => {
        directionsDisplay.setDirections(response);
        directionsDisplay.setMap(map);
    });
}

//Init App
window.onload = () => {
    App.Init();
};