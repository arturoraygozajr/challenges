function superCount(string){
	this.words = string.split(' ').length;
	this.chars = string.length;
    this.spaces =  string.match(/ /g).length;
	 this.avgLength = (this.chars - this.spaces)/this.words
}

var superCounter = new superCount("count me in")
console.log (superCounter);