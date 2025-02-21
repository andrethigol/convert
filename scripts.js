//cotação da Moeda do dia 

const USD = 5.24;
const EUR = 6.14;
const GBP = 7.20;

// Obtendo os elementos do DOM

const form = document.querySelector ("form")
const amount = document.getElementById('amount')
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipulando o input de valor

amount.addEventListener('input', () => {
   
    const hasCharactersRegex = /\D+/g;
    amount.value = amount.value.replace(hasCharactersRegex, "");

})

// Capturando o evento de submit do formulário

form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value) {
        case 'USD':
            convertCurrency(amount.value, USD, "US$") 
            break;

        case 'EUR':
            convertCurrency(amount.value, EUR, "€")
            break;  

        case 'GBP':
            convertCurrency(amount.value, GBP, "£")
            break;
    }
}

// Função para converter a moeda

function convertCurrency(amount, price, symbol) {
    try {
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        let total = amount * price
        total = formatCurrencyBRL(total).replace("R$", "")

        result.textContent = `${total} Reais`
        
        footer.classList.add("show-result")
        
    } catch (error) {
        console.error(error)
        footer.classList.remove("show-result")
        alert("Ocorreu um erro inesperado, tente novamente mais tarde") 
    }
}

function formatCurrencyBRL(value) {
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}

