MathJax = {
  chtml: {
    matchFontHeight: false
  }
};

document$.subscribe(function () {
  MathJax.typesetPromise();
});

document.addEventListener("DOMContentLoaded", function() {
    'use strict';
    
    /* 进度条 */
    var current_progress = document.getElementsByClassName("current-progress");
    var dynamic = document.getElementsByClassName("dynamic");
     
     for(let r=dynamic.length-1;r>-1;r--) {
      dynamic[r].style.width=current_progress[r].innerHTML + "%";
        dynamic[r].setAttribute("aria-valuenow",current_progress[r].innerHTML);
        dynamic[r].innerHTML=current_progress[r].innerHTML+ "% Complete";
    }

    /* 图片文字title标注 */
    let allImag = document.querySelectorAll("img")
    if(allImag.length > 0){
        for(const img of allImag) {
            img.setAttribute("loading", "lazy");
            img.setAttribute("width", "250px");
            if(img.title.length > 0){   
                img.style.display = "block";
                var center = img.parentNode.appendChild(document.createElement("center"))
                console.log(center.nodeName);
                var fonte = center.appendChild(document.createElement('font'));
                fonte.setAttribute('size', '2.5');
                var i = fonte.appendChild(document.createElement('i'));
                var a = i.appendChild(document.createElement('a'));
                a.appendChild(document.createTextNode(img.title));
            }
        }
    }

});