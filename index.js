import{a as y,S as x,i as m}from"./assets/vendor-mYwBqgd4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function l(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=l(r);fetch(r.href,o)}})();y.defaults.baseURL="https://pixabay.com/api/";const b=async function(e,t){const{data:l}=await y.get("",{params:{key:"49253539-084e8be9ad99f0e2743df86f8",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}});return l};let h;function w(e){const t=document.querySelector(".gallery"),l=e.map(s=>`<li class="li-item">
                    <a class="gallery-link" href="${s.largeImageURL}">
                    <img class="gallery-img" src="${s.webformatURL}" alt="${s.tags}" width="360">
                    </a>
                <ul class="image-descr">
                    <li class>
                        <h2 class="title">Likes</h2>
                        <p>${s.likes}</p>
                    </li>
                    <li>
                        <h2 class="title">Views</h2>
                        <p>${s.views}</p>
                    </li>
                    <li>
                        <h2 class="title">Comments</h2>
                        <p>${s.comments}</p>
                    </li>
                    <li>
                        <h2 class="title">Downloads</h2>
                        <p>${s.downloads}</p>
                    </li>
                </ul>
                </li>`).join("");t.insertAdjacentHTML("beforeend",l)}function S(){const e=document.querySelector(".gallery");e.innerHTML=""}const q=()=>{h=new x(".gallery-link",{captions:!0,captionDelay:250,captionsData:"alt"})},E=()=>{h&&h.refresh()},d=document.querySelector(".form"),a=document.querySelector(".loader"),v=document.querySelector(".gallery"),c=document.querySelector(".load-more");let P=null,n=1,L=15,f="";const i=e=>e.hidden=!0,g=e=>e.hidden=!1,$=e=>m.warning({message:e,position:"topRight"}),p=e=>m.error({message:e,position:"topRight",backgroundColor:"#ef4040",messageColor:"#fafafb",messageSize:"16px",titleColor:"#ffffff",maxWidth:"322px"}),C=e=>m.info({message:e,position:"topRight"}),R=()=>{const e=v.firstElementChild;if(e){const{height:t}=e.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}};async function I(e){if(e.preventDefault(),f=e.target.elements.search.value.trim(),n=1,!f){$("Warning! The form is empty, please fill searching form."),d.reset();return}S(),d.reset(),i(c),g(a);try{const t=await b(f,n);if(t.hits.length===0){p("Sorry, there are no images matching your search query. Please try again!");return}w(t.hits),t.hits.length===L&&g(c),P||q()}catch(t){p("Error!"),console.log("error",t)}finally{i(a)}}async function M(){n+=1,g(a);try{const e=await b(f,n),t=Math.ceil(e.totalHits/L);w(e.hits),E(),R(),n===t&&(C("We're sorry, but you've reached the end of search results."),i(c))}catch{p("Error!")}finally{i(a)}}i(a);i(c);d.addEventListener("submit",I);c.addEventListener("click",M);
//# sourceMappingURL=index.js.map
