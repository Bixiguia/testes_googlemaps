/**
 * @author: Cauê Thenório / Rafael Cantoni Augusto
 */

function initMap() {
    var mapCenter = new google.maps.LatLng(-23.55600, -46.63769);
    var mapType = google.maps.MapTypeId.ROADMAP;
    var mapZoom = 16;

    return new google.maps.Map(document.getElementById("map_canvas"), {
        zoom: mapZoom,
        center: mapCenter,
        mapTypeId: mapType
    });
}

var map = initMap();

var markers = [
    [-23.55208, -46.64226],
    [-23.55218, -46.64236],
    [-23.55228, -46.64246],
    [-23.55238, -46.64256],
    [-23.55248, -46.64266],
    [-23.55258, -46.64276],
    [-23.55268, -46.64286]
];

function addMarkers(markers) {
    var marker;
    for (var i=0; i<markers.length; i++) {

        marker = new google.maps.Marker({
            position: new google.maps.LatLng(markers[i][0], markers[i][1]),
            map: map,
            title: "Marcardor " + i,
            draggable:true
        });

        (function(marker, i){
            google.maps.event.addListener(marker, 'dragend', function(){
                infowindow = new google.maps.InfoWindow({
                    content: '<b>Marcardor ' + i + '</b>\n\
                    <br>Minha nova posição é ' + marker.position.lat() + ', '
                        + marker.position.lng(),
                    size: new google.maps.Size(50,50),
                    position: marker.position

                });
                infowindow.open(map);
            });
        })(marker, i);

    }
}

addMarkers(markers);

