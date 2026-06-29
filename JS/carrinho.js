G.F.recarregar_carrinho=function(){
    const carrinho_lista=document.getElementById("carrinho_lista")
    carrinho_lista.innerHTML=""
    const struct_names=Object.keys(G.CARRINHO)
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
                <div class="carrinho_info_peso">Peso da Unidade: ${p.peso}</div>
                <div class="carrinho_info_preco">Preço por Unidade: ${p.preco}R$</div>
                <div class="carrinho_info_unidades">Unidades: ${G.CARRINHO[struct_names[i]]}</div>
                <div class="carrinho_info_preco_total">Preço Total: ${p.preco_number*G.CARRINHO[struct_names[i]]}R$</div>
                <button class="botao" onclick="G.F.add_carrinho('${p.index}',1)">Adicionar Unidade Carrinho</button>
                <button class="botao" onclick="G.F.add_carrinho('${p.index}',-1)">Remover Unidade Carrinho</button>
            </div>
        </div>
        `
        preco_total+=p.preco_number*G.CARRINHO[struct_names[i]]
        carrinho_lista.innerHTML+=div
    }
    if(struct_names.length<1){
        carrinho_lista.innerHTML=`
        <div class="aviso">
            Nenhum Item ainda foi adicionado ao carrinho!
        </div>
        `
    }else{
        let idx=document.getElementById("preco_total_total")
        idx.innerHTML=`<span class="preco_total_total">O preço total será: ${preco_total}R$</span>`
    }
}
G.F.recarregar_carrinho()