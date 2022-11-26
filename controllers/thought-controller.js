const {User, Thought } = require('../models/');

const thoughtController = {
  // Get all thoughts  
  getThoughts(req, res) {
    // find() on Thought model
    User.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  // get single thought by id
  getSingleThought(req, res) {
    // findOne() on thought model
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      // use .populate to populate thoughts and reactions for that User
      // ex: .populate('friends')
      .populate('thoughts')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new thought
  createThought(req, res) {
    // create on thought
    Thought.create(req.body)
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
    },
  // update a new thought 
  updateThought(req, res) {
    // findOneAndUpdate use $set: to update 
    Thought.findOneAndUpdate(
      { _id: req.params.userId }, 
      {$set: req.body},
      {new: true })
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
    },
    // delete Thought(BONUS: and delete associated thoughts)
    deleteThought(req, res) {
      User.findOneAndDelete({ _id: req.params.userId })
        .then((thought) => {
          if (!thought) {
            return res.status(404).json({ message: 'No thought with this id!' });
          }
      
          res.json({ message: 'Thought deleted!' });
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
        },
    // add friend to friend list
    addReaction(req, res) {
      // findOneAndUpdate use $addToSet
      Reaction.findOneAndUpdate(
        { _id: req.params.userId }, 
        { $addToSet: { reactions: req.params.reactionId } },
        { new: true })
      .then((reaction) => {
        if (!reaction) {
          return res.status(404).json({ message: 'No reaction with this id!' });
        }
        res.json(reaction);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
    },
    // remove reaction from reaction list
    removeReaction(req, res) {
      // findOneAndUpdate
      User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { reactions: req.params.reactionId } },
        { new: true })
      .then((reaction) => {
        if (!reaction) {
          return res.status(404).json({ message: 'No reaction with this id!' });
        }
        res.json(reaction);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
    },
};

// Export connection
module.exports = thoughtController;