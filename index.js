import{a as x,i as g,S as q}from"./assets/vendor-Dn3QujGD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const y="49253539-084e8be9ad99f0e2743df86f8",w=async(e,t=1)=>{const n=new URLSearchParams({key:y,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t});return(await x.get(`https://pixabay.com/api/?key=${y}&q=${n}`)).data};function b(e){const t=document.querySelector(".gallery"),n=e.map(o=>`<li class="li-item">
                    <a class="gallery-link" href="${o.largeImageURL}">
                    <img class="gallery-img" src="${o.webformatURL}" alt="${o.tags}" width="360">
                    </a>
                <ul class="image-descr">
                    <li class>
                        <h2 class="title">Likes</h2>
                        <p>${o.likes}</p>
                    </li>
                    <li>
                        <h2 class="title">Views</h2>
                        <p>${o.views}</p>
                    </li>
                    <li>
                        <h2 class="title">Comments</h2>
                        <p>${o.comments}</p>
                    </li>
                    <li>
                        <h2 class="title">Downloads</h2>
                        <p>${o.downloads}</p>
                    </li>
                </ul>
                </li>`).join("");t.insertAdjacentHTML("beforeend",n)}function E(){const e=document.querySelector(".gallery");e.innerHTML=""}const d=document.querySelector(".form"),l=document.querySelector(".loader"),P=document.querySelector(".gallery"),c=document.querySelector(".load-more");let h=null,a=1,L=15,f="";const i=e=>e.hidden=!0,p=e=>e.hidden=!1,$=e=>g.warning({message:e,position:"topRight"}),m=e=>g.error({message:e,position:"topRight",backgroundColor:"#ef4040",messageColor:"#fafafb",messageSize:"16px",titleColor:"#ffffff",maxWidth:"322px"}),v=e=>g.info({message:e,position:"topRight"}),C=()=>{h=new q(".gallery-link",{captionsData:"alt",captionDelay:250})},S=()=>{h&&h.refresh()},I=()=>{const e=P.firstElementChild;if(e){const{height:t}=e.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}};async function R(e){if(e.preventDefault(),f=e.target.elements.search.value.trim(),a=1,!f){$("Warning! The form is empty, please fill searching form."),d.reset();return}E(),d.reset(),i(c),p(l);try{const t=await w(f,a);if(t.hits.length===0){m("Sorry, there are no images matching your search query. Please try again!");return}b(t.hits),t.hits.length===L&&p(c),h?S():C()}catch{m("Error!")}finally{i(l)}}async function M(){a+=1,p(l);try{const e=await w(f,a),t=Math.ceil(e.totalHits/L);b(e.hits),S(),I(),a===t&&(v("We're sorry, but you've reached the end of search results."),i(c))}catch{m("Error!")}finally{i(l)}}i(l);i(c);d.addEventListener("submit",R);c.addEventListener("click",M);
//# sourceMappingURL=index.js.map
