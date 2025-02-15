import"./assets/styles-D6MDfsmO.js";import{a as h,S as d,i as u}from"./assets/vendor-BDaiwwc1.js";const s={searchForm:document.querySelector(".js-search-form"),submitButton:document.querySelector(".js-submit-button"),gallery:document.querySelector(".js-images-container"),loader:document.querySelector(".loader")};function g(e){return h.get("https://pixabay.com/api/",{params:{q:e,key:"48725247-1ad674d1a078eddb17b21f3f8",image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(i=>i.data).catch(i=>{throw console.error("API Request Error:",i),i})}function p(e){const{webformatURL:a,largeImageURL:t,tags:i,likes:o,views:n,comments:c,downloads:m}=e;return`
        <li class="image-item">
            <a href=${t}>
                <img class="image" src="${a}" alt="${f(i)}">
                <ul class="stat-list">
                    <li class="stat-item">
                        <h3 class="stat-title">Likes</h3>
                        <p class="stat-description">${o}</p>
                    </li>
                    <li class="stat-item">
                        <h3 class="stat-title">Views</h3>
                        <p class="stat-description">${n}</p>
                    </li>
                    <li class="stat-item">
                        <h3 class="stat-title">Comments</h3>
                        <p class="stat-description">${c}</p>
                    </li>
                    <li class="stat-item">
                        <h3 class="stat-title">Downloads</h3>
                        <p class="stat-description">${m}</p>
                    </li>
                </ul>
            </a>
      </li>
      `}function f(e){return[...new Set(e.split(", "))].join(", ")}function y(e){return e.map(p).join(`
`)}const L=new d(".gallery a",{captionsData:"alt"});function S(e){l();const a=y(e);s.gallery.innerHTML=a,L.refresh(),r()}function l(){s.loader.classList.remove("hidden"),s.gallery.classList.add("hidden")}function r(){s.loader.classList.add("hidden"),s.gallery.classList.remove("hidden")}s.searchForm.addEventListener("submit",e=>{e.preventDefault();const a=e.target.elements["search-images"].value.trim();l(),s.gallery.innerHTML="",g(a).then(t=>{t.hits.length===0?(u.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),r()):(S(t.hits),r())}).catch(t=>{console.log(t)}),e.target.reset()});
//# sourceMappingURL=index.js.map
