var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});
console.log('Enter a positive integer less than a billion and hit enter. Empty input exits the program.');
rl.setPrompt('> ', 2);
rl.prompt();

rl.on('line', function (line) {
	if(line.trim() === ""){
		rl.close;
		console.log('Bye');
  		process.exit(0);
		return;
	} 

	var input = +line;
	
	if (isNaN(input) || input < 1 || input > oneBillion || line % 1 !== 0){
		console.log('Must be a positive integer less than a billion');
 	} else {
		console.log(toText(input));	
	}
	rl.prompt();
});

var ones = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];	
var tens = ['','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];	
var oneMillion = 1000000;
var oneBillion = 1000000000;

var toText = function(input){	
	if (input < 19){
		return ones[input];	
	} else if (input < 100) {
		var amountOfTens = Math.floor(input/10);
		input = input - amountOfTens * 10;
		var tensText = tens[amountOfTens];
		var restOfText = toText(input);
		if(restOfText.length > 0){
			restOfText = ' ' + restOfText;
		}
		return tensText + restOfText;
	} else if (input < 1000) {
		var amountOfHundreds = Math.floor(input/100);
		input = input - amountOfHundreds * 100;
		var hundredsText = ones[amountOfHundreds] + ' hundred';
		var restOfText = toText(input);
		if(restOfText.length > 0){
			restOfText = ' and ' + restOfText;
		}
		return hundredsText + restOfText;
	} else if (input < oneMillion) {
		var amountOfThousands = Math.floor(input/1000);
		input = input - amountOfThousands * 1000;
		return toText(amountOfThousands) + ' thousand ' + toText(input);
	} else if (input < oneBillion) {
		var amountOfMillions = Math.floor(input/oneMillion);
		input = input - amountOfMillions * oneMillion;
		return toText(amountOfMillions) + ' million ' + toText(input);
	}
}