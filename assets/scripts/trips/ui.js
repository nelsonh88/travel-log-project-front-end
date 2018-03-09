const store = require('../store')

console.log('ui is here')

const createTripSuccess = function (data) {
  $('#message').text('Created a trip Successfully!')
  $('#message').css('background-color', 'green')
  console.log(data)
}

const createTripFailure = function (error) {
  console.log(error)
  $('#message').text('Error on creating a trip!')
  $('#message').css('background-color', 'red')
}

module.exports = {
  createTripSuccess,
  createTripFailure
}
