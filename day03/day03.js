// Advent of Code 2022 - Day 03
// Open your puzzle input and run in the browser console

let input = window.document.getElementsByTagName("pre")[0];
input = input.innerText.split('\n');

let prioritySum = 0;
let firstCompartment = '';
let secondCompartment = '';

for (let i=0; i<input.length; i++) {
    // Slice string in half for comparison
    firstCompartment = input[i].slice(0, Math.ceil(input[i].length/2));
    secondCompartment = input[i].slice(Math.ceil(input[i].length/2));
    
    for (let j=0; j<firstCompartment.length; j++) {
        if ( secondCompartment.includes(firstCompartment[j]) ) {
            // Use UTF-16 codes to get numbers from chars, add them up
            prioritySum += firstCompartment[j].charCodeAt(0) - (firstCompartment[j] === firstCompartment[j].toLowerCase() ? 96 : 38);
            break;
        }
    }
}

console.log("Part One Answer: "+prioritySum);


prioritySum = 0;
let firstMember = '';
let secondMember = '';
let thirdMember = '';

for (let i=0; i<input.length; i+=3) {
    firstMember = input[i];
    secondMember = input[i+1];
    thirdMember = input[i+2];
    
    for (let j=0; j<firstMember.length; j++) {
        if ( secondMember.includes(firstMember[j]) && thirdMember.includes(firstMember[j]) ) {
            prioritySum += firstMember[j].charCodeAt(0) - (firstMember[j] === firstMember[j].toLowerCase() ? 96 : 38);
            break;
        }
    }
}

console.log("Part Two Answer: "+prioritySum);
