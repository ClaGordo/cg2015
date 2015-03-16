var es05 = function(){
	var max = Math.floor(Math.random() * 100)+1);
	for (var i=0; i<2; i++){
		var n = Math.floor(Math.random() * 100)+1);
		if (n>max){
			max = n;
		}
	}
	console.log(max);
}