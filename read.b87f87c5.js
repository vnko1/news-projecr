!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){a[e]=t},t.parcelRequired7c6=r),r("kzAJu"),r("9QlH3"),r("egKc1"),r("lkA0f"),r("2WEMS"),r("eGpmk");var s=r("bpxeT"),o=r("8nrFW"),c=r("2TvXO"),i=r("gQOBw"),l=r("l4tBk"),d=r("9IEE9"),u=r("dIGoD"),m=r("f6M8X"),h=(s=r("bpxeT"),c=r("2TvXO"),l=r("l4tBk"),m=r("f6M8X"),u=r("dIGoD"),document.querySelector(".gallery-container")),g=document.getElementById("search-form");function p(e){return f.apply(this,arguments)}function f(){return(f=e(s)(e(c).mark((function t(n){var a,r,s,o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),(0,m.hideModal)(),l.spinner.spin(document.body),a=n.target.elements.searchQuery.value,e.prev=4,e.next=7,u.users.getAllData("readMore");case 7:if(r=e.sent){e.next=12;break}return(0,m.showModal)("Nothing was found matching your search!"),l.spinner.stop(),e.abrupt("return");case 12:s=(0,m.createDataList)(r),(o=s.filter((function(e){return e.descr.toLowerCase().includes(a.toLowerCase().trim())||e.category.toLowerCase().includes(a.toLowerCase().trim())||e.title.toLowerCase().includes(a.toLowerCase().trim())}))).length>0?(y(o),(0,m.addClassesForCoincidencesMarkupAndStoragePages)()):(0,m.showModal)(),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(4),console.log(e.t0),l.spinner.stop();case 21:g.reset(),l.spinner.stop();case 23:case"end":return e.stop()}}),t,null,[[4,17]])})))).apply(this,arguments)}function y(e){var t=e.reduce((function(e,t){return e+='<div class="news-card" news-id="'.concat(t.id,'">\n      <div class="news-card__img">\n        <p class="news-card__theme">').concat(t.category,'</p>\n        <img\n          class="news-card__item"\n          src="').concat(t.img,'"\n          alt="').concat(t.alt?t.alt:"photo",'"\n          loading="lazy"\n          width="395"\n        />\n        <div class="news-card__favorite">\n        <button id =\'').concat(t.id,'\' class="mybtn label-favorite">Add to favorite</button>\n        </div>\n      </div>\n      <h2 class="news-card__info-title">').concat(t.title.limit(50,{ending:""}),'</h2>\n      <p class="news-card__info-text">').concat(t.descr.limit(120),'</p>\n      <div class="news-card__additional">\n        <p class="news-card__date">').concat(t.dateArticle,'</p>\n        <a class="news-card__more" href="').concat(t.link,'" id="').concat(t.id,'" target="_blank" rel="noreferrer noopener"}>Read more</a>\n      </div>\n    </div>')}),"");h.innerHTML=t,h.classList.add("read-search")}var b=(0,i.getAuth)(d.app),v=document.getElementById("ul-gallery"),k=document.getElementById("search-form");function L(){return(L=e(s)(e(c).mark((function t(){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l.spinner.spin(document.body),e.prev=1,e.next=4,u.users.getAllData("readMore");case 4:if(n=e.sent){e.next=12;break}return l.spinner.stop(),"Sorry! You haven't added anything to your read page yet",(0,m.showModal)("Sorry! You haven't added anything to your read page yet"),e.abrupt("return");case 12:w((0,m.createDataList)(n)),(0,m.hideModal)(),(0,m.addClassesForCoincidencesMarkupAndStoragePages)();case 13:e.next=19;break;case 15:e.prev=15,e.t0=e.catch(1),console.error(e.t0),l.spinner.stop();case 19:l.spinner.stop();case 20:case"end":return e.stop()}}),t,null,[[1,15]])})))).apply(this,arguments)}function w(t){var n="",a=t.map((function(e){return e.date})),r=e(o)(a).sort((function(e,t){return t-e})).map((function(e){var t=new Date(e);return"".concat(String(t.getDate()).padStart(2,0),"/").concat(String(t.getMonth()+1).padStart(2,0),"/").concat(String(t.getFullYear()))})).filter((function(e,t,n){return n.indexOf(e)===t})),s=t.reduce((function(e,t){var n={},a=new Date(t.date);return n.date="".concat(String(a.getDate()).padStart(2,0),"/").concat(String(a.getMonth()+1).padStart(2,0),"/").concat(String(a.getFullYear())),n.img=t.img,n.descr=t.descr,n.title=t.title,n.link=t.link,n.alt=t.alt,n.category=t.category,n.id=t.id,n.dateArticle=t.dateArticle,e.push(n),e}),[]),c=!0,i=!1,l=void 0;try{for(var d,u=function(e,t){var a=t.value,r='<li>\n            <div class="date-wrap">\n                <p class="cards-date">'.concat(a,'\n                   <svg class="arrow-read" width="15" height="9" fill="none" xmlns="http://www.w3.org/2000/svg">\n                     <path d="M1.762 9 0 7.287 7.5 0 15 7.287 13.238 9 7.5 3.437 1.763 9Z" fill=""/>\n                   </svg>\n                   <svg class="arrow-read visually-hidden" width="15" height="9" fill="none" xmlns="http://www.w3.org/2000/svg">\n                     <path d="M1.762 0 0 1.713 7.5 9 15 1.713 13.238 0 7.5 5.563 1.763 0Z" fill=""/>\n                   </svg>\n                </p>\n                <div class="clicker"></div>\n            </div>\n            <div class="news-item">\n                <div class="news-wrap">'),o=s.filter((function(e){return e.date===a})).map((function(e){return'<div class="news-card" news-id="'.concat(e.id,'">\n      <div class="news-card__img">\n        <p class="news-card__theme">').concat(e.category,'</p>\n        <img\n          class="news-card__item"\n          src="').concat(e.img,'"\n          alt="').concat(e.alt?e.alt:"photo",'"\n          loading="lazy"\n          width="395"\n        />\n        <div class="news-card__favorite">\n        <button id =\'').concat(e.id,'\' class="mybtn label-favorite">Add to favorite</button>\n        </div>\n      </div>\n      <h2 class="news-card__info-title">').concat(e.title.limit(50,{ending:""}),'</h2>\n      <p class="news-card__info-text">').concat(e.descr.limit(120),'</p>\n      <div class="news-card__additional">\n        <p class="news-card__date">').concat(e.dateArticle,'</p>\n        <a class="news-card__more" href="').concat(e.link,'" id="').concat(e.id,'" target="_blank" rel="noreferrer noopener">Read more</a>\n      </div>\n    </div>')}));n+=r+o.join("")+"</div></div></li>"},m=r[Symbol.iterator]();!(c=(d=m.next()).done);c=!0)u(0,d)}catch(e){i=!0,l=e}finally{try{c||null==m.return||m.return()}finally{if(i)throw l}}v.insertAdjacentHTML("beforeend",n),document.querySelectorAll(".news-item").forEach((function(e){return e.style.maxHeight=e.scrollHeight+"px"})),document.querySelectorAll(".cards-date").forEach((function(e){return e.addEventListener("click",(function(){var t=e.children,n=!0,a=!1,r=void 0;try{for(var s,o=t[Symbol.iterator]();!(n=(s=o.next()).done);n=!0){s.value.classList.toggle("visually-hidden")}}catch(e){a=!0,r=e}finally{try{n||null==o.return||o.return()}finally{if(a)throw r}}var c=e.parentNode.nextElementSibling;"0px"!==c.style.maxHeight?c.style.maxHeight="0px":c.style.maxHeight=c.scrollHeight+"px"}))}))}(0,i.onAuthStateChanged)(b,(function(e){if(e)u.users.updateProfile(e.displayName,e.email,e.uid,e.accessToken),function(){L.apply(this,arguments)}(),k.removeEventListener("submit",m.onFormMessage),k.addEventListener("submit",p);else{(0,m.showModal)("Log in to your account to view your read news!"),k.removeEventListener("submit",p),k.addEventListener("submit",m.onFormMessage)}})),r("4tFZ4");var S={checkbox:document.getElementById("theme"),mobileMenu:document.querySelector(".menu-container"),lightLabel:document.querySelector(".light-label"),darkLabel:document.querySelector(".dark-label"),iconSun:document.querySelector(".icon-sun"),iconMoon:document.querySelector(".icon-moon"),searchInput:document.querySelector(".search-input"),queryBtn:document.querySelector(".query-btn-icon")},_=localStorage.getItem("theme");_&&document.body.classList.add(_+"-theme-site"),"true"===localStorage.getItem("theme-checkbox-state")&&(S.checkbox.checked=!0,document.body.classList.add("dark-theme-site"),S.lightLabel.classList.add("light-theme-site"),S.darkLabel.classList.add("dark-theme-site"),S.iconSun.classList.add("dark-theme-site"),S.iconMoon.classList.add("dark-theme-site"),S.searchInput.classList.add("dark-theme-site"),S.queryBtn.classList.add("dark-theme-site"),S.mobileMenu.classList.add("dark-theme-site")),S.checkbox.addEventListener("change",(function(){document.body.classList.toggle("dark-theme-site"),S.lightLabel.classList.toggle("light-theme-site"),S.darkLabel.classList.toggle("dark-theme-site"),S.iconSun.classList.toggle("dark-theme-site"),S.iconMoon.classList.toggle("dark-theme-site"),S.searchInput.classList.toggle("dark-theme-site"),S.queryBtn.classList.toggle("dark-theme-site"),S.mobileMenu.classList.toggle("dark-theme-site"),function(){var e=document.body.classList.contains("dark-theme-site")?"dark":"light";localStorage.setItem("theme",e);var t=S.checkbox.checked;localStorage.setItem("theme-checkbox-state",t)}()}));var x={checkboxMobile:document.getElementById("mobile-theme"),mobileMenu:document.querySelector(".menu-container"),lightLabel:document.querySelector(".light-label"),darkLabel:document.querySelector(".dark-label"),iconSun:document.querySelector(".icon-sun-mob"),iconMoon:document.querySelector(".icon-moon-mob"),searchInput:document.querySelector(".search-input"),queryBtn:document.querySelector(".query-btn-icon"),menuIcon:document.querySelector(".menu-toggle__icons"),menuCross:document.querySelector(".menu-toggle__icons-cross")},M=localStorage.getItem("theme-mobile");M&&document.body.classList.add(M+"-theme-site"),"true"===localStorage.getItem("theme-checkbox-state-mobile")&&(x.checkboxMobile.checked=!0,document.body.classList.add("dark-theme-site"),x.lightLabel.classList.add("light-theme-site"),x.darkLabel.classList.add("dark-theme-site"),x.iconSun.classList.add("dark-theme-site"),x.iconMoon.classList.add("dark-theme-site"),x.searchInput.classList.add("dark-theme-site"),x.queryBtn.classList.add("dark-theme-site"),x.mobileMenu.classList.add("dark-theme-site"),x.menuIcon.classList.add("dark-theme-site"),x.menuCross.classList.add("dark-theme-site")),x.checkboxMobile.addEventListener("change",(function(){document.body.classList.toggle("dark-theme-site"),x.lightLabel.classList.toggle("light-theme-site"),x.darkLabel.classList.toggle("dark-theme-site"),x.searchInput.classList.toggle("dark-theme-site"),x.iconSun.classList.toggle("dark-theme-site"),x.iconMoon.classList.toggle("dark-theme-site"),x.queryBtn.classList.toggle("dark-theme-site"),x.mobileMenu.classList.toggle("dark-theme-site"),x.menuIcon.classList.toggle("dark-theme-site"),x.menuCross.classList.toggle("dark-theme-site"),function(){var e=document.body.classList.contains("dark-theme-site")?"dark":"light";localStorage.setItem("theme-mobile",e);var t=x.checkboxMobile.checked;localStorage.setItem("theme-checkbox-state-mobile",t)}()}))}();
//# sourceMappingURL=read.b87f87c5.js.map