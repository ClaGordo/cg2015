var es10 = function(){
var n = Math.floor(Math.random() * 9999)+1000);
var result = n.toString();
for (var i =0; i<result.length; i++){
	var sum += result.charAt(i);
}
return sum;
}

var es11 = function(sum){
	var result = sum.toString();
	for (var i =0; i<result.length; i++){
		sum += result.charAt(i);
	}
	return sum;
}