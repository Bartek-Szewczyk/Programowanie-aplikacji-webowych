(()=>{"use strict";var e={336:(e,t,l)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Board=void 0;var r=l(83),n=l(230),o=function(){function e(e){var t=this;this.cells=new Array(e),this.currentSymbol=1;for(var l=document.getElementById("tictactoe"),n=0,o=0;o<e;o++)for(var i=l.insertRow(o),a=function(e){var l=i.insertCell(e);l.className="cell";var o=new r.Cell(l);c.cells[n]=o,l.addEventListener("click",(function(){return t.makeMove(o)}),!1),n++},c=this,s=0;s<e;s++)a(s)}return e.prototype.makeMove=function(e){0==e.cellValue&&(e.setCellValue(this.currentSymbol),1==this.currentSymbol?this.currentSymbol=-1:-1==this.currentSymbol&&(this.currentSymbol=1)),new n.Check(this.cells)},e}();t.Board=o},83:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Cell=void 0;var l=function(){function e(e){this.htmlElement=e,this.cellValue=0}return e.prototype.setCellValue=function(e){1==e&&0==this.cellValue?(this.cellValue=1,this.htmlElement.innerHTML="X"):-1==e&&0==this.cellValue&&(this.cellValue=-1,this.htmlElement.innerHTML="O")},e}();t.Cell=l},230:(e,t,l)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Check=void 0;var r=l(479);t.Check=function(e){for(var t=new Array,l=0;l<Math.sqrt(e.length);l++)t[l]=[];var n=0;for(l=0;l<Math.sqrt(e.length);l++)for(var o=0;o<Math.sqrt(e.length);o++){var i=e[n];t[o][l]=i,n++}for(l=0;l<t.length;l++){var a=0;for(o=0;o<t.length;o++)-1==(i=t[l][o]).cellValue||1==i.cellValue&&a++,a==t.length&&new r.Win(1)}for(l=0;l<t.length;l++){var c=0,s=0;for(o=0;o<t.length;o++)-1==(i=t[o][l]).cellValue?s++:1==i.cellValue&&c++,c==t.length?new r.Win(1):s==t.length&&new r.Win(-1)}}},479:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Win=void 0;t.Win=function(e){this.wygrany=1==e?"Krzyżyk":"Kółko",console.log("Wygrał: "+this.wygrany)}}},t={};new(function l(r){var n=t[r];if(void 0!==n)return n.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,l),o.exports}(336).Board)(3)})();