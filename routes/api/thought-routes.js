const router = require('express').Router();
const {
  getSingleThought,
  getThoughts,
  createThought,
  updateThought,
  deletethought,
  addReaction,
  removeReaction,
} = require('../../controllers/postController');

router.route('/').get(getPosts).post(createPost);

router.route('/:postId').get(getSinglePost);

module.exports = router;
