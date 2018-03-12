const store = require('../store')
// const tripsApi = require('../trips/api')

// above is for the token as well

const signUpSuccess = function (data) {
  $('#message').text('Signed up Successfully!')
  $('#message').removeClass('alert-danger').addClass('alert-success').show()
  $('form').trigger('reset')
  $('body').addClass('logged-in')
  console.log(data)
}

const signUpFailure = function (error) {
  console.log(error)
  $('#message').text('Error on signing up!')
  $('#message').removeClass('alert-success').addClass('alert-danger').show()
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  $('#message').text('Signed in Successfully!')
  $('#message').removeClass('alert-danger').addClass('alert-success').show()
  $('form').trigger('reset')
  $('body').addClass('logged-in')
  welcomeText(data)
  setTimeout("$('#getalltripsdata').trigger('click')",0)
  console.log(data.user.first_name)
  // below is for the token
  store.user = data.user
  $('#message').delay(3000).slideToggle()
}

const welcomeText = function (data) {
  const newLede = `Welcome ${data.user.first_name}! Below you will find a listing of your previously logged past trips and a button to create a new trip.`
  $('.lede').text(newLede)
}

const byeText = function (data) {
  const newLede = 'Thank you, you have been successfully logged out. Please continue traveling with us!'
  $('.lede').text(newLede)
}
const signInFailure = function (error) {
  console.log(error)
  $('#message').text('Error on signing in!')
  $('#message').removeClass('alert-success').addClass('alert-danger').show()
  $('form').trigger('reset')
}

const changePasswordSuccess = function (data) {
  $('#message').text('Change password Successfully!')
  $('#message').removeClass('alert-danger').addClass('alert-success').show()
  $('form').trigger('reset')
}

const changePasswordFailure = function (error) {
  console.log(error)
  $('#message').text('Error on changing password!')
  $('#message').removeClass('alert-success').addClass('alert-danger').show()
  $('form').trigger('reset')
}

const signOutSuccess = function (data) {
  $('body').removeClass('logged-in')
  byeText()
}

const signOutFailure = function (error) {
  console.log(error)
  $('#message').text('Error on signing out!')
  $('#message').removeClass('alert-success').addClass('alert-danger').show()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  welcomeText
}
