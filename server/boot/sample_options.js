module.exports = function(app) {
  app.dataSources.sbapi.automigrate('sboptions',function(err) {
    if (err) throw err;

    app.models.sboptions.create([{
      option_name: 'test-option',
      option_value: 'test-value',
      user: 'all'
    }], function(err,sboptions){
      if (err) throw err;

      console.log('Models created: \n', sboptions);
    });
  });
};
