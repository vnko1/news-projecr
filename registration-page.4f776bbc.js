!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var a={id:e,exports:{}};return r[e]=a,n.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){t[e]=n},n.parcelRequired7c6=a);var o=a("bpxeT"),i=a("2TvXO"),u=a("gQOBw"),s=a("9IEE9"),l=a("fivgP"),p=a("l4tBk"),d=(0,u.getAuth)(s.app);function c(){return(c=e(o)(e(i).mark((function n(r,t,a){var o,s;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.createUserWithEmailAndPassword)(d,t,a);case 3:return o={displayName:r},e.next=6,(0,u.updateProfile)(d.currentUser,o);case 6:p.spinner.stop(),window.location.href="./index.html",e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),s=e.t0.message,p.spinner.stop(),l.Report.failure(s);case 15:case"end":return e.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}document.querySelector(".reg-form").addEventListener("submit",(function(e){e.preventDefault(),p.spinner.spin(document.body);var n=e.target.elements,r=n.name,t=n.email,a=n.password;!function(e,n,r){c.apply(this,arguments)}(r.value,t.value,a.value)}))}();
//# sourceMappingURL=registration-page.4f776bbc.js.map
