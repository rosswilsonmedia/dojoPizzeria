function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var p3 = pizzaOven("thin", "marinara", ["mozzarella"], ["mushrooms", "pepperoni", "bacon", "sausage"]);
var p4 = pizzaOven("hand tossed", "traditional", ["cheddar"], ["pineapple"]);
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);

function randomPizza() {
    var crustType=["deep dish", "hand tossed", "thin", "stuffed", "pretzel", "pan"];
    var sauceType=["marinara", "traditional", "parmesan", "buffalo", "barbecue"];
    var cheeses=["mozzarella", "feta", "cheddar", "parmesan", "asiago", "provolone"];
    var toppings=["pepperoni", "bacon", "sausage", "mushrooms", "pineapple", "bell peppers", "onions", "olives"];
    crustType=crustType[Math.floor(Math.random()*crustType.length)];
    sauceType=sauceType[Math.floor(Math.random()*sauceType.length)];
    var cheeseNum = Math.ceil(Math.random()*3);
    var cheeseSelections=[];
    var i=0;
    while(i<cheeseNum){
        var cheeseSelect=Math.floor(Math.random()*cheeses.length);
        if(!cheeseSelections.includes(cheeses[cheeseSelect])){
            cheeseSelections.push(cheeses[cheeseSelect]);
            i++;
        }
    }
    i=0;
    var toppingNum = Math.ceil(Math.random()*5);
    var toppingSelections=[];
    while(i<toppingNum){
        var toppingSelect=Math.floor(Math.random()*cheeses.length);
        if(!toppingSelections.includes(toppings[toppingSelect])){
            toppingSelections.push(toppings[toppingSelect]);
            i++;
        }
    }
    return pizzaOven(crustType, sauceType, cheeseSelections, toppingSelections);
}
console.log(randomPizza());