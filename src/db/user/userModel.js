var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  email: String,
  firstname: String,
  lastname: String,
  days: [
    {
      date: Date,
      // the DO things
      activities: [
        {
          name: String,
        }
      ],
      // the ARE things
      metrics: [
        {
          name: String,
        }
      ],
      // one journal entry per day 
      // sentiment possibly from watson?
      journalEntry: String,
      sentiment: String
    }
  ],
  // things that the user has already done
  // for auto-complete or something
  activites: [
    {
      name: String,
    }
  ],
  // metrics the user has already nominated
  // same, autocomplete or something
  metrics: [
    {
      name: String
    }
  ]
});

module.exports = mongoose.model('User', userSchema);