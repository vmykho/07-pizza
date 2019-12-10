// JavaScript Document
document.getElementById("company").innerHTML = "Pizza Emporium";
document.getElementById("slogan").innerHTML = "Get a Pie!";
document.getElementById("pageName").innerHTML = "Place Order";

var pie = {
	crustType: "thin",
	toppingKind: "pepperoni",
	pizzaSize: "large",

	orderSign: function() {
		var signText = "Your " + pie.pizzaSize + " " + pie.toppingKind +" pizza on a "+ pie.crustType +" crust is in the oven.";
		document.getElementById('feedback').innerHTML = signText;
		console.log(signText);

	}
};

var shopList = {
	flour: "1 cup",
	top: "1 lb",
		shopSign: function() {
		var shopText = "You need "+ shopList.flour + " of flour and " + shopList.top + " of " + pie.toppingKind +".";
		document.getElementById('feedback').innerHTML = shopText;
		console.log(shopText);
	}
};


function thin(){
pie.crustType = "thin";
console.log(pie.crustType);
shopList.flour = "1 cup";
console.log(shopList.flour);
}

function thick(){
pie.crustType = "thick";
console.log(pie.crustType);
shopList.flour = "2 cups";
console.log(shopList.flour);
}

function pep(){
pie.toppingKind = "pepperoni";
console.log(pie.toppingKind);
}

function cheese(){
pie.toppingKind = "cheese";
console.log(pie.toppingKind);
}

function large(){
pie.pizzaSize = "large";
console.log(pie.pizzaSize);
shopList.top = "2 lb";
console.log(shopList.top);
if(pie.crustType == "thick"){
	shopList.flour = "4 cups";
	console.log(shopList.flour);
}else if(pie.crustType == "thin"){
	shopList.flour = "2 cups";
	console.log(shopList.flour);
}
}

function small(){
pie.pizzaSize = "small";
console.log(pie.pizzaSize);
shopList.top = "1 lb";
console.log(shopList.top);
}

function build(){
pie.orderSign();
}

function shop(){
shopList.shopSign();
}

