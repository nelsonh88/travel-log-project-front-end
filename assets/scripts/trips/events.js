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

const onGetTrip = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const trip = data.trip
  console.log(event)
  api.getTrip(trip.id)
    .then(ui.getTripSuccess)
    .catch(ui.getTripFailure)
}

const onUpdateTrip = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateTrip(data)
    .then(ui.updateTripSuccess)
    .catch(ui.updateTripFailure)
}

const onDeleteTrip = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const trip = data.trip
  api.deleteTrip(trip.id)
    .then(ui.deleteTripSuccess)
    .catch(ui.deleteTripFailure)
}

const addHandlers = () => {
  $('#create-trip').on('submit', onCreateTrip)
  $('#get-trips').on('submit', onGetTrips)
  $('#get-trip').on('submit', onGetTrip)
  $('#update-trip').on('submit', onUpdateTrip)
  $('#delete-trip').on('submit', onDeleteTrip)
}

module.exports = {
  addHandlers
}
