async function searchMovieApp(){
  let cari= document.getElementsByTagName("input").value
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=9ce85ed406f6b2e4420bb68fe84eb2a1&query=${cari}&page=1`)
  .then(result => {
      return result.json()
      
  })
  .then(result =>{
      console.log(result.results);
      let movies = result.results;
      movies.forEach(item => {  
          let show= document.getElementById("movie-app")
          show.innerHTML += 
          `
          
          <div class="col ">
          <div class="card h-100 ">
            <img src="https://www.themoviedb.org/t/p/w500${item.poster_path}
            " class="card-img-top" alt="" />
            <div class="row p-2" >
              <h5 class="card-title col-10">${item.title}</h5>
              <p class="card-text col-2"><strong>${item.vote_average}</strong></p>
              <small class="text-muted ">${item.release_date}</small>
            </div>
            
          </>
        </div>
        </div>
          `
      });
  })
}
searchMovieApp()
