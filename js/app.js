(function(){	
	var app = angular.module('myapp', ['ngRoute', 'ngAnimate']);

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
			restrict: 'A',
			templateUrl: '/xinhai/menu.html'
		};
	});
	
	app.controller('homeController', function($scope){
	});
	// var marker = "";	// also global var
	// Taipower MRT Ext 2
	app.controller('mapCtrl', [ '$scope', '$http', function($scope, $http){
		$scope.map={};
		$scope.locations={};
		//$scope.map = GoogleMaps;
		//$scope.marker = {};	
		var that = $scope;
		// don't move into init() coz it won't work		
		$http.get('/xinhai/map.json').success(function(data){
				that.locations = data;	// in here, this is the obj of $http, not apartController
				console.log(that.locations);
		});				
		// $scope.myLatLng = new google.maps.LatLng(25.029203, 121.549028); my office
		$scope.myLatLng = new google.maps.LatLng(25.021402, 121.531651);
   		$scope.mapOptions = {
			zoom: 16,
			center: $scope.myLatLng,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		//$scope.map = new google.maps.Map(document.getElementById("map-canvas"), $scope.mapOptions);
    	$scope.init = function(){
    		// reading map.json
    		
			//var map = {}; 
			//var marker = {};
			//var myLatLng = new google.maps.LatLng(-34.397, 150.644);
			$scope.map = new google.maps.Map(document.getElementById("map-canvas"), $scope.mapOptions);
			//console.log($scope.map);
			// var myMarker='farm.png';
			/*
			$scope.marker = new google.maps.Marker(
				{
				position: $scope.myLatLng,		
				title: 'here',	
				// icon: myMarker,
				map: $scope.map
				}

			);
			*/
    	};

    	$scope.addMarker = function(loc){
    		console.log($scope.map);
    		var marker = new google.maps.Marker({
    			position: new google.maps.LatLng(loc.lat,loc.lng),
    			title: loc.title,
    			map: $scope.map
    		});    		
    		var infowindow = new google.maps.InfoWindow({ content: loc.msg });
    		google.maps.event.addListener(marker, 'mouseover', function(){
    			infowindow.open($scope.map, marker);
    		});
    		google.maps.event.addListener(marker, 'mouseout', function(){
    			infowindow.close($scope.map, marker);
    		});
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
	}]);	

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
				controller: "mapCtrl",
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
	/*
	app.animation('.expand', function() {
		return {
			enter : function(element, done) {
				element.css({ 'left': -50, 'opacity': 0});
				element.animate({
					'left': 0, 'opacity': 1
				}, done);
			},
			leave : function(element, done) {
				element.animate({ 'left': -50, 'opacity':0 }, done);
			}
		}
	});	
	*/

	app.animation('.fadeIn', function() {
		return {
			enter: function(element, done) {
		    	//run the animation here and call done when the animation is complete
		    	jQuery(element).hide().slideDown('slow', done);		    	
	        	return function(cancelled) {
		        //this (optional) function will be called when the animation
		        //completes or when the animation is cancelled (the cancelled
		        //flag will be set to true if cancelled).
				};
			},
			leave: function(element, done) {
				jQuery(element).slideUp('slow', done);
			},
			move: function(element, done) { },

		    //animation that can be triggered before the class is added
		    beforeAddClass: function(element, className, done) { },

		    //animation that can be triggered after the class is added
		    addClass: function(element, className, done) { },

		    //animation that can be triggered before the class is removed
		    beforeRemoveClass: function(element, className, done) { },

		    //animation that can be triggered after the class is removed
		    removeClass: function(element, className, done) { }
		};
	});

})();