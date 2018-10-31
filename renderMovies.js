// NOTE: using the convention of "buildFoo" for anything that returns HTML
function buildMovie (movie) {
    // TODO: actually write this!
    return `
      <div>
        <h2>${movie.title}</h2>
        <span class='year'>${movie.year}</span>
        <img src="${movie.poster}" alt="Movie poster"></img>
        <span class='rating'>${movie.imdbRating} / 10</span><br>
        <span class= 'rotten'>${movie.rottenTomatoesRating * 100}%</span>
      </div>
    `
  }

function renderMovies(movies) {
    return movies.map(buildMovie).join('')
}

function movies() {
    var content = document.getElementById('content');

    var moviesAbstraction = [
        {
            title: "The Dark Knight",
            year: 2008,
            imdbID: "tt0468569",
            poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.94
        },
        {
            title: "The Dark Knight Rises",
            year: 2012,
            imdbID: "tt1345836",
            poster: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
            imdbRating: 8,
            rottenTomatoesRating: 0.82
        },
        {
            title: "The Incredibles",
            year: 2004,
            imdbID: "tt0317705",
            poster: "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.91
        }
    ]

    content.innerHTML = renderMovies(moviesAbstraction);

}