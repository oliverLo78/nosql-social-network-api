const {User, Thought } = require('../models/');

const userController = {
  // Get all users  
  getUsers(req, res) {
    // find() on User
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  // get single user by id
  getSingleUser(req, res) {
    // findOne() on user
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      // use .populate to populate friends and thoughts for that User
      // ex: .populate('friends')
      .populate('friends')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createUser(req, res) {
    // create on user
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
  // update a new user
  updateUser(req, res) {
    // findOneAndUpdate use $set: to update 
    User.findOneAndUpdate(
        { _id: req.params.userId }, 
        {$set: req.body},
        {new: true })
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => res.status(500).json(err));
      },
      // delete user(BONUS: and delete associated thoughts)
      deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
          .then((dbUserData) => {
            if (!dbUserData) {
              return res.status(404).json({ message: 'No user with this id!' });
            }
    
            res.json({ message: 'User deleted!' });
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
      },
    
      // add friend to friend list
      addFriend(req, res) {
        // findOneAndUpdate use $addToSet
        User.findOneAndUpdate(
            { _id: req.params.userId }, 
            { $addToSet: { friends: req.params.friendId } },
            { new: true })
          .then((dbUserData) => {
            if (!dbUserData) {
              return res.status(404).json({ message: 'No user with this id!' });
            }
            res.json(dbUserData);
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
      },
      // remove friend from friend list
      removeFriend(req, res) {
        // findOneAndUpdate
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { new: true })
          .then((dbUserData) => {
            if (!dbUserData) {
              return res.status(404).json({ message: 'No user with this id!' });
            }
            res.json(dbUserData);
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
      },
};

module.exports = userController;