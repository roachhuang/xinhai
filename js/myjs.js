
// var marker = "";	// also global var
// Taipower MRT Ext 2
function initialize() {
	var map = {}; 
	//var myLatLng = new google.maps.LatLng(-34.397, 150.644);
	var myLatLng = new google.maps.LatLng(25.029203,121.549028);
	var mapOptions = {
		zoom: 18,
		center: myLatLng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	// var myMarker='farm.png';
	marker = new google.maps.Marker({
		position: myLatLng,		
		title: 'here',	
		// icon: myMarker,
		map: map
	});
		
	//map.bindTo(marker);
	//console.log(marker.getMap());
	//map.addOverlay(marker);
	google.maps.event.addDomListener(window, "resize", function() {
			//var center = map.getCenter();
			//google.maps.event.trigger(map, "resize");
			map.setCenter(myLatLng);
	});			
}; 

function processFromData(){
	var msg = document.GetElementById('#msg').value;
	var id = "+886987656201";
	//window.location="whatsapp://send?abid=id&text=msg" );
};


