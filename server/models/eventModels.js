// models/eventModel.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Event schema
const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  desc: {
    type: String,
    required: true,
    trim: true
  },
  imglink: {
    type: String,
    required: true,
    trim: true
  },
  count: {
    type: Number,
    required: true,
    min: 0
  },
  organizer: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: String,
    required: true,
    trim: true
  }
}, { timestamps: true }
);

module.exports = mongoose.model('eventModels', eventSchema, 'Events');