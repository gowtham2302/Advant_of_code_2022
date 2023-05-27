import * as fs from 'fs'
const input = fs.readFileSync('input2.txt')

const input_text =  input.toString();
let arr = input_text.split("\r\n");


let arr1= [];
let points = 0


// let opponent = {
//     A: 'Rock',
//     B: 'Paper',
//     C: 'Scissors'
// };
// let we = {
//     X: 'Rock',
//     Y: 'Paper',
//     Z: 'Scissors'
// };

for (let strings of arr) {
    let word = strings.split(' ')
    arr1.push(word)
}

for(let i of arr1){
   let my_score =  score_2(i[0] , i[1])
   points += my_score
   my_score = 0
}

// part 1
function score(a , b){
    let pnts = 0

   if(a === 'A'){
        if(b === "X"){
            pnts = 1 + 3
            return pnts
        }
        if(b === "Y"){
            pnts = 2 + 6
            return pnts
        }
        if (b === "Z"){
            pnts = 3 + 0
            return pnts
        }
   }

   if (a === "B"){
        if(b === "X"){
            pnts = 1 + 0
            return pnts
        }
        if(b === "Y"){
            pnts = 2 + 3
            return pnts
        }
        if (b === "Z"){
            pnts = 3 + 6
            return pnts
        }
   }

   if(a === "C"){
        if(b === "X"){
            pnts = 1 + 6
            return pnts
        }
        if(b === "Y"){
            pnts = 2 + 0
            return pnts
        }
        if (b === "Z"){
            pnts = 3 + 3
            return pnts
        }
}
}

// part 2
function score_2(a,b){

    let pnts = 0

    if(a === 'A'){
        if(b === "X"){
            pnts = 3 + 0
            return pnts
        }
        if(b === "Y"){
            pnts = 1 + 3
            return pnts
        }
        if (b === "Z"){
            pnts = 2 + 6
            return pnts
        }
   }

   if(a === "B"){
        if(b === "X"){
            pnts = 1 + 0
            return pnts
        }
        if(b === "Y"){
            pnts = 2 + 3
            return pnts
        }
        if (b === "Z"){
            pnts = 3 + 6
            return pnts
        }
   }

   if(a === "C"){
        if(b === "X"){
            pnts = 2 + 0
            return pnts
        }
        if(b === "Y"){
            pnts = 3 + 3
            return pnts
        }
        if (b === "Z"){
            pnts = 1 + 6
            return pnts
        }
}
    
}

console.log(points);