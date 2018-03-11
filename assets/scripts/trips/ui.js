// const store = require('../store')

const createTripSuccess = function (data) {
  $('#tripMessage').text('Created a trip Successfully!')
  $('#tripMessage').show()
  $('form').trigger('reset')
  setTimeout("$('#getalltripsdata').trigger('click')",0)
  console.log(data)
}

const createTripFailure = function (error) {
  console.log(error)
  $('#tripMessage').text('Error on creating a trip!')
  $('#tripMessage').css('background-color', 'red')
  $('form').trigger('reset')
}

const getTripsSuccess = function (data) {
  // $('#tripMessage').text('Brought back all trips successfully!')
  // $('#tripMessage').css('background-color', 'green')
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
    tabletgt.appendChild(row)
  })
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
  setTimeout("$('#getalltripsdata').trigger('click')",0)

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
  setTimeout("$('#getalltripsdata').trigger('click')",0)

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
