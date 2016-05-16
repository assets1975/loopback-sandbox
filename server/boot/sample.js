module.exports = function(app, done) {
  var TestDate = app.models.testDate;
  var currentDate = new Date();

  TestDate.create({myDate: currentDate}, function(err, instance) {
    console.log(instance);
  });

}