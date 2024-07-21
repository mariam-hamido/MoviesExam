export class Display {
    constructor() {}

    displayMovies(data) {
        let moviesBox = ``;

        for (let i = 0; i < data.length; i++) {
            const movie = data[i];
            const voteAverage = movie.vote_average.toString().slice(0, 3);
            moviesBox += `
                <div class="col-md-4">
                    <div onclick="" class="movie position-relative overflow-hidden rounded-2 cursor-pointer">
                        <img class="w-100" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" id="Movie-img">
                        <div class="over-layer position-absolute d-flex flex-column justify-content-lg-start py-5 px-3 text-light p-2">
                            <h1 class="movieTitle text-center text-uppercase left-side">${movie.title}</h1>
                            <p class="movie-desc left-side">${movie.overview}</p>
                            <p class="date left-side"><span>Release date: <span>${movie.release_date}</span></span></p>
                            <h3 class="rate left-side">
                                ${this.generateStars(movie.vote_average)}
                            </h3>
                            <h3 class="vote left-side ">${voteAverage}</h3>
                        </div>
                    </div>
                </div>
            `;
        }

        document.getElementById('row-data').innerHTML = moviesBox;
    }

    generateStars(voteAverage) {
        const fullStars = Math.floor(voteAverage / 2);
        const halfStar = voteAverage % 2 >= 1 ? 1 : 0;
        

        return `
            ${'<i class="fa-solid fa-star text-warning fs-6"></i>'.repeat(fullStars)}${halfStar ? '<i class="fa-regular fa-star-half-stroke text-warning fs-6"></i>' : ''}
            
        `;
    }
}










// export class Display {
//     constructor() {}

//     displayMovies(data) {
//         let moviesBox = ``;

//         for (let i = 0; i < data.length; i++) {
//             moviesBox += `
            
//                 <div class="col-md-4">
//                     <div onclick="" class="movie position-relative overflow-hidden rounded-2 cursor-pointer">
//                         <img class="w-100" src="assets/xbKFv4KF3sVYuWKllLlwWDmuZP7.jpg" alt="" id="Movie-img">
//                         <div class="over-layer position-absolute d-flex flex-column justify-content-lg-start py-5 px-3 text-light p-2">
//                             <h1 class="movieTitle text-center text-uppercase left-side">IF</h1>
//                             <p class="movie-desc left-side">meme nono mama Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, laboriosam?</p>
//                             <p class="date left-side"><span>Release date: <span>2024-06-11</span></span></p>
//                             <h3 class="rate left-side">
//                                 <i class="fa-solid fa-star text-warning fs-6"></i>
//                                 <i class="fa-solid fa-star text-warning fs-6"></i>
//                                 <i class="fa-solid fa-star text-warning fs-6"></i>
//                                 <i class="fa-regular fa-star-half-stroke text-warning fs-6"></i>
//                             </h3>
//                             <h3 class="vote left-side ">7.7</h3>
//                         </div>
//                     </div>
//                 </div>
            
//             `;
//         }

//         document.getElementById('row-data').innerHTML = moviesBox;
//     }
// }




// export class display{
//     constructor(){

//     }

//     displaymovies(data){

//         let moviesBox=``

//         for(let i=0;i<data.length;i++){
//             moviesBox+=`
//             <div class="row py-5 g-4 " id="row-data">
//                 <div class="col-md-4">
//                     <div onclick="" class="movie position-relative overflow-hidden rounded-2 cursor-pointer">
//                         <img class="w-100" src="assets/xbKFv4KF3sVYuWKllLlwWDmuZP7.jpg" alt="" id="Movie-img">
//                         <div class="over-layer position-absolute d-flex flex-column justify-content-lg-start py-5 px-3 text-light p-2">
//                             <h1 class="movieTitle text-center text-uppercase left-side">IF</h1>
//                             <p class="movie-desc left-side">meme nono mama Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, laboriosam?</p>
//                             <p class="date left-side"><span>Release date: <span>2024-06-11</span></span></p>
//                             <h3 class="rate left-side">
//                                 <i class="fa-solid fa-star text-warning fs-6"></i>
//                                 <i class="fa-solid fa-star text-warning fs-6"></i>
//                                 <i class="fa-solid fa-star text-warning fs-6"></i>
//                                 <i class="fa-regular fa-star-half-stroke text-warning fs-6"></i>
//                             </h3>
//                             <h3 class="vote left-side ">7.7</h3>
//                         </div>
    
//                     </div>
//                 </div>
    
//             </div>
//             `
//         }
//         document.getElementById('row-data').innerHTML = moviesBox;
//         }

        

// }
