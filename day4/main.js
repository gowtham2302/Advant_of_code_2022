import * as fs from 'fs'
const input = fs.readFileSync("input2.txt")

const input_data = input.toString().split("\r\n")
let no_of_pairs_one = 0
let no_of_pairs_two = 0

for(let str of input_data){
    const str_arr = str.split(",")
    calc_pairs(str_arr)
}

function calc_pairs(arr){
    const first_num_arr = arr[0].split("-")
    const second_num_arr = arr[1].split("-")
    const start1 = first_num_arr.map(Number)[0]
    const start2 = second_num_arr.map(Number)[0]
    const end1 = first_num_arr.map(Number)[1]
    const end2 = second_num_arr.map(Number)[1]
    
    // part one

    if(start1>=start2 && end1<=end2 || start2>=start1 && end2<=end1){
        no_of_pairs_one++
    }
    
    // part two

    if (end1 >= start2 && end2 >= start1) {
        no_of_pairs_two++;
    }
}


// (part one) ans => console.log(no_of_pairs_one);

// (part two)  ans => console.log(no_of_pairs_two);




