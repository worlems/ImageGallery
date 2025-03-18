import{a as L,S as x,i as m}from"./assets/vendor-mYwBqgd4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const h of s.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const y=async(e,t=1)=>{const n=new URLSearchParams({key:"49253539-084e8be9ad99f0e2743df86f8",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t});return(await L.get(`https://pixabay.com/api/?${n}`)).data};let u;function w(e){const t=document.querySelector(".gallery"),n=e.map(o=>`<li class="li-item">
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
                </li>`).join("");t.insertAdjacentHTML("beforeend",n)}function S(){const e=document.querySelector(".gallery");e.innerHTML=""}const q=()=>{u=new x(".gallery-link",{captions:!0,captionDelay:250,captionsData:"alt"})},E=()=>{u&&u.refresh()},d=document.querySelector(".form"),a=document.querySelector(".loader"),P=document.querySelector(".gallery"),c=document.querySelector(".load-more");let $=null,l=1,b=15,f="";const i=e=>e.hidden=!0,p=e=>e.hidden=!1,v=e=>m.warning({message:e,position:"topRight"}),g=e=>m.error({message:e,position:"topRight",backgroundColor:"#ef4040",messageColor:"#fafafb",messageSize:"16px",titleColor:"#ffffff",maxWidth:"322px"}),C=e=>m.info({message:e,position:"topRight"}),R=()=>{const e=P.firstElementChild;if(e){const{height:t}=e.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}};async function I(e){if(e.preventDefault(),f=e.target.elements.search.value.trim(),l=1,!f){v("Warning! The form is empty, please fill searching form."),d.reset();return}S(),d.reset(),i(c),p(a);try{const t=await y(f,l);if(t.hits.length===0){g("Sorry, there are no images matching your search query. Please try again!");return}w(t.hits),t.hits.length===b&&p(c),$||q()}catch(t){g("Error!"),console.log("error",t)}finally{i(a)}}async function M(){l+=1,p(a);try{const e=await y(f,l),t=Math.ceil(e.totalHits/b);w(e.hits),E(),R(),l===t&&(C("We're sorry, but you've reached the end of search results."),i(c))}catch{g("Error!")}finally{i(a)}}i(a);i(c);d.addEventListener("submit",I);c.addEventListener("click",M);
//# sourceMappingURL=index.js.map
