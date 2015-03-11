var s = "";
for (i=1; i<=10; i++){
	s = "";
	for (j=1; j<=10; j++){
		if (i===j){
			s += 1 + "," + " ";
		}
		else if (i!==j){
			s += 0 + "," + " ";
		}
	}
	console.log(s);
}