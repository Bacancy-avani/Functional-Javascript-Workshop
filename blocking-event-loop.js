function repeat(operation, num) {
    // modify this so it can be interrupted
    if (num <= 0) return
    operation()
    if(setTimeout(function() {repeat(operation, --num)})) return
    else return repeat(operation, --num);
}
    
module.exports = repeat
