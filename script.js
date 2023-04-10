//1
for (i = 1; i <= 7; i++) {
  console.log(i);
}

let b = `=`.repeat(25);
console.log(b);

//2
for (i = 5; i <= 25; i += 4) {
  console.log(i);
}

console.log(b);
//3a
const wizards = [`Harry Potter`, `Hermione Granger`, `Ron Weasley`];

//3b
for (wiz of wizards) {
  console.log(wiz);
}

console.log(b);
//4a
let harryPotterMovies = 0;

//4b
while (harryPotterMovies < 8) {
  harryPotterMovies++;
}

//4c
console.log(harryPotterMovies);

console.log(b);
// BONUS
//5A
const hogWartsHouses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

//5b
for (houses of hogWartsHouses) {
  for (char of houses) {
    console.log(char);
  }
}

//6a
const quote = ["Yer", "A", "Wizard", "Harry"];

//6b

//option1
function addSpace(space) {
  return space.join(` `);
}
console.log(addSpace(quote));

//option2
console.log(quote.join(` `));

//option3
let text = ``;
for (i = 0; i < quote.length; i++) {
  text += quote[i] + ` `;
}
console.log(text);

//option4
let text2 = ``;
for (words of quote) {
  text2 += words + ` `;
}
console.log(text2);

//7

for (i = 1; i <= 25; i++) {
  let three = i / 3;
  let five = i / 5;
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(`Expecto Patronum`);
  } else if (i % 3 == 0) {
    console.log(`Expecto`);
  } else if (i % 5 == 0) {
    console.log(`Patronum`);
  } else {
    console.log(i);
  }
}
