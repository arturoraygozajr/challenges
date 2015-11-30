/*var swapCase = function(hello) {
	console.log(hello.toLowerCase()); 
}

swapCase("Jammy")*/

//var Art =  " happye funfafhl FAEFFEFAWE";
//console.log(Art);
//console.log(Art.toLowerCase());
//console.log(Art)


//   'case' case

//var checkout = "babhlkajefhlkejhaf";
//variable = is something you can change to anything you want
//string is ALWAYS the same thing always 
// "f;ahflkejhf"

var swapCase = function(string) {
	var newstring = new String
	
	for (var i = 0; i < string.length; i++) {
		if (string[i] >= "A"  && string[i] <= "Z") {
			(newstring = newstring + string[i].toLowerCase());
		} else if (string[i] >= "a"){ 
			(newstring = newstring + string[i].toUpperCase());
		} else {
			newstring = newstring + string[i];
		}

	}
	console.log(newstring)
}
swapCase ("Life is 10% what happens to you, and 90% of how you REACT to it");