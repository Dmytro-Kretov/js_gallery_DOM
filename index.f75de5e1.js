"use strict";
const largeImg = document.getElementById("largeImg");
const thumbs = document.getElementById("thumbs");
thumbs.addEventListener("click", (e)=>{
    e.preventDefault();
    let target = e.target;
    if (target.tagName === "IMG") target = target.parentElement;
    if (target.tagName === "A") largeImg.src = target.href;
});

//# sourceMappingURL=index.f75de5e1.js.map
