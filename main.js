(()=>{"use strict";const e=()=>{const e=document.querySelector("#content");e.appendChild(function(){const e=document.createElement("div");e.id="TitleDiv";const t=document.createElement("h1");return t.id="Title",t.innerHTML="Ice Cream Shop",e.appendChild(t),e}()),e.appendChild(function(){const e=document.createElement("div");e.id="DescriptionDiv";const t=document.createElement("p");return t.id="Description",t.innerHTML="It's an ice cream shop.  There is not much to describe.  Anyways... here are some pictures of puppies!",e.appendChild(t),e}()),e.appendChild(function(){const e=document.createElement("div");return e.id="photoAlbum",e.appendChild(t("7puppies")),e.appendChild(t("5puppies")),e.appendChild(t("runningPuppies")),e.appendChild(t("dressedUpPuppies")),e}())};function t(e){const t=document.createElement("div");t.classList.toggle("puppyPhotoDiv");const n=document.createElement("img");return n.src=`images/puppies/${e}.jpg`,n.alt=`${e}`,n.classList.toggle("puppyPhoto"),t.appendChild(n),t}function n(e){const t=document.createElement("div");t.classList.toggle("menuItemDiv");const n=document.createElement("img");n.src=`images/iceCream/${e}.jpg`,n.alt=`${e}`,n.classList.toggle("iceCreamPhoto"),t.appendChild(n);const c=document.createElement("div");c.classList.toggle("menuItemDescriptionDiv"),t.appendChild(c);const i=document.createElement("h2");i.innerHTML=e+" - $5",i.classList.toggle("menuItemTitle"),c.appendChild(i);const d=document.createElement("p");return d.innerHTML="The "+e+" Ice Cream Cone is very yummy!",d.classList.toggle("menuItemDescription"),c.appendChild(d),t}!function(){const t=document.querySelector("#container");t.appendChild(function(){const t=document.createElement("div");t.id="tabs";const c=document.createElement("div");c.id="homeTabDiv",t.appendChild(c);const i=document.createElement("button");i.id="homeTabBtn",i.innerHTML="Home",c.appendChild(i);const d=document.createElement("div");d.id="menuTabDiv",t.appendChild(d);const o=document.createElement("button");o.id="menuTabBtn",o.innerHTML="Menu",d.appendChild(o);const s=document.createElement("div");s.id="contactTabDiv",t.appendChild(s);const l=document.createElement("button");return l.id="contactTabBtn",l.innerHTML="Contact",s.appendChild(l),i.classList.toggle("selected"),function(){function t(){for(;content.firstChild;)content.removeChild(content.firstChild);document.querySelector(".selected").classList.toggle("selected")}i.addEventListener("click",(()=>{t(),i.classList.toggle("selected"),e()})),o.addEventListener("click",(()=>{t(),o.classList.toggle("selected"),(()=>{const e=document.querySelector("#content");e.appendChild(n("Vanilla")),e.appendChild(n("Strawberry")),e.appendChild(n("Chocolate"))})()})),l.addEventListener("click",(()=>{t(),l.classList.toggle("selected"),(()=>{const e=document.querySelector("#content");e.appendChild(function(){const e=document.createElement("div");e.id="TitleDiv";const t=document.createElement("h1");return t.id="Title",t.innerHTML="You Will Never Find Us!!",e.appendChild(t),e}()),e.appendChild(function(){const e=document.createElement("div");e.id="DescriptionDiv";const t=document.createElement("p");return t.id="Description",t.innerHTML="Look at the Picture for a Hint!",e.appendChild(t),e}()),e.appendChild(function(){const e=document.createElement("div");e.id="treasureMapPhotoDiv";const t=document.createElement("img");return t.src="images/treasureMap.jpg",t.alt="treasureMap",t.id="treasureMapPhoto",e.appendChild(t),e}())})()}))}(),t}()),t.appendChild(function(){const e=document.createElement("div");return e.id="content",e}()),t.appendChild(function(){const e=document.createElement("div");return e.id="footer",e}()),e()}()})();