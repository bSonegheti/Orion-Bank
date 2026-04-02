let saldo = 1000

let dinheiro = document.getElementById('dinheiro')
    dinheiro.innerHTML = `<span>${saldo}</span>`

let transferir = document.getElementById('inputTransfer')
const enviarTransferencia = document.getElementById('tranferButton').onclick = function(){
    
    
    if(saldo <= 0){
        alert('Error! Saldo insuficiente.')
    }else{
        saldo = (Number(saldo) - Number(transferir.value))
        alert('Transferência realizada com sucesso!')
    }
    

    typeof(saldo)
    console.log(saldo)
    
    dinheiro.innerHTML = `<span>${saldo}</span>`
}
