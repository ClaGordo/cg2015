var es13 = function(){
	var n1 = Math.floor(Math.random() * 100)+1;
	var n2 = Math.floor(Math.random() * 100)+1;
	if (n1>n2){
		for (var i=0; i<n2; i++){
			if (i % n2 === 0 && i % n1 === 0)
				console.log(i);
		}else{
			for (var i=2; i<n1; i++){
			if (i % n2 === 0 && i % n1 === 0)
				console.log(i);
		}
	}
}