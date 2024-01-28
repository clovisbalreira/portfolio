const resultArtist = document.getElementById("result-artist");
const playlistContainer = document.getElementById("result-playlists");
const searchInput = document.getElementById("search-input");

function requestApi(searchTerm) {
  /* fetch(`http://localhost:3000/artists?name_like=${searchTerm}`)
  .then((response) => response.json())
  .then((results) => displayResults(results)); */
  //console.log(artists)
  displayResults(searchTerm, artists)
}

function displayResults(searchTerm, results) {
  hidePlaylists();
  const artistImage = document.getElementById("artist-img");
  const artistName = document.getElementById("artist-name");
  const artistVideo = document.querySelector('iframe')

  results = Results(searchTerm, results)

  results.forEach((element) => {
    console.log(artistVideo)
    artistVideo.src = element.urlVideo;
    artistImage.src = element.urlImg;
    artistName.innerText = element.name;
  });
  resultArtist.classList.remove("hidden");
}

function Results(searchTerm, results){
  const artists = results
    .filter(artist => artist.name.toLowerCase().includes(searchTerm))
    .map(artist => ({ name: artist.name, genre: artist.genre, urlImg: artist.urlImg, urlVideo: artist.urlVideo }));
  return artists
}

function hidePlaylists() {
  playlistContainer.classList.add("hidden");
}

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm === "") {
    resultArtist.classList.add("hidden");
    playlistContainer.classList.remove("hidden");
    return;
  }
  requestApi(searchTerm);
});
