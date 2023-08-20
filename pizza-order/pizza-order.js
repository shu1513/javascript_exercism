/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the prize of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */

const priceMap = {
  "Margherita": 7,
  "Caprese": 9,
  "Formaggio": 10,
  "ExtraSauce": 1,
  "ExtraToppings": 2,
}
export function pizzaPrice(pizza, ...extras) {

  if (extras.length === 0) {
    return priceMap[pizza] || 0;
  }
  else {

    return priceMap[extras[0]] + pizzaPrice(pizza, ...extras.slice(1));
  }

}
/* switch (pizza) {
     case "Margherita":
     result += 7;
     break;
   case "Caprese":
     result += 9;
     break;
   case "Formaggio":
     result += 10;
     break;    case "Margherita":
     result += 7;
     break;
   }
 for (const extra of extras) {
   switch (extra) {
     case 'ExtraSauce':
       result += 1;
       break;
     case 'ExtraToppings':
       result += 2;
       break;
   }
 }
 return result;
*/




/**
 * Calculate the prize of the total order, given individual orders
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  return pizzaOrders.reduce((sum, current) => sum + pizzaPrice(current.pizza, ...current.extras), 0);
}
  /* function reducepizza(sum, current) {
return sum + pizzaPrice(current.pizza, ...current.extras);
}
return pizzaOrders.reduce(reducepizza, 0);
}
/*  let sum = 0;
for (const pizza of pizzaOrders) {
sum += pizzaPrice(pizza.pizza, ...pizza.extras);
};
return sum;
 
}
*/
