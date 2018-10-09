'use strict';
var re = /^[A-Za-z ']+$/;
var re2 = /^[A-Za-z '.0-9]+$/;
var re3 = /^(([^<>()[\]\\.,;:\s@\"]-(\.[^<>()[\]\\.,;:\s@\"]-)*)|(\".-\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]-\.)-[a-zA-Z]{2,}))$/;

module.exports = function(Client) {
  Client.validatesPresenceOf(
      'firstName',
      'lastName',
      'dateOfBirth',
      'address',
      'city',
      'province',
      'phoneNumber',
      'email');

  Client.validatesLengthOf('firstName', {
    min: 2,
    max: 20,
    message: {
      min: 'firstName minimal harus mengandung 2 karakter',
      max: 'firstName maksimal hanya 20 karakter',
    },
  });

  Client.validatesLengthOf('lastName', {
    min: 2,
    max: 20,
    message: {
      min: 'lastName minimal harus mengandung 2 karakter',
      max: 'lastName maksimal hanya 20 karakter',
    },
  });

  Client.validatesFormatOf('firstName', {
    with: re,
    message: 'firstName hanya boleh berisi alphabet dan apostrophe',
  });

  Client.validatesFormatOf('lastName', {
    with: re,
    message: 'lastName hanya boleh berisi alphabet dan apostrophe',
  });

  Client.validatesLengthOf('address', {
    min: 5,
    max: 40,
    message: {
      min: 'address minimal harus mengandung 5 karakter',
      max: 'address maksimal hanya 40 karakter',
    },
  });

  Client.validatesFormatOf('address', {
    with: re2,
    message: 'address hanya boleh berisi alphabet, apostrophe, dan dot',
  });

  Client.validatesLengthOf('city', {
    min: 2,
    max: 40,
    message: {
      min: 'city minimal harus mengandung 2 karakter',
      max: 'city maksimal hanya 40 karakter',
    },
  });

  Client.validatesLengthOf('phoneNumber', {
    min: 5,
    max: 12,
    message: {
      min: 'phoneNumber minimal harus mengandung 5 angka',
      max: 'phoneNumber maksimal hanya 12 angka',
    },
  });

  // Client.validatesFormatOf('email', {
  //   with: re3,
  //   message: 'email tidak valid',
  // });
};
