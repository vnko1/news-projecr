var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n),n.register("3F1U7",(function(e,t){var r=n("jKfAL");function i(){return(new Date).getTime()}document.querySelector(".gallery-container").addEventListener("click",(async function(e){if("BUTTON"===e.target.tagName){e.target.parentNode.children[0].classList.toggle("js-favourite-storage"),"Add to favorite"===e.target.parentNode.children[0].textContent?e.target.parentNode.children[0].textContent="Remove from favorite":"Remove from favorite"===e.target.parentNode.children[0].textContent&&(e.target.parentNode.children[0].textContent="Add to favorite");const t=e.target.parentNode.parentNode.parentNode,n={id:t.attributes[1].nodeValue,img:t.children[0].children[1].src,alt:t.children[0].children[1].alt,title:t.children[1].textContent,descr:t.children[2].textContent,dateArticle:t.children[3].children[0].textContent,link:t.children[3].children[1].href,category:t.children[0].children[0].textContent},i=await r.users.getAllData("favourites");let a=null;a=i?i[n.id]:i,function(e,t){e?r.users.deleteData("favourites",t.id):r.users.setData("favourites",t.id,t)}(a,n)}if("Read more"===e.target.textContent){e.target.classList.add("js-read-more-storage");const t=e.target.parentNode.parentNode,n={date:i(),id:t.attributes[1].nodeValue,img:t.children[0].children[1].src,alt:t.children[0].children[1].alt,title:t.children[1].textContent,descr:t.children[2].textContent,dateArticle:t.children[3].children[0].textContent,link:t.children[3].children[1].href,category:t.children[0].children[0].textContent},a=await r.users.getAllData("readMore");let d=null;d=a?a[n.id]:a,function(e,t){e?r.users.deleteData("readMore",t.id):r.users.setData("readMore",t.id,t)}(d,n)}}))}));
//# sourceMappingURL=favorite.287f6228.js.map
