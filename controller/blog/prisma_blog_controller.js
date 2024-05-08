const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Create

async function prismaCreateBlog(req, res) {
  let blog = {
    image: req.body.image,
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
  };

  const user = await prisma.blog.create(blog);

  res.status(200).json(user);
}

// read
async function prismaReadBlog(req, res) {
  const blogs = await prisma.blog.findMany();
  res.status(200).json(blogs);
}

// read
async function prismaOneBlog(req, res) {
  const { id } = req.params;
  const blog = await prisma.blog.findUnique({
    where: {
      id: id,
    },
  });

  res.status(200).json(blog);
}

// delete
async function prismaDeleteBlog(req, res) {
  const { id } = req.params;
  const blog = await prisma.blog.delete({
    where: {
      id: id,
    },
  });
  res.statuS(200).json(blog);
}

// update
async function prismaUpdateBlog(req, res) {
  const { id } = req.params;
  const data = { ...req.body };

  const blog = await prisma.blog.update({
    where: {
      id: id,
    },
    data: data,
  });
}

module.exports = {
  prismaCreateBlog,
  prismaDeleteBlog,
  prismaOneBlog,
  prismaUpdateBlog,
  prismaReadBlog,
};
