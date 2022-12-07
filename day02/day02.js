// Advent of Code 2022 - Day 02
// Open your input and run in the browser console

let input = window.document.getElementsByTagName("pre")[0];
input = input.innerText.split('\n');

let score = 0;

for (let i=0; i<input.length; i++) {
    // Increase score for "win" or "draw"
    if (input[i][0]=="A" && input[i][2]=="Y" ||
        input[i][0]=="B" && input[i][2]=="Z" ||
        input[i][0]=="C" && input[i][2]=="X") {
        score += 6;
    }
    else if (input[i][0]=="A" && input[i][2]=="X" ||
             input[i][0]=="B" && input[i][2]=="Y" ||
             input[i][0]=="C" && input[i][2]=="Z") {
        score += 3;
    }

    // Increase score based on chosen shape
    switch (input[i][2]) {
        case "X":
            score += 1; break;
        case "Y":
            score += 2; break;
        case "Z":
            score += 3; break;
    }
}

console.log("Part One Answer: "+score);

score = 0;

for (let i=0; i<input.length; i++) {
    // Increase score based on shape that you must play
    if (input[i][0]=="A" && input[i][2]=="Y" ||
        input[i][0]=="B" && input[i][2]=="X" ||
        input[i][0]=="C" && input[i][2]=="Z") {
        score += 1;
    }
    else if (input[i][0]=="B" && input[i][2]=="Y" ||
             input[i][0]=="C" && input[i][2]=="X" ||
             input[i][0]=="A" && input[i][2]=="Z") {
        score += 2;
    }
    else if (input[i][0]=="C" && input[i][2]=="Y" ||
             input[i][0]=="A" && input[i][2]=="X" ||
             input[i][0]=="B" && input[i][2]=="Z") {
        score += 3;
    }

    // Increase score on draw or win
    switch (input[i][2]) {
        case "Y":
            score += 3; break;
        case "Z":
            score += 6; break;
    }
}

console.log("Part Two Answer: "+score);
