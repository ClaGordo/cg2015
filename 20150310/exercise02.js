var es02a = function(n) {
	var result = [];
	while (--n){
		var random = Math.random();
		result.unshift(random);
	}
	return result
};


var odd = function(item){
	return item % 2 !== 0;

}

var compare = function (value1,value2){
	return value1 - value2;
}

