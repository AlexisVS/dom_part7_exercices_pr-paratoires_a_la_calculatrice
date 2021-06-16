let btnResult = document.querySelector('#exo-2 > div:nth-child(2) > button:nth-child(4)');

btnResult.addEventListener('click', () => {
    let inputA = document.querySelector('#exo-2 > div:nth-child(2) > input:nth-child(1)').value;
    let inputB = document.querySelector('#exo-2 > div:nth-child(2) > input:nth-child(3)').value;
    let operatorAddition = document.querySelector('select.btn').value;
    let response = document.querySelector('#response2');
    switch (operatorAddition) {
        case "+":
            response.innerHTML = inputA + inputB
            break;
    
        case "-":
            response.innerHTML = inputA - inputB
            break;
    
        case "*":
            response.innerHTML = inputA * inputB
            break;
    
        case "/":
            response.innerHTML = inputA / inputB
            break;
    }
})