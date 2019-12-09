<template>
    <div>
         <div id="map"></div>
            <div id="legend">
            </div>
            <!--div id="control_panel">
                <div id="directions_panel"></div>
                <div id="total"></div>
            </div-->
                <!-- <div id="start" style="background-color: aquamarine;width: 20px; height: 15px;">Start</div> -->
    </div>
</template>

<script>
export default {
    name: 'GMap',
    data(){
        return{
            lat: 50,
            lng: -2,
            map: null,
            secondMarker: false 
        }
    },
    methods: {
        
        initMap() {
            var infowindow = new google.maps.InfoWindow();
            // ------------------------------------------- 
            // map
            // ------------------------------------------- 
            var map = new google.maps.Map(document.getElementById('map'), {
                center: {
                    lat: 38.711073,
                    lng: -9.139809
                },
                zoom: 16,
                disableDefaultUI: true,
                zoomControl: true,
                styles: [{
                    "elementType": "labels",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "administrative.land_parcel",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "administrative.neighborhood",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "landscape",
                    "stylers": [{
                        "color": "#ffffff"
                    }]
                }, {
                    "featureType": "poi",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "poi.attraction",
                    "stylers": [{
                        "color": "#ffd72a"
                    }]
                }, {
                    "featureType": "poi.attraction",
                    "elementType": "labels",
                    "stylers": [{
                        "color": "#ffd72a"
                    }]
                }, {
                    "featureType": "poi.attraction",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "color": "#ffd72a"
                    }]
                }, {
                    "featureType": "road",
                    "stylers": [{
                        "color": "#a4a0a0"
                    }]
                }, {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "transit",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "water",
                    "stylers": [{
                        "color": "#5c5ca9"
                    }]
                }]
            });
            var elevator = new google.maps.ElevationService;
            var infowindow = new google.maps.InfoWindow({map: map});
            // Add a listener for the click event. Display the elevation for the LatLng of
            // the click inside the infowindow.
            /*map.addListener('click', function(event) {
                displayLocationElevation(event.latLng, elevator, infowindow);
            });*/
            function displayLocationElevation(location, elevator, infowindow) {
                // Initiate the location request
                    elevator.getElevationForLocations({
                        'locations': [location]
                    }, function(results, status) {
                        infowindow.setPosition(location);
                        if (status === 'OK') {
                        // Retrieve the first result
                        if (results[0]) {
                            // Open the infowindow indicating the elevation at the clicked position.
                            infowindow.setContent('Your elevation<br>is ' +
                                Math.round(results[0].elevation) + ' meters.');
                        } else {
                            infowindow.setContent('No results found');
                        }
                        } else {
                        infowindow.setContent('Elevation service failed due to: ' + status);
                        }
                    });
            }
            // ------------------------------------------- 
            // marker
            // ------------------------------------------- 


            // ------------------------------------------- 
            // routes
            // ------------------------------------------- 
            var directionDisplay = new google.maps.DirectionsRenderer();
            var directionsService = new google.maps.DirectionsService();
            var polyline = new google.maps.Polyline({
                        path: [],
                        strokeWeight: 3,
                        strokeOpacity: 0
                    });;
            var totalDist = 0;
            var totalTime = 0;

            function calcRoute(start, end, travelMode, label, color, pos) {
                var request = {
                    origin: start,
                    destination: end,
                    travelMode: travelMode
                };

                directionsService.route(request, function(response, status) {
                    if (status == google.maps.DirectionsStatus.OK) {
                        polyline.setPath([]);
                        var bounds = new google.maps.LatLngBounds();
                        var startLocation = new Object();
                        var endLocation = new Object();
                        var route = response.routes[0];
                        
                        var path = response.routes[0].overview_path;
                        var legs = response.routes[0].legs;
                        var i;
                        for (i = 0; i < legs.length; i++) {

                            endLocation.latlng = legs[i].end_location;
                            endLocation.address = legs[i].end_address;
                            var steps = legs[i].steps;
                            for (var j = 0; j < steps.length; j++) {
                                var nextSegment = steps[j].path;
                                for (var k = 0; k < nextSegment.length; k++) {
                                    polyline.getPath().push(nextSegment[k]);
                                    bounds.extend(nextSegment[k]);
                                }
                            }
                        }
                        polyline.setMap(map);
                        directionDisplay = new google.maps.DirectionsRenderer({
                        polylineOptions: {
                            clickable: true,
                            strokeColor: color,
                            strokeWeight: 10,
                            strokeOpacity: 0.5
                        },suppressMarkers: true
                        });
                    directionDisplay.setMap(map);
                    directionDisplay.setDirections(response);
                    computeTotalDistance(response, pos, label);
                    } else {
                        alert("directions response " + status);
                    }
                });
                document.getElementById("carddetails").style.display = 'block';
                document.getElementById("map").style.height = '86%';
            }
            function createRouteLabel(latlng, label, html) {
                var infowindow = new google.maps.InfoWindow();
                infowindow.setContent("<text style='font-size:20px; color: indigo'>" + label + "</text>");
                infowindow.setPosition(latlng)
                infowindow.open(map);
                return infowindow;
            }
            
            function putMarkerOnRoute(percentage, label) {
                var distance = (percentage / 100) * totalDist;
                var time = ((percentage / 100) * totalTime / 60).toFixed(2);
                if(label != "") {createRouteLabel(polyline.GetPointAtDistance(distance), label);}
            }
            
            function computeTotalDistance(result, pos, label) {
                totalDist = 0;
                totalTime = 0;
                var myroute = result.routes[0];
                for (var i = 0; i < myroute.legs.length; i++) {
                    totalDist += myroute.legs[i].distance.value;
                    totalTime += myroute.legs[i].duration.value;
                }
                putMarkerOnRoute(pos, label);
                totalDist = totalDist / 1000.
            }
            
            google.maps.Polygon.prototype.GetPointAtDistance = function(metres) {
                // some awkward special cases
                if (metres == 0) return this.getPath().getAt(0);
                if (metres < 0) return null;
                if (this.getPath().getLength() < 2) return null;
                var dist = 0;
                var olddist = 0;
                for (var i = 1;
                  (i < this.getPath().getLength() && dist < metres); i++) {
                  olddist = dist;
                  dist += google.maps.geometry.spherical.computeDistanceBetween(this.getPath().getAt(i), this.getPath().getAt(i - 1));
                }
                if (dist < metres) {
                  return null;
                }
                var p1 = this.getPath().getAt(i - 2);
                var p2 = this.getPath().getAt(i - 1);
                var m = (metres - olddist) / (dist - olddist);
                return new google.maps.LatLng(p1.lat() + (p2.lat() - p1.lat()) * m, p1.lng() + (p2.lng() - p1.lng()) * m);
            }
            // === Copy all the above functions to GPolyline ===
            google.maps.Polyline.prototype.GetPointAtDistance = google.maps.Polygon.prototype.GetPointAtDistance;

            // ------------------------------------------- 
            // legend
            // ------------------------------------------- 
            var legend = document.getElementById('legend');
            var div = document.createElement('div');
            div.innerHTML = '500m<br><img src="' + "red.png" + '"> ' + "<br> 0m";
            legend.appendChild(div);
            map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);

            // ------------------------------------------- 
            // traffic
            // ------------------------------------------- 
            var trafficLayer = new google.maps.TrafficLayer();
             trafficLayer.setMap(map);

            // ------------------------------------------- 
            // hard code
            // ------------------------------------------- 
            var pos1 = {
                lat: 38.706732,
                lng: -9.143674
            };

            var here = new google.maps.Marker({
              position: pos1,
              map: map,
              label: "FR"
            });

            
            var pos2 = { 
              lat: 38.715070,
              lng: -9.146037
            };

            var TO = new google.maps.Marker({
                position: pos2,
                map: map,
                label: "TO"
            });


            calcRoute(pos1, pos2, "DRIVING", "clever", "#0000E5", 33);
            calcRoute(pos1, pos2, "WALKING", "sporty", "black", 66);

            var pos3 = { 
              lat: 38.713798,
              lng: -9.138242
            };

            var TO2 = new google.maps.Marker({
                position: pos3,
                map: map
            });

            var pos4 = { 
              lat: 38.713202,
              lng: -9.133216
            };


            var TO3 = new google.maps.Marker({
                position: pos4,
                map: map
            });

            calcRoute(pos2, pos3, "WALKING", "", "blue", 50);
            calcRoute(pos3, pos4, "WALKING", "", "blue", 50);


            map.setCenter({
                    lat: 38.711073,
                    lng: -9.139809
                });
            map.setZoom(13)
        }
    }
        
    ,
    mounted(){
        this.initMap()
    }
}
</script>

<style scoped>
#map{ 
    width: 100%;
    height: 95%;
    margin: 0 auto;
    background: #fff;
    position: absolute;
    top: 0;
    left: 0; 
    z-index: -1;
}

/* Always set the map height explicitly to define the size of the div
       * element that contains the map. */
    

 /* Optional: Makes the sample page fill the window.  */

html,
body {
    height: 100%;
    margin: 0;
    padding: 0;
}


#legend {
    font-family: Roboto, sans-serif;
    background: #fff;
    padding: 10px;
    margin: 10px;
    border: 3px solid #000;
   
}

#legend h3 {
    margin-top: 0;
}

#legend img {
    vertical-align: middle;
}
</style>
