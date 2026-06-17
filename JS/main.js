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
      if(condition){
        var script=document.createElement('script');
        script.src="./JS/"+url+".js"
        script.onload=callback
        document.head.appendChild(script)
      }else{
        callback()
      }
    }
  },
}

G.F.loadScript("produtos",true,function(){})
switch(document.querySelector("title").innerText){
case"Produto":
  G.F.loadScript("tela_produto",true,function(){})
  break
}