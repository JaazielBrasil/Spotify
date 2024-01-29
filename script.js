const searchInput = document.getElementById('search-input');
const resultsArtistis = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('playlist-result');

function requestApi(searchTerm) {
   const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
   fetch(url)
      .then((response) => response.json())
      .then((result) => displayResults(result));
}

function displayResults(result) {
   resultPlaylist.classList.add('hidden');
   const artistName = document.getElementById('artist-name');
   const artistImage = document.getElementById('artist-img');

   result.forEach(element => {
      artistName.innerText = element.name;
      artistImage.src = element.urlImg;
   });

   resultsArtistis.classList.remove('hidden');
}

searchInput.addEventListener('input', function() {
   const searchTerm = searchInput.value.toLowerCase();

   if (searchTerm === '') {
      resultPlaylist.classList.remove('hidden');
      resultsArtistis.classList.add('hidden');
      return;
   }

   requestApi(searchTerm);
});



let trilho = document.getElementById('trilho')
trilho.addEventListener('click', ()=>{
   trilho.classList.toggle('light')
})

function toggleMode () {
   const html = document.documentElement
   html.classList.toggle('light')

   const logospotify = document.querySelector('#spotify')

   if(html.classList.contains('light')) {
      logospotify.setAttribute('src', './src/assets/icons/spotify-verde.png')
   } else {
      logospotify.setAttribute('src', './src/assets/icons/logo-spotify.png')
   }

}