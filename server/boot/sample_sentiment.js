module.exports = function(app) {
  app.dataSources.sbapi.automigrate('sentiment',function(err) {
    if (err) throw err;

    app.models.sentiment.create([{
      event_id: '1',
      timestamp: '2018-01-13 03:56:43',
      happiness: '0.912351324'
    }], function(err,sentiments){
      if (err) throw err;

      console.log('Models created: \n', sentiments);
    });
  });
};
