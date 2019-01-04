function curryN(fn, n) {
	n = n || fn.length
	return function cN(arguments) {
		if ( n <= 1 ) return fn(arguments)
		return curryN(fn.bind(this, arguments), n-1)
	}
}

    
module.exports = curryN
