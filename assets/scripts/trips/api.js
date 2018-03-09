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

const getTrips = function () {
  return $.ajax({
    url: config.apiOrigin + '/trips',
    method: 'GET',
    headers: {
      ContentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createTrip,
  getTrips
}
