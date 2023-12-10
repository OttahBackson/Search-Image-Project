const apiKey = `Dhxs0jG4N_5nobfl7sTLeYVUVgF8sjjFKmyR9PPqWLo`;
const searchBtn = document.querySelector("#search-form");
const showBtn = document.querySelector("#show-more-btn");
const searchBox = document.querySelector("#search-box");
const searchResult = document.querySelector("#search-result");

let keyword = "";
let page = 1;
async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${apiKey}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();

    if (page === 1) {
        searchResult.innerHTML = "";
    }
    
    const result = data.results;
    result.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showBtn.style.display = "block";
}
searchBtn.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
})
showBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    page ++;
    searchImages();
})