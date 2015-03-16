var data = [
  {id:'01', name:'duffy'},
  {id:'02', name:'michey'},
  {id:'03', name:'donald'},
  {id:'04', name:'goofy'},
  {id:'05', name:'minnie'},
  {id:'06', name:'scrooge'}
];
var key = 'name';
var values = ['goofy', 'scrooge'];


var select = function(data, key, values){
	var result = [];
	for (item in data){
		if (item.name === key)
		result.push(item.id, item.name);
	}
	return result;
}
