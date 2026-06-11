// Obtido de https://gist.github.com/tomerof/54c30b25556a902b0ffe22528b48e6e8 feito por tomerof
function loadScript(url, condition, callback) {
  if (condition) {
    var script = document.createElement('script');
    script.src = "./JS/"+url+".js";
    script.onload = callback;
    document.head.appendChild(script);
  } else {
    // Condition is false, do something else or skip loading the script
    callback();
  }
}

loadScript("produtos",true,function(){})