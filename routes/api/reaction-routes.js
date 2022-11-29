const router = require('express').Router();
const {
  getSingleReaction,
  getsReactions,
  createReaction,
  updateReaction,
  deleteReaction,
  addReaction,
  removeReaction,
} = require('../../controllers/thought-controller');

router.route('/').get(getsReactions).post(createReaction);

router.route('/:thoughtId').get(getSingleReaction).put(updateReaction).delete(deleteReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);
router.route('/:thoughtId/reactions').post(addReaction);

module.exports = router;