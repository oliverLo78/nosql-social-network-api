const { Schema, model } = require('mongoose');

// Schema to create User model
const reactionSchema = new Schema(
  {
    reactionId: {
      // Use `Types.ObjectId` in document interface...
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: { 
      type: String,
      required: true,
      max: 280,
    },
    username: { 
        type: String, 
        required: true,
     },
     createdAt: { 
        type: Date,
        default: Date.now,
        timestamps: true,
        get: (date) => {
          return formatDate(date);
        }
      },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;