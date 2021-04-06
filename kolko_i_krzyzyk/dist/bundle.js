(()=>{"use strict";var e,t,n,l,r,i={336:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Board=void 0;var l=n(83),r=n(230),i=function(){function e(e){var t=this;this.cells=new Array(e),this.currentSymbol=1;for(var n=document.getElementById("tictactoe"),r=0,i=0;i<e;i++)for(var a=n.insertRow(i),c=function(e){var n=a.insertCell(e);n.className="cell";var i=new l.Cell(n);s.cells[r]=i,n.addEventListener("click",(function(){return t.makeMove(i)}),!1),r++},s=this,o=0;o<e;o++)c(o);this.current(this.currentSymbol)}return e.prototype.makeMove=function(e){0==e.cellValue&&(e.setCellValue(this.currentSymbol),1==this.currentSymbol?this.currentSymbol=-1:-1==this.currentSymbol&&(this.currentSymbol=1)),new r.Check(this.cells),this.current(this.currentSymbol)},e.prototype.current=function(e){var t=document.getElementById("current"),n=new Image,l=document.createElement("img");n.src="../Media/x.png",l.src="../Media/O.png",n.classList.add("img"),l.classList.add("img"),t.innerHTML="Ruch: ",1==e?t.appendChild(n):-1==e&&t.appendChild(l)},e}();t.Board=i},83:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Cell=void 0;var n=function(){function e(e){this.htmlElement=e,this.cellValue=0}return e.prototype.setCellValue=function(e){var t=new Image,n=document.createElement("img");t.src="../Media/x.png",n.src="../Media/O.png",t.classList.add("img"),n.classList.add("img"),1==e&&0==this.cellValue?(this.cellValue=1,this.htmlElement.appendChild(t)):-1==e&&0==this.cellValue&&(this.cellValue=-1,this.htmlElement.appendChild(n))},e}();t.Cell=n},230:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Check=void 0;var l=n(479);t.Check=function(e){for(var t=new Array,n=0;n<Math.sqrt(e.length);n++)t[n]=[];var r=0;for(n=0;n<Math.sqrt(e.length);n++)for(var i=0;i<Math.sqrt(e.length);i++){var a=e[r];t[i][n]=a,r++}for(n=0;n<t.length;n++){var c=0,s=0;for(i=0;i<t.length;i++)-1==(a=t[n][i]).cellValue?s++:1==a.cellValue&&c++,c==t.length?new l.Win(1):s==t.length&&new l.Win(-1)}for(n=0;n<t.length;n++){var o=0,d=0;for(i=0;i<t.length;i++)-1==(a=t[i][n]).cellValue?d++:1==a.cellValue&&o++,o==t.length?new l.Win(1):d==t.length&&new l.Win(-1)}var u=0,h=0;for(n=0;n<t.length;n++)-1==(a=t[n][n]).cellValue?h++:1==a.cellValue&&u++,u==t.length?new l.Win(1):h==t.length&&new l.Win(-1);var m=0,g=0,v=t.length-1;for(n=0;n<t.length;n++)-1==(a=t[n][v]).cellValue?g++:1==a.cellValue&&m++,m==t.length?new l.Win(1):g==t.length&&new l.Win(-1),v--}},479:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Win=void 0;t.Win=function(e){var t=document.getElementById("win");document.getElementById("winner").classList.add("visible");var n=new Image,l=document.createElement("img");n.src="../Media/x.png",l.src="../Media/O.png",n.classList.add("img"),l.classList.add("img"),t.innerHTML="Wygrył: ",1==e?(this.wygrany="Krzyżyk",t.appendChild(n)):(this.wygrany="Kółko",t.appendChild(l)),console.log("Wygrał: "+this.wygrany)}}},a={};t=function e(t){var n=a[t];if(void 0!==n)return n.exports;var l=a[t]={exports:{}};return i[t](l,l.exports,e),l.exports}(336),n=document.getElementById("num"),l=document.getElementById("tictactoe"),null==(r=document.getElementById("play"))||r.addEventListener("click",(function(){l.innerHTML=" ",e=parseInt(n.value),new t.Board(e)}))})();