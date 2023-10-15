const express = require("express");
const {createBlog,getAllBlog,getSingleBlog,updateSingleBlog,deleteSingleBlog} = require("../../controller/blog/blog_controller");
const router = express.Router();

router.get('/',getAllBlog);

router.get('/:id',getSingleBlog);

router.post('/create/',createBlog);

router.put('/update/:id',updateSingleBlog);

router.delete('/delete/:id',deleteSingleBlog);

module.exports = router;
