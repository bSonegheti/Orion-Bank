let saldo = 1000

let deposito = document.getElementById('inputDeposit')

let dinheiro = document.getElementById('dinheiro')
    dinheiro.innerHTML = `<span>${saldo}</span>`
    
    const depositButton = document.getElementById('depositButton').onclick = function(){
        
        if(saldo){
            saldo = (Number(saldo) + Number(deposito.value))
            alert(`Saldo depositado com sucesso!`)
        }else{
            alert(`Error! Não foi possível realizar o Depósito!`)
        }
        
        typeof(saldo)
        console.log(saldo)

        dinheiro.innerHTML = `<span>${saldo}</span>`
    }