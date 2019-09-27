let allButtons = document.querySelectorAll('.row > button');
let display = document.querySelector('#display');
let firstNum,secondNum
let oporator;
let arrayOfAllButtons = Array.from(allButtons);
let indexOfAllOperators;
let currentOperation = "";
arrayOfAllButtons.forEach((button) =>{
    let buttonText = button.innerHTML;
    button.setAttribute('id',buttonText);
    if(button.classList[1] === 'operator')
    {
        
        button.addEventListener('click',()=>
        {
            console.log(operator);
            
            
                    let secondNum = currentOperation.slice(currentOperation.indexOf(operator)+1);
                    console.log('2nd' + secondNum);
                    firstNum = operate(operator,firstNum,secondNum);
                    currentOperation = firstNum;
                    console.log("fuuu" +secondNum);
                    
                
            display.value += buttonText;
            currentOperation +=buttonText;
            operator = button.innerHTML;
            console.log(button.classList[1]);
            firstNum = parseInt(currentOperation.slice(0,currentOperation.indexOf(operator)));
        
        })
        
    }if((button.classList)[1] === 'number')
    {
        button.addEventListener('click',()=>
        {
        display.value += buttonText;
        currentOperation +=buttonText;
        })
    }else if(buttonText == '=')
    {
        button.addEventListener('click',()=>
        {   
            let displayValue = display.value;
            let indexOfOperator = getOpporatorIndexValue();
            secondNum = currentOperation.slice(currentOperation.indexOf(operator)+1);
            if(operator == '/'&&secondNum == '0')
            {
                display.value = 'fuck outa here';
            }else if(secondNum!='')
            {
            display.value = operate(operator,firstNum,secondNum);
            console.log("f " +firstNum);
            console.log("s \'"+ secondNum + "\'");
            console.log("o " +operator);
            console.log("full "+ currentOperation);
            }
        })

    }else if(buttonText === 'Clear')
    {
        button.addEventListener('click',()=>{
            display.value = '';
            firstNum = 1;
            secondNum = 1;
            currentOperation = '';
        })
    }
});
function getOpporatorIndexValue()
{
            let displayValue = display.value;
            let OpporatorIndexes = [];
            let findOpporator = [];
            findOpporator.push(displayValue.indexOf('+'));
            findOpporator.push(displayValue.indexOf('-'));
            findOpporator.push(displayValue.indexOf('x'));
            findOpporator.push(displayValue.indexOf('/'));
            findOpporator.forEach((arrayElement) => {
                if(arrayElement != -1)
                OpporatorIndexes.push(arrayElement);
            });
            //return OpporatorIndexes//uncomment to return multiple opporators
            return OpporatorIndexes[0];
}
let equals = document.querySelector('.equals');
equals.addEventListener('click',()=>{
    console.log(display.value);
})
function add(numberOne,numberTwo)
{
    
    return parseInt(numberOne) + parseInt(numberTwo);

}
function subtract(numberOne,numberTwo)
{
    return numberOne - numberTwo;
}
function multiply(numberOne,numberTwo)
{
    return numberOne * numberTwo;
}
function divide(numberOne,numberTwo)
{
    return numberOne / numberTwo;
}
function operate(operator,numOne,numTwo)
{
    let returnValue;
    switch(operator)
    {
        case "+":
            returnValue= add(numOne,numTwo);
        break;
        case "-":
            returnValue= subtract(numOne,numTwo);
        break;
        case "x":                    
            returnValue = multiply(numOne,numTwo);
        break;
        case '/':
            returnValue = divide(numOne,numTwo);
        break;
        default:
            console.log('Something Went Wrong');
        return 'Something Went Wrong';
    }
    return Math.round(returnValue*1000)/1000;
}