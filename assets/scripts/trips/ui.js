const store = require('../store')

console.log('ui is here')

const createTripSuccess = function (data) {
  $('#tripMessage').text('Created a trip Successfully!')
  $('#tripMessage').css('background-color', 'green')
  console.log(data)
}

const createTripFailure = function (error) {
  console.log(error)
  $('#tripMessage').text('Error on creating a trip!')
  $('#tripMessage').css('background-color', 'red')
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
  console.log(data)
}

const getTripFailure = function (error) {
  console.log(error)
  $('#tripMessage').text('Error on getting trip!')
  $('#tripMessage').css('background-color', 'red')
}

const updateTripSuccess = function (data) {
  $('#tripMessage').text('Brought back a trip successfully!')
  $('#tripMessage').css('background-color', 'green')
  console.log(data)
}

const updateTripFailure = function (error) {
  console.log(error)
  $('#tripMessage').text('Error on getting trip!')
  $('#tripMessage').css('background-color', 'red')
}

module.exports = {
  createTripSuccess,
  createTripFailure,
  getTripsSuccess,
  getTripsFailure,
  getTripSuccess,
  getTripFailure,
  updateTripSuccess,
  updateTripFailure
}
