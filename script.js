const APIURL = "https://api.jikan.moe/v4/anime";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

getMovies(APIURL);
async function getMovies(url) {
  const resp = await fetch(url);
  const respData = await resp.json();

  showMovies(respData.data);
}

function showMovies(movies) {
  movies.map((movie) => {
    const { images, title, favorites, synopsis } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
              <img
                  src="${images.jpg.image_url}"
                  alt="${title}"
              />
                <div class="movie-info">
              <h3 class="heading">${title}</h3>
                              <span class="info" 
                              >${favorites}</span>
                          </div>
                                      <div class="overview">
                                          <h3>Overview:</h3>
                                          <p class="text">${synopsis}</p>
                
              </div>
          `;

    main.appendChild(movieEl);
  });
}
