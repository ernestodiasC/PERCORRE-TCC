// Obtido de https://gist.github.com/tomerof/54c30b25556a902b0ffe22528b48e6e8 feito por tomerof
function loadScript(url,condition,callback){
  if(condition){
    var script=document.createElement('script');
    script.src="./JS/"+url+".js"
    script.onload=callback
    document.head.appendChild(script)
  }else{
    callback()
  }
}

var G={
  PRODUTOS:{},
  F:{
    mudar_quantidade:function(idx,quant){
      let elemento=document.getElementById(idx)
      quant=Number(elemento.innerText)+quant
      if(quant<1){quant=1}
      elemento.innerText=quant
    },
  },
}

loadScript("produtos",true,function(){})
switch(document.querySelector("title").innerText){
case"Produto":
  loadScript("tela_produto",true,function(){})
  break
}