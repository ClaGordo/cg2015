var n = Math.floor(Math.random() * 100)+1);
if (n<40){
		for (var j=40; j>0; j--){
			console.log(j);
		}
	}else{
	for (var i = 40; i<n; i++){
	
		if (i % 2 !== 0){
			console.log(i);
		}
	}
}