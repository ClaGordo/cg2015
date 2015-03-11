var es03a = function(stringa){
	var s = stringa.charAt(0).toUpperCase();
	return s + stringa.slice(1,stringa.length);
};

var es03b = function (stringa){
	var s = stringa.split(" ");
	var mapResult = s.map(es03a);
	var finale = mapResult.join(" ");
	return finale;
}