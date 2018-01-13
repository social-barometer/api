module.exports = function(app) {
  app.dataSources.sbapi.automigrate('eventPost',function(err) {
    if (err) throw err;

    app.models.eventPost.create([{
      event_id: '1',
      post_url: 'http://asdasd.fi',
      analyzed: 'false'
    }], function(err,eventPosts){
      if (err) throw err;

      console.log('Models created: \n', eventPosts);
    });
  });
};
