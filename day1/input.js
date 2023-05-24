import * as fs from 'fs'
                           

fs.readFile('input2.txt', (err, data) => {
    if (err) throw err;
    const inp_txt = data.toString();
    const inp_arr = inp_txt.split('\n');
    const inp_arr1 = inp_arr.map((x) => parseInt(x));


    let inp_arr2 = splitArrayByNaN(inp_arr1)
    console.log(findlargest(inp_arr2))
}
)

function splitArrayByNaN(arr) {
    let arr2 = []
    let arr3 = []
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            arr2.push(arr3)
            arr3 = []
        } else {
            arr3.push(arr[i])
        }
    }
    arr2.push(arr3)
   return arr2
}

function findlargest(arr){

    let arr_lar = []
    for (let i = 0; i < arr.length; i++) {
        arr_lar.push(arr[i].reduce((a, b) => a + b, 0))
    }

    console.log(arr_lar);

    let largest1 = 0;
    let largest2 = 0;
    let largest3 = 0;

    for (let i = 0; i < arr_lar.length; i++) {
        if (arr_lar[i] > largest1) {
            largest3 = largest2;
            largest2 = largest1;
            largest1 = arr_lar[i];
        } else if (arr_lar[i] > largest2) {
            largest3 = largest2;
            largest2 = arr_lar[i];
        } else if (arr_lar[i] > largest3) {
            largest3 = arr_lar[i];
        }
    }
    return largest1 + largest2 + largest3
}
