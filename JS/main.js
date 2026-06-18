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
}

G.F.loadScript("produtos",true,function(){
  switch(document.querySelector("title").innerText){
    case"Produto":
      G.F.loadScript("tela_produto",true,function(){})
      break
    case"Catálogo":
      G.F.loadScript("catalogo",true,function(){})
      break
  }
})
G.F.loadScript_base("https://code.jquery.com/jquery-1.11.0.min.js",true,function(){})
G.F.loadScript_base("https://code.jquery.com/jquery-migrate-1.2.1.min.js",true,function(){})
G.F.loadScript_base("https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.7.1/slick.js",true,function(){})