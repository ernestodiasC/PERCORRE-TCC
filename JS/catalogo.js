function adicionar_categoria(categ){
    let categA=G.CATG[categ]
    let div=document.getElementById(categ)
    for(var i=0;i<categA.length;i++){
        let img=document.createElement('img')
        img.className="swiper-slide"
        img.src=categA[i].get_image()
        img.alt=categA[i].nome
        div.append(img)
        img.style.width="10rem"
    }
}
adicionar_categoria("Racao_Cachorro")
adicionar_categoria("Racao_Gato")