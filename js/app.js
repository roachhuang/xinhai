(function(){
	
	var app = angular.module('myapp', []);

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

})();