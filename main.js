// Napraviti HTML, CSS, Modal +
// Toggle button ADD MOVIE, modal dolazi malo odozgore +
// Neki objekat koji prihvata vrednosti iz modala +
// input isprazni kada popunis +
// Klikom na cancel zatvoriti modal +
// Klikom na add dodati sve na stranu +
// Stilizuj dodat film container +
// svaki novi film treba da dobije id +
// klikom na single film, film se brise +
// prikazi tacnu sliku +
// Alert ako polje rating nema vrednost 1-5 +

// bonus treba da moze da se redja vise filmova

/* pointerEvents da na click mozes da radis i preko pozadine */

let btnMovie = document.querySelector('.btn-movie');
let modalContent = document.querySelector('.modal-content');
let modal = document.querySelector('.modal');
let btnCancel = document.querySelector('.btn-cancel');
let form = document.querySelector('.form');
let modalTitle = document.querySelector('#modalTitle');
let modalURl = document.querySelector('#modalImageUrl');
let modalRating = document.querySelector('#modalRating');
let movieContainer = document.querySelector('.movie-container');

const movies = [];

btnMovie.addEventListener('click', () => {
  modalContent.classList.toggle('hide');
});

btnCancel.addEventListener('click', () => {
  modalContent.style.pointerEvents = 'auto';
  modalContent.classList.add('hide');
});

form.addEventListener('submit', e => {
  e.preventDefault();

  let singleMovie = {
    id: Math.random(),
    title: modalTitle.value,
    url: modalURl.value,
    rating: modalRating.value
  };

  movies.push(singleMovie);

  displayMovie(movies);
  messageRating(singleMovie);
  
 clearFields(modalTitle, modalURl,modalRating)
  modalContent.classList.add('hide');  

});

function displayMovie(movies) {
  console.log(movies);
  movies.map(movie => {
    movieContainer.innerHTML = `
       <h4 class='mb-5'>Your personal movie database</h4>
            <div class='content'>
        
            <img src='${movie.url}' class='responsive-img' 
               alt='' />
               <div class='content-info'>

           <h1 class='movie-title'>${movie.title}</h1>
        
            <h5 class='movie-rating'> ${movie.rating} / 5</h5>
               </div>
           
            </div>
       
       `;
  });

  let content = movieContainer.querySelector('.content');

  deleteMovie(content);
}
function messageRating(singleMovie) {

  
  if(singleMovie.title.trim() === '' || singleMovie.url.trim() === '' || singleMovie.rating.trim() === ''
      || ratingValue < 1 || ratingValue > 5
  ){
 
    alert('Popuni sva polja(rating mora biti izmedju 1 i 5)');
    window.location.reload()
 
}
}
function deleteMovie(content) {
  content.addEventListener('click', function(e) {
    e.target.parentElement.remove();
  });
}

function clearFields(modalTitle,modalURl,modalRating){

    modalTitle.value = ''
    modalURl.value=''
    modalRating.value=''
}