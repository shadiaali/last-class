(() => {
  //init the vue stuff
  const vm = new Vue({
    el : "#app",

    data : {
      welcomemessage : "Howdy there",

      videodata : [],
      singledata : [],

      videotitle : "",
      videodescription : "",
      videosource : "", 

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

      fetchSingle(e) {
        //debugger;
        this.fetchMovieData(e.currentTarget.dataset.movie);
      },

      loadMovie(e) {
        //debugger;
        e.preventDefault(); //block a page relod anchor tag default behavour

        dataKey = e.currentTarget.getAttribute('href');
        currentData = this.videodata.filter(video => video.vid_path === dataKey);

        this.videotitle = currentData[0].vid_name;
        this.videodescription = currentData[0].vid_desc;
        this.videosource = dataKey;

        this.showdetails = true;

        setTimeout(function(){ window.scrollTo(0, 1200)}, 500);
      },

      fetchMovieData(movie) {
        let url = movie ? `./includes/index.php?movie=${movie}` : './includes/index.php';
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
