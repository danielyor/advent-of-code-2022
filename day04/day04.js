// Advent of Code 2022 - Day 04
// Open your puzzle input and run in the browser console

let input = window.document.getElementsByTagName("pre")[0];
input = input.innerText.split('\n');

let pair = [];
let firstStart = 9999;
let firstEnd = -1;
let secondStart = 9999;
let secondEnd = -1;
let totalPairsOne = 0;
let totalPairsTwo = 0;

// BUG: Currently the puzzle input has an empty line at the end of the input, which can mess up the code.
//      If this gets fixed in the future, you can try commenting out the next line.
input.pop();

for (let i=0; i<input.length; i++) {
    // split the elf pair
    pair = input[i].split(',');
    // split each elfs start and end sector. Important to store as a number for the comparison!
    firstStart = Number(pair[0].split('-')[0]);
    firstEnd = Number(pair[0].split('-')[1]);
    secondStart = Number(pair[1].split('-')[0]);
    secondEnd = Number(pair[1].split('-')[1]);
    
    if ( (firstStart<=secondStart && firstEnd>=secondEnd) || (firstStart>=secondStart && firstEnd<=secondEnd) ) {
        totalPairsOne++;
    }
    if ( (firstStart<=secondStart && firstEnd>=secondEnd)
        || (firstStart>=secondStart && firstEnd<=secondEnd)
        || (firstStart<=secondEnd && secondStart<=firstEnd) ) {
        totalPairsTwo++;
    }
}

console.log("Part One Answer: "+totalPairsOne);
console.log("Part Two Answer: "+totalPairsTwo);
