let allButtons = document.querySelectorAll('.row > button');
let display = document.querySelector('#display');
let firstNum = null,secondNum = null;
let operator = null;
let arrayOfAllButtons = Array.from(allButtons);
let indexOfAllOperators;
let currentOperation = "";
let operatorList = ["+","-","/","x"];
let roundNumber = (unRoundedNumber) => Math.round(unRoundedNumber*1000)/1000;
arrayOfAllButtons.forEach((button) =>{
    let buttonText = button.innerHTML;
    
    
    if(button.classList[1] === 'oporator')
    {
    
        button.addEventListener('click',()=>
        {
            
            if(operatorList.indexOf(currentOperation.charAt(currentOperation.length-1)) == -1 && display.value != 'divide by 0')
            {
            
            console.log('g'+ button.classList[1]+'g');
            
                if(firstNum!=null)
                {
                    let secondNum = currentOperation.slice(currentOperation.indexOf(operator)+1);
                    console.log('2nd' + secondNum);
                    firstNum = operate(operator,firstNum,secondNum);
                   
                  
                   
                    currentOperation = firstNum;
                    console.log("fuuu" +secondNum);
                    display.value = firstNum;
                    
                }
            
            display.value += buttonText;
            currentOperation +=buttonText;
            operator = button.innerHTML;
            console.log(button.classList[1]);
            firstNum = parseInt(currentOperation.slice(0,currentOperation.indexOf(operator)));
            }
            
        })
        
    }if((button.classList)[1] === 'number')
    {
        button.addEventListener('click',()=>
        {
        if(display.value == 'divide by 0')
        {
            display.value = '';
            currentOperation = '';
            firstNum = null;
            secondNum = null;
            operator = null;
        }
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
            if(secondNum!='')
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
            return returnValue = roundNumber(add(numOne,numTwo));
        break;
        case "-":
            return returnValue = roundNumber(subtract(numOne,numTwo));
        break;
        case "x":                    
            return roundNumber(multiply(numOne,numTwo));
        break;
        case '/':
            if(operator == '/' && numTwo == '0')
            {
                return 'divide by 0';
                
            }
            return roundNumber(divide(numOne,numTwo));
        break;
        default:
            console.log('Something Went Wrong');
        return 'Something Went Wrong';
    }
    
}
