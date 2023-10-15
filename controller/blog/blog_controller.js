const db = require("../../config/db_config");
// create article
const createBlog = (req, res) => {
  console.log('==========creating blog===========')
  
  let blog = {
    "image": req.body.image,
    "title": req.body.title,
    "content": req.body.content,
    "author": req.body.author,
  };
 console.log('data',blog);
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
  console.log('=========creating blog===========')
  let sql = "SELECT * FROM blog";
  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    } else {
        console.log("All blogs", results);
        res.status(200).json(results)
    }
  });
};

// get single articles
const getSingleBlog = (req, res) => {
  console.log('========Getting Single Blog')
    let sql = `SELECT * FROM blog where id=${req.params.id}` ;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    } else {
        console.log("single blog result", result);
        res.status(200).json(result)
    }
  });
};

// update single article
const updateSingleBlog = (req, res) => {
  console.log('=======updating single Blog======');
    let sql = `UPDATE blog SET title = '${req.body.title}', content = '${req.body.content}' where id = ${req.params.id}`
    db.query(sql, (err, result) => {
        if (err) {
          throw err;
        } else {
            console.log("update blog result", result);
            res.status(200).json({message:"blog updated"})
        }
      });
};

// delete single article
const deleteSingleBlog = (req, res) => {
  console.log("========deleting blog=======");
  let sql =`DELETE FROM blog where id = ${req.params.id}`;

  db.query(sql,(err, result) => {
    if (err) {
      throw err;
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
