const Blog = require("../models/blog");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");

// Create Blog -- Admin
exports.createBlog = catchAsyncErrors(async (req, res, next) => {
  const myCloud = await cloudinary.v2.uploader.upload(req.body.image, {
    folder: "Blogs",
    crop: "scale",
  });

  // req.body.user = req.user.id;
  const { Title, blogIntro, category, post, } = req.body;

  const Blogs = await Blog.create({
    Title,
    blogIntro,
    category,
    post,
    image: {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    },

  });
  res.status(201).json({
    success: true,
    Blogs,
  });
});

// Get All Blog
exports.getAllBlog = catchAsyncErrors(async (req, res, next) => {
  const resultPerPage = 100;
  const BlogsCount = await Blog.countDocuments();

  const apiFeature = new ApiFeatures(Blog.find(), req.query)
    .search()
    .filter();

  let Blogs = await apiFeature.query;

  let filteredBlogsCount = Blogs.length;

  apiFeature.pagination(resultPerPage);

  Blogs = await apiFeature.query;

  res.status(200).json({
    success: true,
    Blogs,
    BlogsCount,
    resultPerPage,
    filteredBlogsCount,
    
  });
});

// Get All Blog (Admin)
exports.getAdminBlog = catchAsyncErrors(async (req, res, next) => {
  const resultPerPage = 6;
  const BlogsCount = await Blog.countDocuments();

  const apiFeature = new ApiFeatures(Blog.find(), req.query)
    .search()
    .filter();

  let Blogs = await apiFeature.query;

  let filteredBlogsCount = Blogs.length;

  apiFeature.pagination(resultPerPage);

  Blogs = await apiFeature.query;

  res.status(200).json({
    success: true,
    Blogs,
    BlogsCount,
    resultPerPage,
    filteredBlogsCount,
  });
});

// Get Blog Details
exports.getBlogDetails = catchAsyncErrors(async (req, res, next) => {
  id = req.params.id
  const Blogs = await Blog.findById(id);
  if (!Blogs) {
    return next(new ErrorHander("Blog not found", 404));
  }

  res.status(200).json({
    success: true,
    Blogs,
  });
});

// Update Blog -- Admin

exports.updateBlog = catchAsyncErrors(async (req, res, next) => {
  const newBlogData = {
    Title: req.body.Title,
    blogIntro: req.body.blogIntro,
    category: req.body.category,
    post: req.body.post,
  };
  let Blogs = await Blog.findById(req.params.id);

  if (!Blogs) {
    return next(new ErrorHander("Blog not found", 404));
  }
  if (req.body.image !== "") {
    const imageId = Blogs.image.public_id;
    await cloudinary.v2.uploader.destroy(imageId);

    const myCloud = await cloudinary.v2.uploader.upload(req.body.image, {
      folder: "Blogs",

    });

    newBlogData.image = {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    };
  }
   


  Blogs = await Blog.findByIdAndUpdate(req.params.id, newBlogData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    Blogs,
  });
});

// Delete Blog

exports.deleteBlog = catchAsyncErrors(async (req, res, next) => {
  id = req.params.id
  const Blogs = await Blog.findById(id);

  if (!Blogs) {
    return next(new ErrorHander("Blog not found", 404));
  }

  // Deleting Images From Cloudinary
  await cloudinary.v2.uploader.destroy(Blogs.image.public_id);

  await Blogs.remove();

  res.status(200).json({
    success: true,
    message: "Blog Delete Successfully",
  });
});

// Create New Coment or Update the Coment
exports.createBlogComent = catchAsyncErrors(async (req, res, next) => {
  const { comment, BlogId } = req.body;

  const Coment = {
    user: req.user._id,
    name: req.user.name,
    comment,
  };
  const Blogs = await Blog.findById(BlogId);
  const isComented = Blogs.comments.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (isComented) {
    Blogs.comments.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString())
        (rev.comments = comment);
    });
  } else {
    Blogs.comments.push(Coment);
    Blogs.numOfComments = Blogs.comments.length;
  }
  await Blogs.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});

// Get All Coments of a Blog
exports.getBlogComents = catchAsyncErrors(async (req, res, next) => {
  const Blogs = await Blog.findById(req.query.id);

  if (!Blogs) {
    return next(new ErrorHander("Blog not found", 404));
  }

  res.status(200).json({
    success: true,
    comments: Blogs.comments,
  });
});

// Delete Coment
exports.deleteComent = catchAsyncErrors(async (req, res, next) => {
  const Blogs = await Blog.findById(req.query.BlogId);

  if (!Blogs) {
    return next(new ErrorHander("Blog not found", 404));
  }

  const Coments = Blogs.comments.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

   const removeComents =await Coments.remove()
  const numOfComments = Coments.length;
  await Blog.findByIdAndUpdate(
    req.query.BlogId,
    {
      removeComents,
      numOfComments,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
  });
});
