'use strict';

var re = /^[A-Za-z ']+$/;

module.exports = function(Pengguna) {
  Pengguna.validatesPresenceOf('nama', 'alamat', 'gender');
  Pengguna.validatesLengthOf('nama', {
    min: 2,
    max: 25,
    message: {
      min: 'Nama minimal harus mengandung 2 karakter',
      max: 'Nama maksimal hanya 25 karakter',
    },
  });
  Pengguna.validatesFormatOf('nama', {
    with: re,
    message: 'Nama hanya boleh alphabet',
  });
  Pengguna.validatesInclusionOf('gender', {in: ['pria', 'wanita'],
    message: 'gender hanya diisi pria/wanita',
  });
};
