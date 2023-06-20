let display = document.querySelector('.result')
display.textContent = '0';
let firstNum = '';
let nextNum = '';
let mathKey = '';

function calculate(n1, math, n2) {
    let result = 0;
    if(math === '+') {
      result = Number(n1) + Number(n2); // '+'버튼을 눌렀을 때
    }
    else if(math === '-') {
       result = Number(n1) - Number(n2); // '-'버튼을 눌렀을 때
    }
    else if(math === '*') {
       result = Number(n1) * Number(n2); // '*'버튼을 눌렀을 때
    }
    if(math === '/') {
       result = Number(n1) / Number(n2); // '/'버튼을 눌렀을 때
    }
    return String(result);
}

function buttons(event){
    let target = event.target; 
    console.log(target)
    let action = target.classList[0]; 
    console.log(action)
    let buttonContent = target.textContent;
    console.log(buttonContent)
    if (action === 'num') { 
        if(mathKey !== '' && nextNum ===''){
            // display.textContent = '';
            display.textContent += String(buttonContent);
            nextNum += String(buttonContent);
        }else if(mathKey !== '' && nextNum !==''){
            display.textContent += String(buttonContent);
            nextNum += String(buttonContent);
        }else if(display.textContent == '0'){
            display.textContent = String(buttonContent);
        }else{
            display.textContent += String(buttonContent);
        }
    console.log('nextNum:'+nextNum+'firstNum:'+firstNum);
    }
    if (action === 'math') {
        mathKey = String(buttonContent);
        firstNum = display.textContent; 
        display.textContent += String(buttonContent);//수정
    }
    if (action === 'cancle') { 
        display.textContent = '0';
        firstNum = '';
        nextNum = '';
        buttonContent = '';
        mathKey = '';
    }
    if (action === 'equle') { 
        if(firstNum !== '' && mathKey === '') {
            display.textContent = firstNum;
        }
        else if(firstNum !== '' && nextNum === '') {
            display.textContent = calculate(display.textContent, mathKey, 0)
        }
        else if(firstNum == '') {
            display.textContent = '';
        }
        else{
            display.textContent = calculate(firstNum, mathKey, nextNum)
            firstNum = display.textContent;
            nextNum = '';
        }
    }
}