// Advent of Code 2022 - Day 01
// Open your input and run in the browser console

let input = window.document.getElementsByTagName("pre")[0];
input = input.innerText.split('\n\n');

for (let i=0; i<input.length; i++) {
	input[i] = input[i].split('\n').map(Number).reduce( (x,y) => x+y, 0);
}
console.log("Part One Answer: "+Math.max(...input));

input.sort().reverse();
console.log("Part Two Answer: "+(input[0]+input[1]+input[2]));
