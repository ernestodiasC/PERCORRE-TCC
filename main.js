let quantidade = 1;
function mudar (valor) {quantidade += valor ;
    if (quantidade < 1) quantidade = 1; 
document.getElementById ('qtd').textContent = quantidade;
}
