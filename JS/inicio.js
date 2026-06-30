let a=[
    "famil_premium_10kg.png7810kgAdulto",
    "famil_gatos_castrados_10kg.png13010kgCastrados",
    "chacal_premium_plus_carne.png9815kgAdulto",
    "special_dog_carne.png14420kgAdulto",
    "atacama_castrados.png18510kgCastrados",
]

for(var i=0,sw=document.getElementById("principal_adicionar_swipers");i<a.length;i++){
    let p=G.F.get_produto_by_id(a[i])
    console.log(p)
    sw.innerHTML+=p.get_div()
    p=document.getElementById(p.index)
    p.classList.add('swiper-slide')
}

G.F.setup_swiper(".carrossel")

let ct=0
let time=900
let id1=document.getElementById("loja_1")
let next=2
let loop=function(nct){
    requestAnimationFrame(loop)
    let dt=(nct-ct)/10
    ct=nct
    time-=dt
    /*console.log(time)*/
    if(time<=0){
        id1.src="./src/inicio/agro_imagem"+String(next)+".png"
        time=1000
        next++
        if(next>3){next=1}
    }else if(time<=100){
        id1.style.opacity=time/100
    }else if(time>=900){
        id1.style.opacity=(1000-time)/100
    }
}
requestAnimationFrame(loop)