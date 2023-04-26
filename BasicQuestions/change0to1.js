

function changeVal(val) {

    const returnVal=Math.abs(val-1)
    console.log(returnVal)
}

changeVal(1)


function reverseIn(val) {
    if (val == 0) {
        return 1
    } else if(val == 1) {
        return 0
    }else{
        return `invalid number`
    }
}

const result =reverseIn(12)
console.log(result);