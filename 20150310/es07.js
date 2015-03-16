var n = Math.floor(Math.random() * 100)+1);
for (var i = 40; i<n; i++){
	if (i<40){
		console.log("nothing should be printed");

	}else{
		if (i % 2 !== 0){
			console.log(i);
		}
	}
}