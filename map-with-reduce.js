module.exports = function arrayMap(arr, fn) {
	return arr.reduce(function(acc, cur, currIdx) {
		acc[currIdx] = fn.call(arr, cur)
		return acc;
	},[])

}
