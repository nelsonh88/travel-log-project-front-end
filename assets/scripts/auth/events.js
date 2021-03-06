'use strict'

const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')
const tripsApi = require('../trips/api')
const tripsUi = require('../trips/ui')

const onSignUp = function () {
  event.preventDefault()
  // event.target is the same as this in the parameter below
  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function () {
  event.preventDefault()
  // event.target is the same as this in the parameter below
  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .then(tripsApi.getTrips)
    .then(tripsUi.getTripsSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const toggleSubmenu = function () {
  $('.submenu').slideToggle()
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('click', onSignOut)
  $('.mainmenu li').on('click', toggleSubmenu)
}

module.exports = {
  addHandlers
}
