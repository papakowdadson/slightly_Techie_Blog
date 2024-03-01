const db = require("../../config/db_config");
const redisClient = require("../../config/redis_config");
// create article
const createBlog = (req, res) => {
  console.log("==========creating blog===========");

  let blog = {
    image: req.body.image,
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
  };

  console.log("data", blog);

  const sql = "INSERT INTO blog SET ?";

  db.query(sql, blog, (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log("create blog result", result);
      res.status(200).json({ message: "Blog created" });
    }
  });
};

// get all articles
const getAllBlog = (req, res) => {
  console.log("=========creating blog===========");
  let sql = "SELECT * FROM blog";
  db.query(sql, (err, results) => {
    if (err) {
      console.log("error", err);
      res.status(400).json({ message: "error occurred" });
    } else {
      console.log("All blogs", results);

      res.status(200).json(results);
    }
  });
};

// get single articles
const getSingleBlog = (req, res) => {
  console.log("========Getting Single Blog");
  const { id } = req.params;
  let sql = `SELECT * FROM blog where id=${id}`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log("error", err);
      res.status(400).json({ message: "error occurred" });
    } else {
      console.log("single blog result", result);
      //setting redis data
      redisClient.setEx(`${id}`, 1000, result);
      res.status(200).json(result);
    }
  });
};

// update single article
const updateSingleBlog = (req, res) => {
  console.log("=======updating single Blog======");
  let sql = `UPDATE blog SET title = ?, content = ? where id = ?`;
  db.query(
    sql,
    [req.body.title, req.body.content, req.params.id],
    (err, result) => {
      if (err) {
        console.log("error", err);
        res.status(400).json({ message: "error occurred" });
      } else {
        console.log("update blog result", result);
        res.status(200).json({ message: "blog updated" });
      }
    }
  );
};

// delete single article
const deleteSingleBlog = (req, res) => {
  console.log("========deleting blog=======");
  let sql = `DELETE FROM blog where id = ${req.params.id}`;

  db.query(sql, (err, result) => {
    if (err) {
      console.log("error", err);
      res.status(400).json({ message: "error occurred" });
    } else {
      console.log("delete result", result);
      res.status(200).json({ message: "Blog deleted" });
    }
  });
};

module.exports = {
  createBlog,
  getAllBlog,
  getSingleBlog,
  updateSingleBlog,
  deleteSingleBlog,
};
