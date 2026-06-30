let carrinho_mandar_para_zap=function(){
    let text=""
    const struct_names=Object.keys(G.CARRINHO)
    let preco_total=0
    for(let i=0;i<struct_names.length;i++){
        let p=G.F.get_produto_by_id(struct_names[i])
        text+=p.nome+` - ${G.CARRINHO[struct_names[i]]} Unidades (R$ ${p.preco_number*G.CARRINHO[struct_names[i]]})%0A`
        preco_total+=p.preco_number*G.CARRINHO[struct_names[i]]
    }
    text+=`Total de R$ ${preco_total}`
    while(text.includes(" ")){
        text=text.replace(" ","%20")
    }
    window.open("https://wa.me/5551982355620?text="+text,"_blank")

}

G.F.recarregar_carrinho=function(){
    const carrinho_lista=document.getElementById("carrinho_lista")
    carrinho_lista.innerHTML=""
    const struct_names=Object.keys(G.CARRINHO)
    if(struct_names.length<1){
        carrinho_lista.innerHTML=`
        <div class="aviso">
            Seu carrinho está vazio!
        </div>
        `
        return null
    }else{
        carrinho_lista.innerHTML=`
        <button class="botao mandar_pedido" onclick="carrinho_mandar_para_zap()">
            Mandar seu Pedido!
        </button>
        `
    }
    let preco_total=0
    for(let i=0;i<struct_names.length;i++){
        let p=G.F.get_produto_by_id(struct_names[i])
        let div=`
        <div id="${p.index}" class="carrinho_item">
            <div class="carrinho_imagem_container">
                <img class="carrinho_imagem" src="${p.get_image()}" alt=${p.nome}>
            </div>
            <div class="carrinho_info_container">
                <div class="carrinho_info_nome">${p.nome}</div>
                <div class="carrinho_info_peso">Peso da unidade: ${p.peso}</div>
                <div class="carrinho_info_preco">Preço por unidade: R$ ${p.preco}</div>
                <div class="carrinho_info_unidades">Unidades: ${G.CARRINHO[struct_names[i]]}</div>
                <div class="carrinho_info_preco_total">Preço total: R$ ${p.preco_number*G.CARRINHO[struct_names[i]]}</div>
                <button class="botao" onclick="G.F.add_carrinho('${p.index}',1)">Adicionar uma carrinho</button>
                <button class="botao" onclick="G.F.add_carrinho('${p.index}',-1)">Remover uma unidade</button>
            </div>
        </div>
        `
        preco_total+=p.preco_number*G.CARRINHO[struct_names[i]]
        carrinho_lista.innerHTML+=div
    }
    let idx=document.getElementById("preco_total_total")
    idx.innerHTML=`<span class="preco_total_total">Total da compra: R$ ${preco_total}</span>`
}
G.F.recarregar_carrinho()