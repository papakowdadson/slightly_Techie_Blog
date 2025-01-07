const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const Sentry = require("@sentry/node");

// Create
async function prismaCreateBlog(req, res) {
  let blog = {
    image: req.body.image,
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
  };

  try {
    const newBlog = await prisma.blog.create({data:blog});
    res.status(201).json({success:true, message:"Blog created successfully",data:newBlog});
  
  } catch (error) {
    console.log("prisma create error",error.message);
    Sentry.captureException(error);
    res.status(500).json({success:false, message:"Internal sever error creating blog",});

  }
}

// read all blogs
async function prismaReadBlog(req, res) {
  try {
    const blogs = await prisma.blog.findMany();
    res.status(200).json({success:true,message:"Data retrieved successfully",data:blogs});
  } catch (error) {
    console.log("prisma readblogs error",error.message);
    Sentry.captureException(error);
    res.status(500).json({success:false, message:"Internal sever error getting all blog",});

  }
  
}

// read single blog
async function prismaOneBlog(req, res) {
  const { id } = req.params;
  try {
    const blog = await prisma.blog.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  
    res.status(200).json({success:true,message:"Data retrieved succesfully",data:blog});
    
  } catch (error) {
    console.log("prisma read a blog error",error.message)
    Sentry.captureException(error);
    res.status(500).json({success:false, message:"Internal sever error reading a blog",});

  }
  
}

// delete
async function prismaDeleteBlog(req, res) {
  const { id } = req.params;
  try {
    const blog = await prisma.blog.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.status(200).json({success:true, message:"Data deleted successfully"});

  } catch (error) {
    console.log("prisma delete a blog error",error.message)
    Sentry.captureException(error);
    res.status(500).json({success:false, message:"Internal sever error deleting blog",});

  }
  
}

// update
async function prismaUpdateBlog(req, res) {
  const { id } = req.params;
  const data = { ...req.body };

  try {
    const blog = await prisma.blog.update({
      where: {
        id: parseInt(id),
      },
      data: data,
    });
    res.status(200).json({success:true, message:"Data updated successfully",data:blog});
    
  } catch (error) {
    console.log("prisma update a blog error",error.message)
    Sentry.captureException(error);
    res.status(500).json({success:false, message:"Internal sever error",});
    
  }

}

module.exports = {
  prismaCreateBlog,
  prismaDeleteBlog,
  prismaOneBlog,
  prismaUpdateBlog,
  prismaReadBlog,
};
