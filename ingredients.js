const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let w = 0;
while (w<ingredients.length) {
  console.log(ingredients[w]);
  w++;
}
// Write a for loop that prints out the contents of ingredients:
for (f = 0; f<ingredients.length; f++) {
  console.log(ingredients[f]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
let reversy = [];
reversy = ingredients.reverse();
let b = 0;
while (b<reversy.length) {
  console.log(reversy[b]);
  b++;
}
