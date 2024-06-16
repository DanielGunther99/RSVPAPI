const mongoose = require("mongoose");

const rsvpSchema = mongoose.Schema({
  name: String,
  uniqueCode: String,
  isAttending: Boolean,
  mealChoice: String,
  isInterestedShuttle: Boolean,
  isAllergic: Boolean,
  restriction: String,
});

module.exports = mongoose.model("rsvp", rsvpSchema);
