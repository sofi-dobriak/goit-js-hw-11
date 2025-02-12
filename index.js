import{a as u,S as m,i as d}from"./assets/vendor-DYLXiCJH.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const o={searchForm:document.querySelector(".js-search-form"),submitButton:document.querySelector(".js-submit-button"),gallery:document.querySelector(".js-images-container"),loader:document.querySelector(".loader")};function h(t){return u.get("https://pixabay.com/api/",{params:{q:t,key:"48725247-1ad674d1a078eddb17b21f3f8",image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(i=>i.data).catch(i=>{throw console.error("API Request Error:",i),i})}function p(t){const{webformatURL:r,largeImageURL:a,tags:i,likes:e,views:s,comments:n,downloads:c}=t;return`
        <li class="image-item">
            <a href=${a}>
                <img class="image" src="${r}" alt="${f(i)}">
                <ul class="stat-list">
                    <li class="stat-item">
                        <h3 class="stat-title">Likes</h3>
                        <p class="stat-description">${e}</p>
                    </li>
                    <li class="stat-item">
                        <h3 class="stat-title">Views</h3>
                        <p class="stat-description">${s}</p>
                    </li>
                    <li class="stat-item">
                        <h3 class="stat-title">Comments</h3>
                        <p class="stat-description">${n}</p>
                    </li>
                    <li class="stat-item">
                        <h3 class="stat-title">Downloads</h3>
                        <p class="stat-description">${c}</p>
                    </li>
                </ul>
            </a>
      </li>
      `}function f(t){return[...new Set(t.split(", "))].join(", ")}function g(t){return t.map(p).join(`
`)}const y=new m(".gallery a",{captionsData:"alt"});function L(t){const r=g(t);o.gallery.innerHTML=r,y.refresh()}function b(){o.loader.classList.remove("hidden"),o.gallery.classList.add("hidden")}function l(){o.loader.classList.add("hidden"),o.gallery.classList.remove("hidden")}o.searchForm.addEventListener("submit",t=>{t.preventDefault();const r=t.target.elements["search-images"].value.trim();b(),h(r).then(a=>{a.hits.length===0?(d.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),l()):(L(a.hits),l())}).catch(a=>{console.log(a),l()}),t.target.reset()});
//# sourceMappingURL=index.js.map
