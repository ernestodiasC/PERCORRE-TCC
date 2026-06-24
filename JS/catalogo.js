function adicionar_categoria(categ){
    let categA=G.CATG[categ]
    console.log(categ+"_swiper-wrapper")
    let div=document.getElementById(categ+"_swiper-wrapper")
    for(var i=0;i<categA.length;i++){
        let img=document.createElement('img')
        img.className="swiper-slide"
        img.src=categA[i].get_image()
        img.alt=categA[i].nome
        div.append(img)
        img.style.height="20rem"
        img.style.width="auto"
    }
    G.F.setup_swiper("."+categ)
}
adicionar_categoria("Racao_Cachorro")
adicionar_categoria("Racao_Gato")