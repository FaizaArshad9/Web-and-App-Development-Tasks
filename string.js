 const accountId = 1234
 console.log(accountId)


 const score = Number(400)
 console.log(score)
 
 let balance = new Number(155)
 console.log(balance)
  
 console.log(balance.toString())

 console.log(balance.toFixed(2))

 const cost = 22.889
 console.log(cost.toPrecision(3))

 const amount = 1000000
 console.log(amount.toLocaleString('en-PK'))

 const value = "99.99"
 console.log(parseInt(value));

 const weight = "55.5kg"
console.log(parseFloat(weight));

const price = "22rupees"
console.log(Number.parseFloat(price))

const prices = "22.24"
console.log(Number.parseFloat(prices))

console.log(isNaN("hello"))
console.log(isNaN("123"))
console.log(isFinite(123.33))

const expense= 555.56
const numberprice = expense.toPrecision(4 )
console.log(numberprice)

const text = "Hello World";
const result = text.toUpperCase();
console.log(result);

const country = "PAKISTAN";
const lowerCountry = country.toLowerCase();
console.log(lowerCountry);

const name = "   Muhammad Arshad   "
const trimmedName = name.trim();
console.log(trimmedName);

const language = "JavaScript";
const shortName = language.slice(0, 4);
console.log(shortName);

const subject = "Programming";
const partName = subject.substring(3, 8);
console.log(partName)

const sentence = "I love cats.";
const newSentence = sentence.replace("cats", "dogs");
console.log(newSentence);

const email = "faiza@gmail.com";
const hasGmail = email.includes("gmail");
console.log(hasGmail);

const movie = "Spider Man";
const position = movie.indexOf("M");
console.log(position);

const colors = "Red,Green,Blue";
const colorArray = colors.split(",");
console.log(colorArray);

const firstWord = "Good";
const secondWord = "Morning";
const greeting = firstWord.concat(" ", secondWord);
console.log(greeting);