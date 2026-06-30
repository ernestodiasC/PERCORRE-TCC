if(G.URLPARAMS.has("id")){
    let pid=G.URLPARAMS.get('id')
    console.log(pid)
    let p=G.F.get_produto_by_id(pid)
    console.log(p)
    if(p==null){
        window.location.href = "./"
    }else{
        let img=document.getElementById("produto_individual_imagem")
        img.src=p.get_image()
        let idx=document.getElementById("produto_preco")
        idx.innerText=p.preco+"R$"
        idx=document.getElementById("produto_peso")
        idx.innerText=p.peso
        idx=document.getElementById("produto_individual_titulo")
        idx.innerText=p.nome
        idx=document.getElementById("produto_nome")
        idx.innerText=p.nome
        idx=document.getElementById("produto_botao")
        idx.onclick=function(){
            G.F.add_carrinho(p.index,1)
            let idx=document.getElementById("produto_quantidade_ja_no_carrinho")
            idx.innerText=String(G.F.get_carrinho(p.index))
        }
        idx=document.getElementById("produto_botao_menos")
        idx.onclick=function(){
            G.F.add_carrinho(p.index,-1)
            let idx=document.getElementById("produto_quantidade_ja_no_carrinho")
            idx.innerText=String(G.F.get_carrinho(p.index))
        }
        idx=document.getElementById("produto_quantidade_ja_no_carrinho")
        idx.innerText=String(G.F.get_carrinho(p.index))
    }
}else{window.location.href = "./"}