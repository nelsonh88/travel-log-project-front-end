const store = require('../store')

const createTripSuccess = function (data) {
  $('#tripMessage').text('Created a trip Successfully!')
  $('#tripMessage').css('background-color', 'green')
  $('form').trigger('reset')
  console.log(data)
}

const createTripFailure = function (error) {
  console.log(error)
  $('#tripMessage').text('Error on creating a trip!')
  $('#tripMessage').css('background-color', 'red')
  $('form').trigger('reset')
}

const getTripsSuccess = function (data) {
  $('#tripMessage').text('Brought back all trips successfully!')
  $('#tripMessage').css('background-color', 'green')
  console.log(data)
}

const getTripsFailure = function (error) {
  console.log(error)
  $('#tripMessage').text('Error on getting trips!')
  $('#tripMessage').css('background-color', 'red')
}

const getTripSuccess = function (data) {
  $('#tripMessage').text('Brought back a trip successfully!')
  $('#tripMessage').css('background-color', 'green')
  $('form').trigger('reset')
  console.log(data)
}

const getTripFailure = function (error) {
  console.log(error)
  $('#tripMessage').text('Error on getting trip!')
  $('#tripMessage').css('background-color', 'red')
  $('form').trigger('reset')
}

const updateTripSuccess = function (data) {
  $('#tripMessage').text('Updated a trip successfully!')
  $('#tripMessage').css('background-color', 'green')
  console.log(data)
  $('form').trigger('reset')
}

const updateTripFailure = function (error) {
  console.log(error)
  $('#tripMessage').text('Error on updating trip!')
  $('#tripMessage').css('background-color', 'red')
  $('form').trigger('reset')
}

const deleteTripSuccess = function (data) {
  $('#tripMessage').text('Deleted trip successfully!')
  $('#tripMessage').css('background-color', 'green')
  console.log(data)
  $('form').trigger('reset')
}

const deleteTripFailure = function (error) {
  console.log(error)
  $('#tripMessage').text('Error on deleting trip!')
  $('#tripMessage').css('background-color', 'red')
  $('form').trigger('reset')
}

module.exports = {
  createTripSuccess,
  createTripFailure,
  getTripsSuccess,
  getTripsFailure,
  getTripSuccess,
  getTripFailure,
  updateTripSuccess,
  updateTripFailure,
  deleteTripSuccess,
  deleteTripFailure
}
