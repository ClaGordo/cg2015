function Door(state){
	this.state = state || 'closed';
}

Door.prototype.open = function() {
	this.state = 'open';
};

Door.prototype.close = function() {
this.state = 'close';
};

function SecurityDoor(state){
	Door.call(this, state);
}

SecurityDoor.prototype = Object.create(Door.prototype);
SecurityDoor.prototype.constructor = SecurityDoor;

SecurityDoor.prototype.lock = function() {
	if (this.state === 'closed')
		this.state = 'locked';
}

SecurityDoor.prototype.unlock = functio() {
	if (this.state === 'locked')
		this.state = 'closed';
}


/* override per i metodi open e close derivati da door*/
SecurityDoor.prototype.open = function() {
	if (this.state!=='locked')
		this.state = 'open';
}

SecurityDoor.prototype.close = function() {
	if (this.state!=='locked')
		this.state = 'close';
}

