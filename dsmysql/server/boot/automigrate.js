'use strict';

var lbTables = [
  'User',
  'AccessToken',
  'ACL',
  'RoleMapping',
  'Role',
  'pengguna',
];

module.exports = function(server) {
  server.dataSources.mydb.autoupdate(lbTables, function(err, resp) {
    if (err) throw err;

    console.log('Models created: \n', server.dataSources.mydb.adapter.name);
  });
};
