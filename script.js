let input = document.getElementById("input")
let output = document.getElementById("output")
let oprn = document.getElementById("op") //pervious operation performed
let count = 0; //to keep track of number of operations performed
//to keep track of operations performed
let arr = [];
let lastResult = null; // Stores last result to continue operations correctly
let newCalculation = true; // Tracks if a new operation has started

function display(digit){
    if (newCalculation) {
        input.value = digit;
        newCalculation = false;
    } else {
        input.value += digit; // keypad digits
    }
}
//factorial 
function factorial(n){
    let fact = 1
    while(n>0){
        fact = fact*n
        n--
    }
    return fact
}
//for scientific operations
function scientific(operator){
    let num
    oprn.value = operator

    if (input.value === "" && output.value !== "") {
        num = Number(output.value);
    } else {
        num = Number(input.value);
    }

    let result
    if(operator==="sqrt"){
        result = Math.sqrt(num)
    }
    else if(operator==="sqr"){
        result = num*num
    }
    else if(operator==="cos"){
        result = Math.cos(num)
    }
    else if(operator==="sin"){
        result = Math.sin(num)
    }
    else if(operator==="tan"){
        result = Math.tan(num)
    }
    else if(operator==="ceil"){
        result = Math.ceil(num)
    }
    else if(operator==="floor"){
        result = Math.floor(num);
    }
    else if(operator==="abs"){
        result = Math.abs(num)
    }
    else if(operator==="exp"){
        result = Math.exp(num)
    }
    else if(operator==="log"){
        result = Math.log(num)
    }
    //clears and resets all the values
    else if(operator==="C"){
        input.value = ""
        output.value = ""
        count = 0
        arr=[]
        lastResult = null
        return;
    }
    else if(operator==="fac"){
        result = factorial(num)
    }
    else if(operator==="log10"){
        result = Math.log10(num)
    }
    output.value = result
    input.value = ""
    lastResult = result
    newCalculation = true
}


function operation(operator) {
    oprn.value = operator
    let num = Number(input.value);
    input.value = "";
    let result = Number(output.value)

    if (operator === "=") {
        if(arr.length===0){
            return;
        }
        //recalls the last operation stored in arr
        //executes and returns the final value
        let lastOp = arr[arr.length - 1]; 
        arr.pop(); 

        if (lastOp === "+") result += num;
        else if (lastOp === "-") result -= num;
        else if (lastOp === "*") result *= num;
        else if (lastOp === "/") result = num === 0 ? "Error" : result / num;
        else if (lastOp === "%") result %= num;
        else if (lastOp === "pow") result = Math.pow(result, num);

        output.value = result;
        lastResult = result
        input.value = ""
        newCalculation = true;
        return;
    }

    if (input.value === "" && lastResult !== null) {
        arr.push(operator);
        oprn.value = operator;
        return;
    }

    arr.push(operator);
    //logic for first operation performed
    //or output box is empty
    if (count === 0||output.value==="") {
        lastResult = num;
    } 
    else {
        let op = arr[count - 1]; //last operation performed
        if (op === "+"){ 
            result += num
        }
        else if(op==="-"){
            result -=num
        }
        else if(op==="*"){
            result *=num
        }
        else if(op==="/"){
            result /=num
        }
        else if(op==="%"){
            result %=num
        }
        else if(op==="pow"){
            result = Math.pow(result,num)
        }
    }

    arr.push(operator);
    oprn.value = operator;
    output.value = lastResult;
    input.value = "";
    count++;
    newCalculation = true;
}
