
function reduce(arr, fn, initial) {
	
      function countWords(arr) {
       return  arr.reduce(function(count, word) {
         count[word] = ++count[word] || 1 // increment or initialize to 1
         return count
       }, {}) // second argument to reduce initialises countMap to {}
     }
     return countWords(arr);
    }
module.exports = reduce


    