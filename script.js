const container = document.querySelector('.container')
const currency1 = document.querySelector('#currency-one')
const currency2 = document.querySelector('#currency-two')
const amount1 = document.querySelector('#amount-one')
const amount2 = document.querySelector('#amount-two')

const rateEl = document.querySelector('#rate');
const swapBtn = document.querySelector('#swap')
const api = 'd043ac42276d7d94b22c174c'; 

function calculate(){
    const currencyOne = currency1.value; 
    const currencyTwo = currency2.value; 

    fetch(`https://v6.exchangerate-api.com/v6/${api}/latest/${currencyOne}
    `)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      const rate = data.conversion_rates[currencyTwo]
      rateEl.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`
    
      amount2.value = (amount1.value * rate).toFixed(2); 
    }); 
}



// Event Listeners
currency1.addEventListener('change', calculate); 
currency2.addEventListener('change', calculate);
amount1.addEventListener('input', calculate); 
amount2.addEventListener('input', calculate); 

swapBtn.addEventListener('click', () => {
    const temp = currency1.value; 
    currency1.value = currency2.value; 
    currency2.value = temp; 
    calculate(); 
});

calculate(); 