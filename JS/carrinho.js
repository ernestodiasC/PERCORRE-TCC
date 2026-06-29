G.F.recarregar_carrinho=function(){
    const carrinho_lista=document.getElementById("carrinho_lista")
    carrinho_lista.innerHTML=""
    const struct_names=Object.keys(G.CARRINHO)
    for(let i=0;i<struct_names.length;i++){
        let p=G.F.get_produto_by_id(struct_names[i])
        let div=`
        <div id="${p.index}" class="carrinho_item">
            <div class="carrinho_imagem_container">
                <img class="carrinho_imagem" src="${p.get_image()}" alt=${p.nome}>
            </div>
            <div class="carrinho_info_container">
                <div class="carrinho_info_nome">${p.nome}</div>
                <div class="carrinho_info_preco">Preço por Unidade: ${p.preco}</div>
                <div class="carrinho_info_unidades">Unidades: ${G.CARRINHO[struct_names[i]]}</div>
                <div class="carrinho_info_preco_total">Preço Total: ${p.preco*G.CARRINHO[struct_names[i]]}</div>
                <button class="botao" onclick="G.F.add_carrinho('${p.index}',1)">Adicionar Unidade Carrinho</button>
                <button class="botao" onclick="G.F.add_carrinho('${p.index}',-1)">Remover Unidade Carrinho</button>
            </div>
        </div>
        `
        carrinho_lista.innerHTML+=div
    }
}
G.F.recarregar_carrinho()