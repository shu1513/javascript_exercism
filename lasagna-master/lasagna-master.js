/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(actualMinutesInOven) {

    switch (actualMinutesInOven) {
        case undefined:
            return "You forgot to set the timer.";
        case 0:
            return 'Lasagna is done.';
        default:
            return 'Not done, please wait.';
    };
}

export function preparationTime(layers, minutes = 2) {
    return layers.length * minutes;
}

export function quantities(layers) {
    let noodles = 0;
    let sauce = 0;
    for (let layer of layers) {
        if (layer === "noodles") {
            noodles += 50;
        }
        if (layer === "sauce") {
            sauce += 0.2;
        }
    }
    return { 'noodles': noodles, 'sauce': sauce };
}

export function addSecretIngredient(friendsList, myList) {
    myList.push(friendsList[friendsList.length - 1]);
}

export const recipe = {
    noodles: 200,
    sauce: 0.5,
    mozzarella: 1,
    meat: 100,
};





export function scaleRecipe(recipe, portions) {
    let myrecipe = {};
    for (let ingredient in recipe) {
        myrecipe[ingredient] = recipe[ingredient] / 2 * portions;
    }
    return myrecipe;
}
