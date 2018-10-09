'use strict';

var lbTable = [
  'User',
  'AccessToken',
  'ACL',
  'RoleMapping',
  'Role',
  'Documents',
];

module.exports = function(server) {
  server.datasources.mydb.autoupdate(lbTable, function(err, resp) {
    if (err) throw err;
    console.log('Database update', server.datasources.mydb.adapter.name);
  });
};
