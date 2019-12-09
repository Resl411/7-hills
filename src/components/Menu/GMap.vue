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
        /*renderMap(){ 
            var map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: this.lat , lng: this.lng },
                zoom: 12,
                maxZoom: 15,
                minZoom: 3,
                streetViewControl: false
            }); 
        }*/
        initMap() {
            var infowindow = new google.maps.InfoWindow();
            // ------------------------------------------- 
            // map
            // ------------------------------------------- 
            var map = new google.maps.Map(document.getElementById('map'), {
                center: {
                    lat: 38.7179639,
                    lng: -9.1289785
                },
                zoom: 15,
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
            var secondMarker = 0;
            var marker1, marker2, here;
            var placeMarkerAndPanTo = function(latLng, map) {
                if (secondMarker == 1) 
                    {
                     marker2 = new google.maps.Marker({
                        position: latLng,
                        map: map,
                        draggable: true,
                        label: ((secondMarker) ? "FR" : "TO")
                    });
                    marker2.addListener('click', function(e) {
                        marker2.setMap(null);
                    })
                    
                    secondMarker++;
                }
                if(secondMarker == 0) {
                     marker1 = new google.maps.Marker({
                        position: latLng,
                        map: map,
                        draggable: true,
                        label: ((secondMarker) ? "FR" : "TO")
                    });
                    marker1.addListener('click', function(e) {
                        marker1.setMap(null);
                    })
                    
                    secondMarker++;
                }
            };
            map.addListener('click', function(e) {
                placeMarkerAndPanTo(e.latLng, map);
            });
            // ------------------------------------------- 
            // hard code marker
            // ------------------------------------------- 
            /*var pos = {
                lat: 38.733184,
                lng: -9.114323
            };
            var TO = new google.maps.Marker({
                position: pos,
                map: map,
                label: "TO"
            });*/
            /*  
            pos = { 
              lat: 38.7332155,
              lng: -9.115717
            };
            var here = new google.maps.Marker({
              position: pos,
              map: map,
              icon: "child.png"
            });*/
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
                        /*var summaryPanel = document.getElementById("directions_panel");
                        summaryPanel.innerHTML = "";*/
                        // For each route, display summary information.
                        var path = response.routes[0].overview_path;
                        var legs = response.routes[0].legs;
                        var i;
                        for (i = 0; i < legs.length; i++) {
                            // if (i == 0) {
                            //     startLocation.latlng = legs[i].start_location;
                            //     startLocation.address = legs[i].start_address;
                            //     var marker = createRouteLabel(legs[i].start_location, label);
                            // }
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
                        // getElevationOfRoute(response.routes[0]);
                        polyline.setMap(map);
/*
                        var url= "https://maps.googleapis.com/maps/api/elevation/json?locations=39.7391536,-104.9847034&key=AIzaSyC72pxAM7UIbMBDOglpuw1Z86XB9INgiuo";
                        jQuery.getJSON(url, function(r) {
                            console.log(r);
                        })*/
                        // from coords to address
                        var geo = new google.maps.Geocoder;
                        geo.geocode({latLng: start}, function(results, status) {
                                if (status === 'OK') {
                                    //console.log( results)
                                }
                                });
                                
                        /*
                        var lineSymbol = {
                            path: google.maps.SymbolPath.BACKWARD_OPEN_ARROW,
                            strokeOpacity: 1,
                            scale: 2,
                            strokeColor: "black"
                        };*/
                        directionDisplay = new google.maps.DirectionsRenderer({
                        polylineOptions: {
                            clickable: true,
                            strokeColor: color,
                            strokeWeight: 10,
                            strokeOpacity: 0.5
                            //strokeOpacity: 0,
                            /*icons: [{
                                icon: lineSymbol, //dotted line
                                offset: "0",
                                repeat: '25px'
                            }],*/
                        },suppressMarkers: true
                        });/*
                        markerOptions: {
                          //icon: ""
                          shape: [{coords:[start, 2],type: "circle"}] //two black circles!
                        }
                    });*/
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
                var contentString = '<b>' + label + '</b><br>' + html;
                /*var marker = new google.maps.Marker({
                    position: latlng,
                    map: map,
                    title: label,
                    zIndex: Math.round(latlng.lat() * -100000) << 5
                });
                marker.myname = label;*/
                //google.maps.event.addListener(marker, 'click', function() {
                    infowindow.setContent("<text style='font-size:20px; color: indigo'>" + label + "</text>");
                    infowindow.setPosition(latlng)
                    infowindow.open(map);
                //});
                return infowindow;
            }
            
            function putMarkerOnRoute(percentage, label) {
                var distance = (percentage / 100) * totalDist;
                var time = ((percentage / 100) * totalTime / 60).toFixed(2);
                /*if (!marker) {
                    var marker = createRouteLabel(polyline.GetPointAtDistance(distance), "time: " + time, "marker");
                } else {*/
                    createRouteLabel(polyline.GetPointAtDistance(distance), label);
                    //marker.setTitle("time:" + time);
                // }*/
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
                // document.getElementById("total").innerHTML = "total distance is: " + totalDist + " km<br>total time is: " + (totalTime / 60).toFixed(2) + " minutes";
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
            document.getElementById("start").onclick = function() {
                //delete all routes before
                //delete all info windows
                //console.log(directionDisplay);
                //directionDisplay.set('directions', null);
                //directionDisplay.setMap(null);
                if (directionDisplay != null) {
                directionDisplay.setMap(null);
                directionDisplay = null;
                }
                var pos2;
                if( marker2 == null) {
                    pos2 = here.getPosition();
                } else {
                    pos2 = marker2.getPosition();
                }
                calcRoute(marker1.getPosition(), pos2, "DRIVING", "clever", "blue", 33);
                calcRoute(marker1.getPosition(), pos2, "WALKING", "sporty", "black", 66);
            }
            function getElevationOfRoute(route) {
                //console.log(route)
            }
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
            // current location
            // ------------------------------------------- 
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                        var pos = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        };
                         here = new google.maps.Marker({
                           position: pos,
                           map: map,
                           icon: "child.png",
                           opacity: 1//0.7
                         });
                         var infowindow = new google.maps.InfoWindow();
                         here.addListener('click', function(event) {
                            //displayLocationElevation(pos, elevator, infowindow);
                            //infowindow.setContent("<h4>My location</h4>" + "<br> altitude: " + altitude + "m" )
                           infowindow.open( map, here);
                         })
                         map.panTo(pos); 
                    },
                    function() {
                        handleLocationError(true, infoWindow, map.getCenter());
                    });
            } else {
                // Browser doesn't support Geolocation
                handleLocationError(false, infoWindow, map.getCenter());
            }
            var handleLocationError = function(browserHasGeolocation, infoWindow, pos) {
                infoWindow.setPosition(pos);
                infoWindow.setContent(browserHasGeolocation ?
                    'Error: The Geolocation service failed.' :
                    'Error: Your browser doesn\'t support geolocation.');
                infoWindow.open(map);
            };
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
