(function(){
	var app = angular.module('store', []);

	app.controller("ApartController", function($scope){
		$scope.doom = wow;	
	});
	app.controller('StoreController', function(){
		this.products = wow;
	});
	var wow = {firstname:'mark', lastname: 'huang'};
	/*
var gems = [
	{
		name: 'Dope Diamond',
		price: 82.95,
		description: "Lorizzle ipsizzle dolor sit dang, we gonna chung that's the shizzle shut the shizzle up. Nullam tellivizzle bling bling, aliquet volutpizzle, suscipit break it down, gravida.",
		specification: "Phasellizzle fo shizzle my nizzle crunk. Curabitur non velizzle the bizzle pede crackalackin facilisizzle. Bow wow wow rizzle nulla, iaculizzle fo shizzle, break.",
		review: "Maecenas quis metus izzle fo shizzle my nizzle yo gangsta. Break yo neck, yall dope viverra fo. Curabitizzle sollicitudin boom shackalack quizzle purus.",
		canPurchase: true,
		soldOut: false,
		images: [
			{
				full: 'img/diamond.png',
				thumb: 'img/diamond-thumb.png'
			}
		],
		reviews: [
			{
				stars: 5,
				body: "I love this gem",
				author: "joe@thomas.com"
			},
			{
				stars: 3,
				body: "I bought this for my wife",
				author: "hubby@loveydovey.com"
			}
		]
	}
	];



var apart =  [
     {
      name: 'Living Room',   
      description: 'Very Aqua-ish',
      images: [
         {
          full: '../images/large/livingroom.jpg'
         }
        ]
      },
	{
      name: "hallway",     
      description: "It's like orange, but better",   
      images: [
        {
          full: '../images/large/hallway.jpg'
        }
      ]
    },
	{
	  name: "Room1",     
	  description: "It's like orange, but better",
	  images: [
		{
		  full: '../images/large/room1.jpg'
		}
	  ]
	},
	{
		  name: "Room2",     
		  description: "It's like orange, but better",		 
		  images: [
			{
			  full: '../images/large/room2.jpg'
			}
		  ]
	},
	{
		  name: "Dinning Room",     
		  description: "It's like orange, but better",		
		  images: [
			{
			  full: '../images/large/dinningroom.jpg'
			}
		  ]
	},
	{
		  name: "Kitchen",     
		  description: "It's like orange, but better",		 
		  images: [
			{
			  full: '../images/large/kitchen.jpg'
			}
		  ]
	}	
  ]; 

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '../home.html',
        controller: 'PhoneListCtrl'
      }).
      when('/Photos', {
        templateUrl: '../photos.html',
        controller: 'galleryCtrl'
      }).
	 when('/Video', {
        templateUrl: '../video.html',
        controller: 'videoCtrl'
      }).  
	 when('/Map', {
        templateUrl: '../map.html',
        controller: 'mapCtrl'
      }).  
	 when('/Agreement', {
        templateUrl: '../agreement.html',
        controller: 'agreementCtrl'
      }).
	 when('/Contact', {
        templateUrl: '../contact.html',
        controller: 'contactCtrl'
      }).  
      otherwise({
        redirectTo: '../home'
      });
  }]); 
 */ 
 
})();