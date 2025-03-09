let input = document.getElementById("input")
let output = document.getElementById("output")
let oprn = document.getElementById("op") //operation performed
let count = 0; //to keep track of the number of operations
let arr = []; //stores the operations performed
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
    if(input.value===""){
        num = Number(output.value)
    }
    else{
        num = Number(input.value)
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
}


function operation(operator) {
    oprn.value = operator
    let num = Number(input.value);
    input.value = "";
    let result = Number(output.value)

    if (operator === "=") {
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
        return;
    }

    arr.push(operator);
    //logic for first operation performed
    //or output box is empty
    if (count === 0||output.value==="") {
        result = num;
    } else {
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

    output.value = result;
    count++;
}
