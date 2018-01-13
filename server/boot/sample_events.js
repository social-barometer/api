module.exports = function(app) {
  app.dataSources.sbapi.automigrate('sbevent',function(err) {
    if (err) throw err;

    app.models.sbevent.create([{
      creator_id: '91',
      eventName: 'test-name',
      creationTime: '2018-01-07 18:23:43',
      startTime: '2018-01-08 11:32:43',
      endTime: '2018-01-12 17:00:00',
      location: 'test-location'
    }], function(err,sbevents){
      if (err) throw err;

      console.log('Models created: \n', sbevents);
    });
  });
};
