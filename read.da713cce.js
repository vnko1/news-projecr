!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r),r("l1mIK"),r("hkain"),r("dHwvx"),r("4xiXN");var s=r("8nrFW"),o=r("fivgP"),i=r("bpdv1"),c=r("79A4R"),d=document.getElementById("ul-gallery"),l=document.querySelector(".spinner-container");!function(){i.spinner.spin(document.body);try{var t=localStorage.getItem("read more"),a=JSON.parse(t);if(null===a)return void i.spinner.stop();0===a.length?(i.spinner.stop(),o.Report.info("There are no news You have read")):(!function(t){var a="",n=t.map((function(e){return e.date})),r=e(s)(n).sort((function(e,t){return t-e})).map((function(e){var t=new Date(e);return"".concat(String(t.getDate()).padStart(2,0),"/").concat(String(t.getMonth()+1).padStart(2,0),"/").concat(String(t.getFullYear()))})).filter((function(e,t,a){return a.indexOf(e)===t})),o=t.reduce((function(e,t){var a={},n=new Date(t.date);return a.date="".concat(String(n.getDate()).padStart(2,0),"/").concat(String(n.getMonth()+1).padStart(2,0),"/").concat(String(n.getFullYear())),a.img=t.img,a.descr=t.descr,a.title=t.title,a.link=t.link,a.alt=t.alt,a.category=t.category,a.id=t.id,a.dateArticle=t.dateArticle,e.push(a),e}),[]);i.spinner.spin(l);var c=!0,u=!1,m=void 0;try{for(var h,g=function(e,t){var n=t.value,r='<li>\n            <div class="date-wrap">\n                <p class="cards-date">'.concat(n,'\n                   <svg class="arrow-read" width="15" height="9" fill="none" xmlns="http://www.w3.org/2000/svg">\n                     <path d="M1.762 9 0 7.287 7.5 0 15 7.287 13.238 9 7.5 3.437 1.763 9Z" fill=""/>\n                   </svg>\n                   <svg class="arrow-read arrow-read-js visually-hidden" width="15" height="9" fill="none" xmlns="http://www.w3.org/2000/svg">\n                     <path d="M1.762 0 0 1.713 7.5 9 15 1.713 13.238 0 7.5 5.563 1.763 0Z" fill=""/>\n                   </svg>\n                </p>\n                <div class="clicker"></div>\n            </div>\n            <div class="news-item">\n                <div class="news-wrap">'),s=o.filter((function(e){return e.date===n})).map((function(e){return'<div class="news-card" news-id="'.concat(e.id,'">\n      <div class="news-card__img">\n        <p class="news-card__theme">').concat(e.category,'</p>\n        <img\n          class="news-card__item"\n          src="').concat(e.img,'"\n          alt="').concat(e.alt?e.alt:"photo",'"\n          loading="lazy"\n          width="395"\n        />\n        <div class="news-card__favorite">\n        <button id =\'').concat(e.id,'\' class="mybtn label-favorite">Add to favorite</button>\n        </div>\n      </div>\n      <h2 class="news-card__info-title">').concat(e.title.limit(50,{ending:""}),'</h2>\n      <p class="news-card__info-text">').concat(e.descr.limit(120),'</p>\n      <div class="news-card__additional">\n        <p class="news-card__date">').concat(e.dateArticle,'</p>\n        <a class="news-card__more" href="').concat(e.link,'" id="').concat(e.id,'" target="_blank" rel="noreferrer noopener">Read more</a>\n      </div>\n    </div>')}));a+=r+s.join("")+"</div></div></li>"},k=r[Symbol.iterator]();!(c=(h=k.next()).done);c=!0)g(k,h)}catch(e){u=!0,m=e}finally{try{c||null==k.return||k.return()}finally{if(u)throw m}}d.innerHTML=a,i.spinner.stop(),document.querySelectorAll(".news-item").forEach((function(e){return e.style.maxHeight=e.scrollHeight+"px"})),document.querySelectorAll(".cards-date").forEach((function(e){return e.addEventListener("click",(function(){var t=e.children,a=!0,n=!1,r=void 0;try{for(var s,o=t[Symbol.iterator]();!(a=(s=o.next()).done);a=!0){s.value.classList.toggle("visually-hidden")}}catch(e){n=!0,r=e}finally{try{a||null==o.return||o.return()}finally{if(n)throw r}}var i=e.parentNode.nextElementSibling;"0px"!==i.style.maxHeight?i.style.maxHeight="0px":i.style.maxHeight=i.scrollHeight+"px"}))}))}(a),i.spinner.stop())}catch(e){console.error(e),i.spinner.stop()}}(),(0,c.addClassesForCoincidencesMarkupAndStoragePages)();var u={checkbox:document.getElementById("theme"),mobileMenu:document.querySelector(".menu-container"),lightLabel:document.querySelector(".light-label"),darkLabel:document.querySelector(".dark-label"),iconSun:document.querySelector(".icon-sun"),iconMoon:document.querySelector(".icon-moon"),searchInput:document.querySelector(".search-input"),queryBtn:document.querySelector(".query-btn-icon"),arrowRead:document.querySelector(".arrow-read"),arrowReadHide:document.querySelector(".arrow-read-js")},m=localStorage.getItem("theme");m&&document.body.classList.add(m+"-theme-site"),"true"===localStorage.getItem("theme-checkbox-state")&&(u.checkbox.checked=!0,document.body.classList.add("dark-theme-site"),u.lightLabel.classList.add("light-theme-site"),u.darkLabel.classList.add("dark-theme-site"),u.iconSun.classList.add("dark-theme-site"),u.iconMoon.classList.add("dark-theme-site"),u.searchInput.classList.add("dark-theme-site"),u.queryBtn.classList.add("dark-theme-site"),u.mobileMenu.classList.add("dark-theme-site"),u.arrowRead.classList.add("dark-theme-site"),u.arrowReadHide.classList.add("dark-theme-site")),u.checkbox.addEventListener("change",(function(){document.body.classList.toggle("dark-theme-site"),u.lightLabel.classList.toggle("light-theme-site"),u.darkLabel.classList.toggle("dark-theme-site"),u.iconSun.classList.toggle("dark-theme-site"),u.iconMoon.classList.toggle("dark-theme-site"),u.searchInput.classList.toggle("dark-theme-site"),u.queryBtn.classList.toggle("dark-theme-site"),u.mobileMenu.classList.toggle("dark-theme-site"),u.arrowRead.classList.toggle("dark-theme-site"),u.arrowReadHide.classList.toggle("dark-theme-site"),function(){var e=document.body.classList.contains("dark-theme-site")?"dark":"light";localStorage.setItem("theme",e);var t=u.checkbox.checked;localStorage.setItem("theme-checkbox-state",t)}()}));var h={checkboxMobile:document.getElementById("mobile-theme"),mobileMenu:document.querySelector(".menu-container"),lightLabel:document.querySelector(".light-label"),darkLabel:document.querySelector(".dark-label"),iconSun:document.querySelector(".icon-sun-mob"),iconMoon:document.querySelector(".icon-moon-mob"),searchInput:document.querySelector(".search-input"),queryBtn:document.querySelector(".query-btn-icon"),menuIcon:document.querySelector(".menu-toggle__icons"),menuCross:document.querySelector(".menu-toggle__icons-cross"),arrowRead:document.querySelector(".arrow-read"),arrowReadHide:document.querySelector(".arrow-read-js")},g=localStorage.getItem("theme-mobile");g&&document.body.classList.add(g+"-theme-site"),"true"===localStorage.getItem("theme-checkbox-state-mobile")&&(h.checkboxMobile.checked=!0,document.body.classList.add("dark-theme-site"),h.lightLabel.classList.add("light-theme-site"),h.darkLabel.classList.add("dark-theme-site"),h.iconSun.classList.add("dark-theme-site"),h.iconMoon.classList.add("dark-theme-site"),h.searchInput.classList.add("dark-theme-site"),h.queryBtn.classList.add("dark-theme-site"),h.mobileMenu.classList.add("dark-theme-site"),h.menuIcon.classList.add("dark-theme-site"),h.menuCross.classList.add("dark-theme-site"),h.arrowRead.classList.add("dark-theme-site"),h.arrowReadHide.classList.add("dark-theme-site")),h.checkboxMobile.addEventListener("change",(function(){document.body.classList.toggle("dark-theme-site"),h.lightLabel.classList.toggle("light-theme-site"),h.darkLabel.classList.toggle("dark-theme-site"),h.searchInput.classList.toggle("dark-theme-site"),h.iconSun.classList.toggle("dark-theme-site"),h.iconMoon.classList.toggle("dark-theme-site"),h.queryBtn.classList.toggle("dark-theme-site"),h.mobileMenu.classList.toggle("dark-theme-site"),h.menuIcon.classList.toggle("dark-theme-site"),h.menuCross.classList.toggle("dark-theme-site"),h.arrowRead.classList.toggle("dark-theme-site"),h.arrowReadHide.classList.toggle("dark-theme-site"),function(){var e=document.body.classList.contains("dark-theme-site")?"dark":"light";localStorage.setItem("theme-mobile",e);var t=h.checkboxMobile.checked;localStorage.setItem("theme-checkbox-state-mobile",t)}()}));c=r("79A4R");var k=document.getElementById("search-form"),y=document.querySelector(".gallery-container");k.addEventListener("submit",(function(e){e.preventDefault(),(0,c.hideModal)();var t=e.target.elements.searchQuery.value,a=(0,c.getStorageList)("read more").filter((function(e){return e.descr.toLowerCase().includes(t.toLowerCase().trim())||e.category.toLowerCase().includes(t.toLowerCase().trim())||e.title.toLowerCase().includes(t.toLowerCase().trim())}));a.length>0?(!function(e){var t=e.reduce((function(e,t){return e+='<div class="news-card" news-id="'.concat(t.id,'">\n      <div class="news-card__img">\n        <p class="news-card__theme">').concat(t.category,'</p>\n        <img\n          class="news-card__item"\n          src="').concat(t.img,'"\n          alt="').concat(t.alt?t.alt:"photo",'"\n          loading="lazy"\n          width="395"\n        />\n        <div class="news-card__favorite">\n        <button id =\'').concat(t.id,'\' class="mybtn label-favorite">Add to favorite</button>\n        </div>\n      </div>\n      <h2 class="news-card__info-title">').concat(t.title.limit(50,{ending:""}),'</h2>\n      <p class="news-card__info-text">').concat(t.descr.limit(120),'</p>\n      <div class="news-card__additional">\n        <p class="news-card__date">').concat(t.dateArticle,'</p>\n        <a class="news-card__more" href="').concat(t.link,'" id="').concat(t.id,'" target="_blank" rel="noreferrer noopener"}>Read more</a>\n      </div>\n    </div>')}),"");y.innerHTML=t,y.classList.add("read-search")}(a),(0,c.addClassesForCoincidencesMarkupAndStoragePages)()):(0,c.showModal)();k.reset()}))}();
//# sourceMappingURL=read.da713cce.js.map
