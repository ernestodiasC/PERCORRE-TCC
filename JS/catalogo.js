function adicionar_categoria(categ){
    let categA=G.CATG[categ]
    let div=document.getElementById(categ)
    for(var i=0;i<categA.length;i++){
        let img=document.createElement('img')
        img.className="produto"
        img.src="./scr/produtos/"+categA[i].img
        img.alt=categA[i].nome
        div.append(img)
    }
}
adicionar_categoria("Racao_Cachorro")
adicionar_categoria("Racao_Gato")
