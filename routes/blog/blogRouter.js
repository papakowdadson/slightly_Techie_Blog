const express = require("express");
const {
  createBlog,
  getAllBlog,
  getSingleBlog,
  updateSingleBlog,
  deleteSingleBlog,
} = require("../../controller/blog/blog_controller");
const {
  prismaCreateBlog,
  prismaDeleteBlog,
  prismaOneBlog,
  prismaUpdateBlog,
  prismaReadBlog,
} = require('../../controller/blog/prisma_blog_controller')

const router = express.Router();
const { cacheById } = require("../../middleware/caching");

router.get("/", getAllBlog);

router.get("/:id", cacheById, getSingleBlog);

router.post("/create/", createBlog);

router.put("/update/:id", updateSingleBlog);

router.delete("/delete/:id", deleteSingleBlog);



router.get("/v1/", prismaReadBlog);

router.get("/v1/:id", cacheById, prismaOneBlog);

router.post("/v1/create/", prismaCreateBlog);

router.put("/v1/update/:id", prismaUpdateBlog);

router.delete("/v1/delete/:id", prismaDeleteBlog);


module.exports = router;
