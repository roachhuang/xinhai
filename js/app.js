(function(){
var app = angular.module("xinhai", []);

app.controller =("apartCtrl", function(){
	this.doom = apart;
	this.getDoomInfo = function(){
		return this.doom;
	};	
});

app.controller("photoCtrl", function(){
    this.photos = pix; //product is a property of this controller
  });


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
  
  var apart = {
	address:'2F, 90, Sec. 1, Xinhai Rd., Taipei',
	rent: 20000,
	lat: -34.397,
	lng: 150.644,
	size: 85	,	//sq meter
	pix: [
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
  }
})();
