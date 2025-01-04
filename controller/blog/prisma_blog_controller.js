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

  try {
    const newBlog = await prisma.blog.create(blog);
    res.status(201).json({success:true, message:"Blog created successfully",data:newBlog});
  
  } catch (error) {
    res.status(500).json({success:false, message:"Internal sever error",});

  }
}

// read all blogs
async function prismaReadBlog(req, res) {
  try {
    const blogs = await prisma.blog.findMany();
    res.status(200).json({success:true,message:"Data retrieved successfully",data:blogs});
  } catch (error) {
    res.status(500).json({success:false, message:"Internal sever error",});

  }
  
}

// read single blog
async function prismaOneBlog(req, res) {
  const { id } = req.params;
  try {
    const blog = await prisma.blog.findUnique({
      where: {
        id: id,
      },
    });
  
    res.status(200).json({success:true,message:"Data retrieved succesfully",data:blog});
    
  } catch (error) {
    res.status(500).json({success:false, message:"Internal sever error",});

  }
  
}

// delete
async function prismaDeleteBlog(req, res) {
  const { id } = req.params;
  try {
    const blog = await prisma.blog.delete({
      where: {
        id: id,
      },
    });
    res.status(200).json({success:true, message:"Data deleted successfully"});

  } catch (error) {
    res.status(500).json({success:false, message:"Internal sever error",});

  }
  
}

// update
async function prismaUpdateBlog(req, res) {
  const { id } = req.params;
  const data = { ...req.body };

  try {
    const blog = await prisma.blog.update({
      where: {
        id: id,
      },
      data: data,
    });
    
  } catch (error) {
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
