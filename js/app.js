(function(){	
	var app = angular.module('myapp', ['ngRoute']);

	app.controller('ApartController', [ '$http', function($http){
		var that = this;
		$http.get('/xinhai/rooms.json').success(function(data){
			that.products = data;	// in here, this is the obj of $http, not apartController
			console.log('http ok');
		});		
	}]);
	
	app.controller('PanelController', function(){
		this.tab = 1;
		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});
	app.directive('xinhaiNav', function(){
		return {
			restrict: 'E',
			templateUrl: '/xinhai/menu.html'
		};
	});
	
	app.controller('homeController', function($scope){
	});
	// var marker = "";	// also global var
	// Taipower MRT Ext 2
	app.controller('mapController', function($scope){
		//$scope.map = GoogleMaps;
		//$scope.marker = {};			
		$scope.myLatLng = new google.maps.LatLng(25.029203,121.549028);
   		$scope.mapOptions = {
			zoom: 18,
			center: $scope.myLatLng,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
    	$scope.init = function(){
			//var map = {}; 
			//var marker = {};
			//var myLatLng = new google.maps.LatLng(-34.397, 150.644);
			$scope.map = new google.maps.Map($("#map-canvas"), $scope.mapOptions);
			console.log($scope.map);
			// var myMarker='farm.png';
			$scope.marker = new google.maps.Marker(
				{
				position: $scope.myLatLng,		
				title: 'here',	
				// icon: myMarker,
				map: $scope.map
				}
			);
    	};    
				
			//map.bindTo(marker);
			//console.log(marker.getMap());
			//map.addOverlay(marker);
			/*
			google.maps.event.addDomListener(window, "resize", function() {
					//var center = map.getCenter();
					//google.maps.event.trigger(map, "resize");
					$scope.map.setCenter($scope.myLatLng);
			});	
			*/				
	});	

	app.config(function($routeProvider){		
		$routeProvider.
		when("/",
			{			
				controller: 'homeController',
				templateUrl: "/xinhai/home.html"
			})
		.when("/photos",
			{			
				controller: 'homeController',
				templateUrl: "./photos.html"
			})
		.when("/video",
			{			
				controller: 'homeController',
				templateUrl: "./video.html"
			})			
		.when("/map", 
			{
				controller: "mapController",
				templateUrl: "./map.html"
			})
		.when("/agreement",
			{			
				controller: 'homeController',
				templateUrl: "./agreement.html"
			})
		.when("/about",
			{			
				controller: 'homeController',
				templateUrl: "./about.html"
			})			
			.otherwise({redirectTo: '/'});			
	});

})();