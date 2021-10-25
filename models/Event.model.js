const { Schema, model } = require('mongoose');

const eventSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, 'Title is required.'],
    },

    description: {
      type: String,
      required: [true, 'Description is required.'],
    },

    // organisers: {
    //   type: String,
    //   required: [true, 'The event needs at least one organiser']
    // },

    category: {
      type: String,
      required: [true, 'Password is required.'],
    }
  },
  {
    timestamps: true
  }
);

module.exports = model('Event', eventSchema);
