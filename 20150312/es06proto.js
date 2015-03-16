(function() {

function MusicBox() {
  if (!(this istanceof MusicBox)){
    return new MusicBox();
  }
  this.arrayAlbum = new Array();
};

function Album(artist, title){
  if (!(this istanceof Album)){
    return new Album(artist, title);
  }
  this.count=0;
  this.artist=artist;
  this.title=title;
};

Album.prototype.play = function () {
  this.count += 1;
  console.log("Playing " + this.artist + " - " + this.name);
};

MusicBox.prototype.addAlbum = function (args){
  Array.prototype.push.apply(this.arrayAlbum, arguments);
};


MusicBox.prototype.favoriteAlbum = function() {
  var temp = this.arrayAlbum.map(function (item)) {
    return item.count;
  });
  
  var max_count = Math.max.apply(Math,temp);
  var album = this.arrayAlbum.filter(function (item){
    return item.count === max_count;
  })[0];

  return album.artist + " - " + album.name;

};

  var box = MusicBox();
  var a1 = Album("The Who", "Tommy");
  var a2 = Album("Tom Waits", "Closing Time");
  var a3 = Album("John Cale", "Paris 1919");
  var favorite;

  box.addAlbum(a1);
  box.addAlbum(a2);
  box.addAlbum(a3);

  a1.play() ; // prints "Playing The Who - Tommy"
  a2.play(); // prints "Playing Tom Waits - Closing Time"  
  a1.play(); // prints "Playing The Who - Tommy"

  favorite = box.favoriteAlbum(); 

  // prints "favorite album is The Who - Tommy"
  console.log("favorite album is " + favorite); 
}());