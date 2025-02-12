import{a as l,i as m}from"./assets/vendor-CqoJTpN7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const n={searchForm:document.querySelector(".js-search-form"),submitButton:document.querySelector(".js-submit-button"),imagesContainer:document.querySelector(".js-images-container")};function u(s){return l.get("https://pixabay.com/api/",{params:{q:s,key:"48725247-1ad674d1a078eddb17b21f3f8",image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(i=>i.data).catch(i=>{throw console.error("API Request Error:",i),i})}function p(s){const{webformatURL:r,largeImageURL:a,tags:i,likes:e,views:t,comments:o,downloads:c}=s;return`
    <li class="image-item">
        <img class="image" src="${r}" alt="${i}">
        <ul class="stat-list">
          <li class="stat-item">
            <h3 class="stat-title">Likes</h3>
            <p class="stat-description">${e}</p>
          </li>
          <li class="stat-item">
            <h3 class="stat-title">Views</h3>
            <p class="stat-description">${t}</p>
          </li>
          <li class="stat-item">
            <h3 class="stat-title">Comments</h3>
            <p class="stat-description">${o}</p>
          </li>
          <li class="stat-item">
            <h3 class="stat-title">Downloads</h3>
            <p class="stat-description">${c}</p>
          </li>
        </ul>
      </li>`}function d(s){return s.map(p).join(`
`)}function f(s){const r=d(s);n.imagesContainer.insertAdjacentHTML("afterbegin",r)}n.searchForm.addEventListener("submit",s=>{s.preventDefault();const r=s.target.elements["search-images"].value.trim();u(r).then(a=>{a.hits.length===0?m.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}):f(a.hits)}).catch(a=>{console.log(a)}),s.target.reset()});
//# sourceMappingURL=index.js.map
