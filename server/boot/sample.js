'use strict';

module.exports = function sample(server, done) {
  var filter = {
    where: {
      createdAt: {
        between: [
          new Date('2017-03-27T00:00:00.000Z'),
          new Date('2017-03-27T23:59:59.999Z'),
        ],
      },
    },
  };
  var Note = server.models.Note;
  Note.create({title: 'sample', createdAt: new Date('2017-03-27T10:10:00.000Z')}, function(err, n) {
    console.log(`${n.createdAt} get created`);
    Note.find(filter, function(err, r) {
      console.log(r);
    });
    done();
  });
};
