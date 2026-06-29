var G={
  PRODUTOS:{},
  PRODTUDOS_ARRAY:[],
  F:{
    mudar_quantidade:function(idx,quant){
      let elemento=document.getElementById(idx)
      quant=Number(elemento.innerText)+quant
      if(quant<1){quant=1}
      elemento.innerText=quant
    },
    // Versão original obtido de https://gist.github.com/tomerof/54c30b25556a902b0ffe22528b48e6e8 feito por tomerof
    loadScript:function(url,condition,callback){
      G.F.loadScript_base("./JS/"+url+".js",condition,callback)
    },
    loadScript_base:function(url,condition,callback){
      if(condition){
        var script=document.createElement('script');
        script.src=url
        script.onload=callback
        document.head.appendChild(script)
      }else{
        callback()
      }
    },
    save_carrinho:function(){
      let carrinho_cru=JSON.stringify(G.CARRINHO)
      console.log(carrinho_cru)
      localStorage.setItem("user_carrinho",carrinho_cru)
    },
    load_carrinho:function(){
      let carrinho_cru=localStorage.getItem("user_carrinho")
      if(carrinho_cru){
        G.CARRINHO=JSON.parse(carrinho_cru)
      }
    },
    add_carrinho:function(index,quantidade){
      if(Object.hasOwn(G.CARRINHO,index)){
        G.CARRINHO[index]+=quantidade
      }else{
        G.CARRINHO[index]=quantidade
      }
      if(G.CARRINHO[index]<1){
        delete G.CARRINHO[index]
      }
      G.F.save_carrinho()
    },
  },
  CATG:{
    Racao_Cachorro:[],
    Racao_Gato:[],
  },
  swiper_actives:[],
  URLPARAMS: new URLSearchParams(window.location.search),
  CARRINHO:{},
}

G.F.loadScript("produtos",true,function(){
  G.F.load_carrinho()
  G.F.save_carrinho()
  G.F.loadScript_base("https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js",true,function(){
    G.F.loadScript("swiper",true,function(){
      if(document.getElementById('body_inicio')!=null){
        G.F.loadScript("inicio",true,function(){})
      }else if(document.getElementById('produto_individual')!=null){
        G.F.loadScript("produto_individual",true,function(){})
      }else if(document.getElementById('carrinho')!=null){
        G.F.loadScript("carrinho",true,function(){})
      }else{
        G.F.loadScript("catalogo",true,function(){})
      }
    })
  })
})