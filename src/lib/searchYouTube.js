var searchYouTube = (options, callback) => {
  // $.ajax({
  //   url: 'https://www.googleapis.com/youtube/v3/search',
  //   type: 'GET',
  //   options: {'maxResults': '5',
  //             'part': 'snippet',
  //             'q': 'surfing',
  //             'type': 'video',
  //             'videoEmbeddable': 'true',
  //             'key': window.YOUTUBE_API_KEY
  //           }    
  //   success: function (data) {
  //     console.log('fetched data', data);
  //     callback(data); 
  //   },
  //   error: function (data) {
  //     console.error('error', data);
  //   }
  // });
  $.get('https://www.googleapis.com/youtube/v3/search', {
    'maxResults': '5',
    'part': 'snippet',
    'q': options.q,
    'type': 'video',
    'videoEmbeddable': 'true',
    'key': options.key

  .done(){
  }

  .fail(){
  
  }


  })
};



window.searchYouTube = searchYouTube;
