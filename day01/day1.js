let input = window.document.getElementsByTagName("pre")[0];
input = input.innerText.split('\n\n');

for (let i=0; i<input.length; i++) {
	input[i] = input[i].split('\n').map(Number).reduce( (x,y) => x+y, 0);
}
console.log(Math.max(...input));

input.reverse().sort();
console.log(input[0]+input[1]+input[2]);