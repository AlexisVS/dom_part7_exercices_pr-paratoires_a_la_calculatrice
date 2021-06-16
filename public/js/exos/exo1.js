let btnEgale = document.querySelector('#exo-1 > div:nth-child(2) > button:nth-child(4)');

btnEgale.addEventListener('click', () => {
    let inputA = +document.querySelector('#exo-1 > div:nth-child(2) > input:nth-child(1)').value;
    let inputB = +document.querySelector('#exo-1 > div:nth-child(2) > input:nth-child(3)').value;
    let response = document.querySelector('#response1');
    response.innerHTML = inputA + inputB
})