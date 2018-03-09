'use strict'

const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

const onCreateTrip = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createTrip(data)
    .then(ui.createTripSuccess)
    .catch(ui.createTripFailure)
}

const onGetTrips = function (event) {
  event.preventDefault()
  api.getTrips()
    .then(ui.getTripsSuccess)
    .catch(ui.getTripsFailure)
}

const addHandlers = () => {
  $('#create-trip').on('submit', onCreateTrip)
  $('#get-trips').on('submit', onGetTrips)
}

module.exports = {
  addHandlers
}
