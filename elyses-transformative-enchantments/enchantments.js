// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
  let result = []
  function double(number) {
    result.push(number * 2)
  }
  deck.forEach(double);
  return result;
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
  //return deck.map(number => number === 3 ? [3, 3, 3] : number).flat();
  //return deck.flatMap(n => n === 3 ? [3, 3, 3] : n);
  let result = []
  function isthree(card) {
    switch (card) {
      case 3:
        result.push(3, 3, 3);
        break;
      default:
        result.push(card);
    }
  }
  deck.forEach(isthree);
  return result;
}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
  return deck.slice(deck.length / 2 - 1, deck.length / 2 + 1);
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
  let lastcard = deck.pop();
  let firstcard = deck.shift();
  deck.splice((deck.length / 2), 0, lastcard, firstcard);
  return deck;
}

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
  return deck.filter(card => card == 2);
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {

  deck.sort((card1, card2) => card1 - card2);
  return deck;
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
  deck.reverse();
  return deck;
}
