var searchYouTube = (options, callback) => {
  // TODO
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: options.key,
    q: options.query,
    maxResult: options.max,
    type: 'video',
    videoEmbaddable: 'true'

  })

  .done(({items}) => {
    if (callback) {
      callback (items);
    }
  })
 
  .fail(({responseJSON}) => {
    responseJSON.error.errors.forEach((err) => console.error(err)); 
  });

};

window.searchYouTube = searchYouTube;
