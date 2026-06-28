function adicionar_categoria(categ){
    let categA=G.CATG[categ]
    console.log(categ+"_swiper-wrapper")
    let div=document.getElementById(categ+"_swiper-wrapper")
    for(var i=0;i<categA.length;i++){
        let p=G.F.get_produto_by_id(categA[i])
        console.log(p)
        div.innerHTML+=p.get_div()
        p=document.getElementById(p.index)
        p.classList.add('swiper-slide')

        /*let img=document.createElement('a')
        img.className="swiper-slide"
        /*img.src=categA[i].get_image()
        img.alt=categA[i].nome*/
        /*div.append(img)
        let img2=document.createElement('img')
        img2.className=""
        img2.src=categA[i].get_image()
        img2.alt=categA[i].nome
        img.append(img2)
        /*img.style.height="20rem"
        img.style.width="auto"*/
    }
    G.F.setup_swiper("."+categ)
}
adicionar_categoria("Racao_Cachorro")
adicionar_categoria("Racao_Gato")