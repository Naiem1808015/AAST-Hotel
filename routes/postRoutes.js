const express = require('express');
const router = express.Router();
const {
    createPost, 
    fetchPosts, 
    everyRoom
    // fetchPost, 
    // updatePost, 
    // updateValidations,
    // updateImage,
    // deletePost,
    // home,
    // postDetails,
    // postComment
} = require('../controllers/postController')

// const {
// 	roomValiations
// } = require('../controllers/postController');

const auth = require('../utils/auth')

router.post('/create_post', auth,  createPost)

router.get('/posts/:id', auth, fetchPosts)
router.get('/rooms/:room', auth, everyRoom)
// router.get('/post/:id', auth, fetchPost);
// router.post('/update', [auth, updateValidations], updatePost);
// router.post('/updateImage', auth, updateImage);
// router.get('/delete/:id', auth, deletePost);
// router.get('/home/:page', home);
// router.get('/explore/:id', postDetails);
// router.post('/comment', auth, postComment);

module.exports = router;