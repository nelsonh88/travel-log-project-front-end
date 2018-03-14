// const store = require('../store')
const ui = require('../auth/ui')

const createTripSuccess = function (data) {
  $('#message').text('Created a trip Successfully!')
  $('#message').removeClass('alert-danger').addClass('alert-success').show()
  $('form').trigger('reset')
  ui.goTop()
  $('#message').delay(3000).slideToggle()
  $('#create-trip').delay(500).removeClass('in')
}

const createTripFailure = function (error) {
  console.log(error)
  $('#message').text('Error on creating a trip!')
  $('#message').removeClass('alert-success').addClass('alert-danger').show()
  $('form').trigger('reset')
}

const getTripsSuccess = function (data) {
  // $('#message').text('Brought back all trips successfully!')
  // $('#message').css('background-color', 'green')
  console.log('getTripsSuccess: ', data.trips)
  // run foreach and build html output
  const tabletgt = document.getElementById('tabletarget')
  // empty out existing table data, then append new data
  while (tabletgt.firstChild) {
    tabletgt.removeChild(tabletgt.firstChild)
  }
  data.trips.forEach(function (item) {
    const row = document.createElement('tr')
    const cell1 = document.createElement('td')
    const cell1text = document.createTextNode(item.id)
    cell1.appendChild(cell1text)
    row.appendChild(cell1)
    const cell2 = document.createElement('td')
    const cell2text = document.createTextNode(item.location_name)
    cell2.appendChild(cell2text)
    row.appendChild(cell2)
    const cell3 = document.createElement('td')
    const cell3text = document.createTextNode(item.date)
    cell3.appendChild(cell3text)
    row.appendChild(cell3)

    const cell4 = document.createElement('td')
    const cell4text = document.createTextNode(item.travel_mates)
    cell4.appendChild(cell4text)
    row.appendChild(cell4)

    const cell5 = document.createElement('td')
    const cell5text = document.createTextNode(item.description)
    cell5.appendChild(cell5text)
    row.appendChild(cell5)

    tabletgt.appendChild(row)
  })
}

const getTripsFailure = function (error) {
  console.log(error)
  $('#message').text('Error on getting trips!')
  $('#message').removeClass('alert-success').addClass('alert-danger').show()
}

const getTripSuccess = function (data) {
  $('#message').text('Brought back a trip successfully!')
  $('#message').removeClass('alert-danger').addClass('alert-success').show()
  $('form').trigger('reset')
  console.log(data)
}

const getTripFailure = function (error) {
  console.log(error)
  $('#message').text('Error on getting trip!')
  $('#message').removeClass('alert-success').addClass('alert-danger').show()
  $('form').trigger('reset')
}

const updateTripSuccess = function (data) {
  $('#message').text('Updated a trip successfully!')
  $('#message').removeClass('alert-danger').addClass('alert-success').show()
  console.log(data)
  $('form').trigger('reset')
  ui.goTop()
  $('#message').delay(3000).slideToggle()
  // setTimeout("$('#getalltripsdata').trigger('click')",0)
}

const updateTripFailure = function (error) {
  console.log(error)
  $('#message').text('Error on updating trip!')
  $('#message').removeClass('alert-success').addClass('alert-danger').show()
  ui.goTop()
  $('#message').delay(3000).slideToggle()
  $('form').trigger('reset')
}

const deleteTripSuccess = function (data) {
  $('#message').text('Deleted trip successfully!')
  $('#message').removeClass('alert-danger').addClass('alert-success').show()
  console.log(data)
  $('form').trigger('reset')
  ui.goTop()
  $('#message').delay(3000).slideToggle()
  // setTimeout("$('#getalltripsdata').trigger('click')",0)
}

const deleteTripFailure = function (error) {
  console.log(error)
  $('#message').text('Error on deleting trip!')
  $('#message').removeClass('alert-success').addClass('alert-danger').show()
  $('form').trigger('reset')
  ui.goTop()
  $('#message').delay(3000).slideToggle()
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
