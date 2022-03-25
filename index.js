/*What's The Longest Word You Can Write With Seven-Segment Displays?
Tom Scott - https://www.youtube.com/watch?v=zp4BMR88260*/

var fs = require("fs"); //To read files
var index = 0; //Index counter
var words = fs.readFileSync("words.txt").toString(); //Read the file of all the english words
words = words.split("\n"); //Separate the words

var BadLetters = /[acdfjkmnpqrtuvwxy\d+]/; //Letters that cannot be represented
// 7 digit diplay : /[gkmqvwxz\d+]/
// Calculator updside-down:  /[acdfjkmnpqrtuvwxy\d+]/

var longestwords = []; //Creates a new array of the Longest words
var allGoodWords = []; //All the good words
longestwords[0] = "";

console.log("Starting.....\n")

for (var w of words){
  if((w.toLowerCase()).match(BadLetters) == null){ // Regex, continues if the regular expression does NOT find any bad letters
    if(w.length == longestwords[0].length){
      longestwords.push(w); //Adds the word to the array of longest words possible
      index++;
    }else if(w.length > longestwords[0].length){
      console.log(w.length+" vs "+longestwords[0].length)
      console.log(longestwords.join('\n')+"\n");

      longestwords.length = 0; //Clears the array
      index = 0;
      longestwords.push(w); //Adds the word
      index++;
    }
    allGoodWords.push(w);
  }
}

console.log(words.length+" words have been processed. Here are the longest words possible 'on a 7 digit display' ("+longestwords[0].length+" characters) :\n> "+longestwords); // Or 'on an upside down calculator'

var rep = prompt("\nDo you want to print all "+allGoodWords.length+" good words? (Y -> yes/ N->No ) : ");


if(rep == 'y'){
  console.log("\nHere are all the good words: \n"+allGoodWords);
}