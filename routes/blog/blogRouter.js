const express = require("express");
const {
  createBlog,
  getAllBlog,
  getSingleBlog,
  updateSingleBlog,
  deleteSingleBlog,
} = require("../../controller/blog/blog_controller");
const router = express.Router();
const { cacheById } = require("../../middleware/caching");

router.get("/", getAllBlog);

router.get("/:id", cacheById, getSingleBlog);

router.post("/create/", createBlog);

router.put("/update/:id", updateSingleBlog);

router.delete("/delete/:id", deleteSingleBlog);

module.exports = router;
