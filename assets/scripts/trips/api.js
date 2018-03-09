'use strict'

const config = require('../config')
const store = require('../store')

const createTrip = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/trips',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  createTrip
}
