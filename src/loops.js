/**
 * University of La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Computer Ingenieering Degree
 * Programación de Aplicaciones Interactivas
 *
 * @author Marta Julia González Padrón
 * @since 10.feb.2021
 * @description Investigation of multiple loops for arrays in Javascript on Node
 */

'use strict';

/**
 * Module that contains the needed functionality
 */
const { performance } = require('perf_hooks');

comparisonOfLoops();

/**
 * Function that execute four different loops for arrays that are 
 * available in Javascript and compare their execution's time
 */
function comparisonOfLoops() {
  let array = new Array(1000000);
  console.log(`Execution time of the different loops with an array of ${array.length} elements:
              For loop: ${forLoop(array)} ms
              For-in loop: ${forInLoop(array)} ms
              For-of loop: ${forOfLoop(array)} ms
              For-Each loop: ${forEachLoop(array)} ms`);
};

/**
 * Function that iterates through a given array using a
 * classic For loop and calculates its execution time;
 * 
 * @param {Array} array 
 * @returns {Number} execution time 
 */
function forLoop(array) {
  const startingTime = performance.now();
  for (let element = 0; element < array.length; element++) {
    array[element] = element + 1;
  }
  const finishingingTime = performance.now();
  return (finishingingTime - startingTime);
}

/**
 * Function that iterates through a given array using a
 * For-In loop and calculates its execution time;
 * 
 * @param {Array} array 
 * @returns {Number} execution time 
 */
function forInLoop(array) {
  const startingTime = performance.now();
  for (let element in array) {
    array[element] = 1;
  }
  const finishingingTime = performance.now();
  return (finishingingTime - startingTime);
};

/**
 * Function that iterates through a given array using a
 * For-Of loop and calculates its execution time;
 * 
 * @param {Array} array 
 * @returns {Number} execution time 
 */
function forOfLoop(array) {
  const startingTime = performance.now();
  for (let element of array) {
    element = 1;
  }
  const finishingingTime = performance.now();
  return (finishingingTime - startingTime);
};

/**
 * Function that iterates through a given array using a
 * For-Each loop and calculates its execution time;
 * 
 * @param {Array} array 
 * @returns {Number} execution time 
 */
function forEachLoop(array) {
  const startingTime = performance.now();
  array.forEach(element => element = 1);
  const finishingingTime = performance.now();
  return (finishingingTime - startingTime);
};