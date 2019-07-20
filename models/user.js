/* 
 * Place all functions, classes, and/or DB schemas here for a single 
 * model.
 */

/* Step 1
 *
 * TODO: import mongoose connection
 * NOTE: skip this if you are not using mongoose
 *
 */
const mongoose = require('./connection.js')

/* Step 1 alternative
 *
 * TODO: make a global variable to act as an in memory database. 
 * NOTE: doing this WILL NOT persist your data and you will loose
 * your data once you stop running your server.
 *
 */

/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */
const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  isAdmin: {
    type: Boolean,
    default: false
  },
  pointsBalance: Number,
  userName: String,
  address: String,
  city: String,
  state: String,
  zip: String
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const UserCollection = mongoose.model('User', UserSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
function getAllUsers() {
  return UserCollection.find()
}

function getUser(userId) {
  return UserCollection.findById(userId)
}

  function createUser(userObject) {
  return UserCollection.create(userObject)
}

function updateUser(userId, updatedUser) {
  return UserCollection.findByIdAndUpdate(userId, updatedUser, {new: true})
}



/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
getAllUsers,
getUser,
createUser, 
updateUser
}
