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

const getTrip = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/trips/' + id,
    method: 'GET',
    headers: {
      ContentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateTrip = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/trips/' + data.trip.id,
    method: 'PATCH',
    headers: {
      ContentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  createTrip,
  getTrips,
  getTrip,
  updateTrip
}
