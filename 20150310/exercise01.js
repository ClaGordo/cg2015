var es01a = function(n) {
	var result = [];
	while (--n){
		result.unshift(n);
	}
	return result
};


var es01b = function (item){
	return item % 2 === 0;
};

var n = 10;
es01a(n).filter(es01b);

var es01c = function (item){
	return item * 2;
};

var divisible_by_4 = function(item){
	return item % 4 === 0;
};

var sum = function (prev, curr){
	return prev + curr;
};

es01a(n).filter(es01b).map(es01c).filter(divisible_by_4).reduce(sum);




