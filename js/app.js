(function(){	
	var app = angular.module('myapp', ['ngRoute']);

	app.controller('ApartController', function(){
		this.products= gems;
		this.slidePix = function(img){
			img.slidetoggle();
		};
	});
	
	app.controller('PanelController', function(){
		this.tab = 1;
		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});
	app.directive('Menu', function(){
		return {
			restrict: 'E',
			templateUrl: 'menu.html'
		};
	});
	app.controller('mapController', function($scope){
	});
	app.controller('homeController', function($scope){
	});
	app.config(function($routeProvider){		
		$routeProvider.
		when("/",
			{			
				controller: 'homeController',
				templateUrl: "./photos.html"
			})
		.when("/photos",
			{			
				controller: 'homeController',
				templateUrl: "/photos.html"
			})	
		.when("/map", 
			{
				controller: "mapController",
				templateUrl: "/map.html"
			})
			.otherwise({redirectTo: '/'});			
	});
	
	var gems = [
	{
		name: 'Living Room',		
		description: "Lorizzle ipsizzle dolor sit dang, we gonna chung that's the shizzle shut the shizzle up. Nullam tellivizzle bling bling, aliquet volutpizzle, suscipit break it down, gravida.",
		
		images: [
			{
				full: './images/large/livingroom.jpg',
				thumb: './images/small/livingroom.png'
			}
		],
	
	},
	{
		name: 'Dinning Room',		
		description: "Maecenas quis metus izzle fo shizzle my nizzle yo gangsta. Break yo neck, yall dope viverra fo. Curabitizzle sollicitudin boom shackalack quizzle purus.",		
		images: [
			{
				full: './images/large/dinningroom.jpg',
				thumb: './images/small/dinningroom.jpg'
			}
		],
		
	},
	
	];

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
})();