'use strict';

module.exports = function(app) {
  var clientModel = app.models.client;

  app.get('/test', function(req, resp) {
    const accessToken = req.headers.authorization;
    if (!accessToken) {
      resp.set('Content-Type', 'text/html');
      resp.send(new Buffer('<h2>No Access Token</h2>'));
      return;
    }

    resp.set('Content-Type', 'text/html');
    resp.send(new Buffer('<h2>No Access Token</h2>' + accessToken));
  });
};
