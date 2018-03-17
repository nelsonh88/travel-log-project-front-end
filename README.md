Geo-Footprint

Description:
Geo-Footprint is a traveling log application that allows its users to sign-in and log there traveling adventures.  Once they have logged in trips, then they can look back in their profile and refer back to all the places they have traveled to with details.  In essence showing the user their footprints around the world.

How To Use:
- A user must sign in with an email that is registered with the app.  If the user has not already registered then the user can sign-up to make an account, then sign-in.
- Upon signing-in the user will be greeted.
- A user who has already logged in at least one trip will be able to see all their past trips once logging in.  If a new user sign-in they will not have any past trips diplayed since they have not logged any in, yet.
- The user can then log in a trip and input all the details that logging in a trip requires.  Once they have copleted the necessary fields they can hit save.
- Once the trip has been saved the user will be able to see that trip immediately, under past trips.
- The user can then update a trip and delete a trip using the trip ID that can be found under past trips.

List of Technologies Used
- Atom
- Git/GitHub
- GitHub Enterprise Issue Queue
- Google Chrome
- Google Chrome Inspector
- MacBook
- Grunt Serve

Process
- First made a wireframe https://imgur.com/ynl73GB
- Worked on authentication first and made sure all curl scripts worked then made it in HTML.
- Then worked on CRUD fields for trips and checked all curl scripts and then made in in HTML.
- Then styled authnetication and CRUD
- Anytime I got into an issue I used Google, Genral Assembly notes, and the issue queue.

Unsolved Problems
- There are somethings that I want to do in the UI like make signup field more visible.
- I wanted to use a modal for the get trips field where the modal once clicked will give you all the info of the trip with the option to update trip and delete trip; instead of having it the way I have now where each CRUD action has its own dropdown menu.
- I would like enhance the user experinece in future updates, for example not having the user use ID when they want to update or delete a trip.
- I would also like to incorporate a map, where the map would show where the user have been on their trips.

Wireframe and User Stories:
- Wireframe can be found at https://imgur.com/ynl73GB
- As a user I would like to be able to record my trips.
- As a user I would like to retrieve past trips so I can see where I have traveled to.
- As a user I would like to put different types of data like who I went on a trip with and be able to retrieve that.
- As a user I would like to delete my trips if I choose to.
- As a user I would like to update my trips.
- As a user when I am done using the app I would like to sign out and have my data safely stored.

Geo-Footprint's API:
- The deployed API for Geo-Footprint can be found at https://travel-log-app.herokuapp.com/
- The repo for Geo-Footprint's API can be found at https://github.com/nelsonh88/travel-log-project
