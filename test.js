var myName = "dan";
var myStr = "My name is " + myName + " and I am well!";
console.log(myStr)

var firstLetterOfFirstName = "";
var firstName = "Dan";
firstLetterOfFirstName = firstName[0];

console.log(firstLetterOfFirstName);

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result ="The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;
  return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));
var myArray = ["Dan", 31]
console.log(myArray);

var myList = [["cereal", 3], ["milk", 2], ["bananas", 1], ["eggs", 12]];

console.log(myList);

function reusableFunction() {
  console.log("whats crackin my peeps");
}
reusableFunction();


