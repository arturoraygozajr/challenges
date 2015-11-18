function Count(string){
	this.words = string.split(' ').length;
	this.chars = string.length;
	this.avgLength = string.avgLength;
	 var wordArray = [string.split(" ")];
  var wordAvg = 0;
  for (var i = 0; i < string.wordCount.length; i++){
    wordAvg += wordArray[i];
  }
  var avgLen = wordAvg / wordCount;
	this.spaces = string.match(/ /g).length;
};
var superCounter = new Count("count me in")
console.log (superCounter);

//{"words": 3, "chars": 11, "avgLength": 3, "spaces": 2}