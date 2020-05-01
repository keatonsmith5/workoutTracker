const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
      type: Date,
      default: () => new Date()
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Please enter an exercise type"
        },
        name: {
          type: String,
          trim: true,
          required: "Please enter an exercise name"
        },
        duration: {
          type: Number,
          required: "Please enter your exercise duration"
        },
        weight: {
          type: Number
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        },
        distance: {
          type: Number
        }
      }
    ]
},
  {
    toJSON: {
      // include any virtual properties when data is requested
      virtuals: true
    }
  });


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;