(function(){
	
	var app = angular.module('myapp', []);

	app.controller('ApartController', function(){
		this.products= gems;
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
	
	},
	{
		name: 'Rare Ruby',
		price: 95.95,
		description: "Maecenas quis metus izzle fo shizzle my nizzle yo gangsta. Break yo neck, yall dope viverra fo. Curabitizzle sollicitudin boom shackalack quizzle purus.",
		specification: "Lorizzle ipsizzle dolor sit dang, we gonna chung that's the shizzle shut the shizzle up. Nullam tellivizzle bling bling, aliquet volutpizzle, suscipit break it down, gravida.",
		review: "Phasellizzle fo shizzle my nizzle crunk. Curabitur non velizzle the bizzle pede crackalackin facilisizzle. Bow wow wow rizzle nulla, iaculizzle fo shizzle, break.",
		canPurchase: true,
		soldOut: false,
		images: [
			{
				full: 'img/ruby.png',
				thumb: 'img/ruby-thumb.png'
			}
		],
		
	},
	
	];

})();