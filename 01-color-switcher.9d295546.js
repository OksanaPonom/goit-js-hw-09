!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=document.body,n=0;t.addEventListener("click",(function(){if(0!==n)return;n=setInterval((function(){r.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),t.setAttribute("disabled",""),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){clearInterval(n),n=0,e.setAttribute("disabled",""),t.removeAttribute("disabled")})),t.style.height="50px",t.style.width="70px",e.style.height="50px",e.style.width="70px"}();
//# sourceMappingURL=01-color-switcher.9d295546.js.map
