(() => {
  //init the vue stuff
  const vm = new Vue({
    el : "#app",

    data : {
      welcomemessage : "Howdy there",

      videodata : [],
      singledata : [],

      showdetails : false

    },

    created : function () {
      //get all of the movie data on a page load
      this.fetchMovieData(null);
    },

    methods : {
      login() {
        //stub
        console.log('login functionality');
      },

      fetchMovieData(movie) {
        url = movie ? `./includes/index.php?movie=${$movie}` : './includes/index.php';
        //this is a ternary statement (shorthand for if/else). left of the : is true, right is false

fetch(url)
.then(res => res.json())
.then(data => {
  console.log(data);

  if (movie) {
    //store data in the single result above
    this.singledata = data;
    //initial data grab store in the videodata array
  } else {
    this.videodata = data;
    }
  })
  .catch(function(error) {
    console.log(error);
  });

}
      }

  });
})();
