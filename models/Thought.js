const { Schema, model } = require('mongoose');

// Schema to create User model
const thoughtSchema = new Schema(
  {
    thoughtText: {
        type: String,
        required: true,
        min: 1,
        max: 280 
    },
    createdAt: { 
      type: Date,
      default: Date.now,
      timestamps: true,
      get: (date) => {
        return formatDate(date);
      }
    },
    username: { 
        type: String, 
        required: true,
     },
    reactions: [
        {
            // references the reaction ObjectId
            type: Schema.Types.ObjectId,
            ref: 'reactionSchema'
        },
    ],
  },
  {
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `fullName` that gets and sets the user's full name
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });
 
// Initialize our User model
const Thought  = model('Thought', thoughtSchema);

module.exports = User;