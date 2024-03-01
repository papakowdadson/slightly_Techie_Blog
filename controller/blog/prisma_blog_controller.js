import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Create

async function prismaCreateController(req, res) {
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
async function prismaReadController(req, res) {
  const blogs = await prisma.blog.findMany();
  res.status(200).json(blogs);
}

// read
async function prismaOneController(req, res) {
  const { id } = req.params;
  const blog = await prisma.blog.findUnique({
    where: {
      id: id,
    },
  });

  res.status(200).json(blog);
}

// delete
async function prismaDeleteController(req, res) {
  const { id } = req.params;
  const blog = await prisma.blog.delete({
    where: {
      id: id,
    },
  });
  res.statuS(200).json(blog);
}

// update
async function prismaUpdateController(req, res) {
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
  prismaCreateController,
  prismaDeleteController,
  prismaOneController,
  prismaUpdateController,
  prismaReadController,
};
