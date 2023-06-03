import * as fs from 'fs'
const input = fs.readFileSync('input2.txt')

const lines = input.toString().split('\r\n')

const char_arr = [0 , "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

let total = 0
let total_part_two = 0

// part one


for(let line of lines){
   const value = calc_score(line)
   total += value
}

function calc_score(str){
    const first_half = str.substring(0 , str.length/2)
    const second_half = str.substring(str.length/2)

    let common_letter    
    for(let letter of first_half){
        if(second_half.includes(letter)){
            common_letter = letter
        }
    }

    return char_arr.indexOf(common_letter)
}

// ans => console.log(total);

// part two

combined_score(lines)

function combined_score(arr){
    let temp_arr = []
    let inc = 1

    for(let i of arr){
        temp_arr.push(i)
        if(inc%3 === 0){
            compare_three(temp_arr)
            temp_arr = []
        }
        inc += 1
    }
}

function compare_three(arr){
    for(let str of arr[0]){
        if(arr[1].includes(str) && arr[2].includes(str)){
            return total_sc(char_arr.indexOf(str)); 
     }
}
}

function total_sc(num){
 total_part_two += num
}

console.log(total_part_two);