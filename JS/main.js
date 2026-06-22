var G={
  PRODUTOS:{},
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
    }
  },
  CATG:{
    Racao_Cachorro:[],
    Racao_Gato:[],
  }
}

G.F.loadScript("produtos",true,function(){
  G.F.loadScript_base("https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js",true,function(){
    if(document.getElementById('body_inicio')!=null){
      G.F.loadScript("inicio",true,function(){})
    }else{
      G.F.loadScript("catalogo",true,function(){})
    }
  })
})