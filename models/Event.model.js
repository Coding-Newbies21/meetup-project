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

    organisers: {type: Schema.Types.ObjectId, ref: 'User'},
    

    category: {
      type: String,
      required: [true, 'Password is required.'],
    },

    image: {
      type: String,
    }
  },
  {
    timestamps: true
  }
);

module.exports = model('Event', eventSchema);
