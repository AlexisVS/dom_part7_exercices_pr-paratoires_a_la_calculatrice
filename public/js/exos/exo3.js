let result = document.querySelector('#response3')
let displayOperator = document.querySelector('#operatorsExo3 > span:nth-child(2)');
let operatorAddition = document.querySelector('#operatorsExo3 > button:nth-child(7)');
let operatorSoustraction = document.querySelector('button.m-1:nth-child(8)');
let operatorMultiplication = document.querySelector('#operatorsExo3 > button:nth-child(10)');
let operatorDivision = document.querySelector('#operatorsExo3 > button:nth-child(11)');
let btnResult = document.querySelector('#operatorsExo3 > button:nth-child(4)');

let applyIcon = (target, value) => {
    let displayOperator = document.querySelector('#operatorsExo3 > span:nth-child(2)');
    switch (true) {
        case /fa-plus/.test(target.children[0].className):
            return displayOperator.children[0].className = value

        case /fa-minus/.test(target.children[0].className):
            return displayOperator.children[0].className = value

        case /fa-times/.test(target.children[0].className):
            return displayOperator.children[0].className = value

        case /fa-divide/.test(target.children[0].className):
            return displayOperator.children[0].className = value
    }
}

operatorAddition.addEventListener('click', () => { applyIcon(operatorAddition, "fas fa-plus ") });
operatorSoustraction.addEventListener('click', () => { applyIcon(operatorSoustraction, "fas fa-minus") });
operatorMultiplication.addEventListener('click', () => { applyIcon(operatorMultiplication, "fas fa-times") });
operatorDivision.addEventListener('click', () => { applyIcon(operatorDivision, "fas fa-divide") });

btnResult.addEventListener('click', () => {
    let inputA, inputB, displayOperator
    let result = document.querySelector('#response3')
    displayOperator = document.querySelector('#operatorsExo3 > span:nth-child(2)');
    inputA = +document.querySelector('#operatorsExo3 > input:nth-child(1)').value;
    inputB = +document.querySelector('#operatorsExo3 > input:nth-child(3)').value;

    switch (true) {
        case /fa-plus/.test(displayOperator.children[0].className):
            return result.innerHTML = inputA + inputB

        case /fa-minus/.test(displayOperator.children[0].className):
            return result.innerHTML = inputA - inputB

        case /fa-times/.test(displayOperator.children[0].className):
            return result.innerHTML = inputA * inputB

        case /fa-divide/.test(displayOperator.children[0].className):
            return result.innerHTML = inputA / inputB
    }
})