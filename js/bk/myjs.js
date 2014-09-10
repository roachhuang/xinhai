var map = ""; // global var
// var marker = "";	// also global var
// Taipower MRT Ext 2


function initialize() {
var frm = {lat:25.020192, lng:121.529104, title: 'Get off at here!', msg:'<h2>Taipower MRT Ext2</h2><p>300m away from my apartment, it is just a 5m walk from here.</p>' };
// xinhai rd
var to = {lat:25.021402, lng:121.531651, title: 'My apartment', msg: '<p>2F, No. 90, Sec. 1, Xin-hai Rd.</p><h2>There is a coin laundry store next to it.</h1>'};
var xinhai = new google.maps.LatLng(to.lat, to.lng);
var opt =
{ 
center:xinhai,
zoom:17,
//mapTypeId: google.maps.MapTypeId.TERRAIN,
mapTypeId: google.maps.MapTypeId.ROADMAP,
};
map = new google.maps.Map(document.getElementById("googlemap"),opt);
// google.maps.event.addDomListener(window, 'load', initialize);
}

function addMarker(loc) {
	var marker= new google.maps.Marker({
	position: new google.maps.LatLng(loc.lat,loc.lng),
	title: loc.title
	});
	marker.setMap(map);
	var infowindow = new google.maps.InfoWindow({
      content: loc.msg
    });
	google.maps.event.addListener(marker, 'mouseover', function(){
		infowindow.open(map, marker);
	});
	google.maps.event.addListener(marker, 'mouseout', function(){
		infowindow.close(map, marker);
	});
}	

function addInfoWindow() {
	var infiwindow = new google.maps.InfoWindow({
	position: new google.maps.LatLng(frm.lat,frm.lng),
	content: "<h4>Taipower MRT Ext 2</h4>",	
	});	

	google.maps.event.addListener(marker,'mouseover',function(){
	infiwindow.open(map,marker);
	});
	google.maps.event.addListener(marker,'mouseout',function(){
	infowindow.close(map,marker);
	});
}


function addpoly() {
	var polyLineCoordinates = [
		new google.maps.LatLng(25.021402,121.531651),
		new google.maps.LatLng(25.019606,121.529398),
		new google.maps.LatLng(25.019961,121.529007),				
		new google.maps.LatLng(25.020192, 121.529104)
		];
		
	var poly = new google.maps.Polyline({
		path: polyLineCoordinates,
		strokeColor: "#FF0000",
		strokeOpacity: 1.0,
		strokeWeight: 2
	});	
	
	poly.setMap(map);
}	


function test(event)
{

alert( event.latLng.lat());
alert(event.latLng.lng());

}