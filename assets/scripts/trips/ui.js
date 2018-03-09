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
  $('#tripMessage').text('Created a trip Successfully!')
  $('#tripMessage').css('background-color', 'green')
  console.log(data)
}

const getTripsFailure = function (error) {
  console.log(error)
  $('#tripMessage').text('Error on creating a trip!')
  $('#tripMessage').css('background-color', 'red')
}

module.exports = {
  createTripSuccess,
  createTripFailure,
  getTripsSuccess,
  getTripsFailure
}
