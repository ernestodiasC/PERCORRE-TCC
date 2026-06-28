let a=[
    "famil_premium_10kg.png7810kgAdulto",
    "famil_gatos_castrados_10kg.png13010kgCastrados",
    "chacal_premium_plus_carne.png9815kgAdulto",
    "special_dog_carne.png14420kgAdulto",
]

for(var i=0,sw=document.getElementById("principal_adicionar_swipers");i<a.length;i++){
    let p=G.F.get_produto_by_id(a[i])
    console.log(p)
    sw.innerHTML+=p.get_div()
    p=document.getElementById(p.index)
    p.classList.add('swiper-slide')
}

G.F.setup_swiper(".carrossel")