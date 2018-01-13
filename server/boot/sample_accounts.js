module.exports = function(app) {
  app.dataSources.sbapi.automigrate('account',function(err) {
    if (err) throw err;

    app.models.account.create([{
      token: 'test-token',
      nickname: 'test-nickname',
      email: 'test-email',
      location: 'test-location',
      creationTime: '2018-01-07 18:23:43'
    }], function(err,accounts){
      if (err) throw err;

      console.log('Models created: \n', accounts);
    });
  });
};
