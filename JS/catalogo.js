G.CTLG={
    dog:["racaogolden.jpg","premieRracasgrandes.png"],
    gato:["whiskas200g.png"]
}
G.F.catalogo_set_html_categoria=function(categoria){
    for(let i=0;i<G.CTLG[categoria].length;i++){
        let prod=G.F.get_produto_by_id(G.CTLG[categoria][i])
        let idx=document.getElementById(categoria+"_"+i+"_nome")
        idx.innerText=prod.nome
        idx=document.getElementById(categoria+"_"+i+"_preco")
        idx.innerText=prod.preco
        idx=document.getElementById(categoria+"_"+i+"_img")
        idx.src=prod.img
        idx=document.getElementById(categoria+"_"+i+"_link")
        idx.href="./tela_produto.html?id="+prod.img
    }
}
G.F.catalogo_set_html_categoria("dog")
G.F.catalogo_set_html_categoria("gato")