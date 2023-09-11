const Job = require("../../models/caireer/jobPost");
const ErrorHander = require("../../utils/errorhander");
const catchAsyncErrors = require("../../middleware/catchAsyncErrors");
const ApiFeatures = require("../../utils/apifeatures");
const cloudinary = require("cloudinary");

// Create job -- Admin
exports.createjob = catchAsyncErrors(async (req, res, next) => {
  const myCloud = await cloudinary.v2.uploader.upload(req.body.jobtitleImg, {
    folder: "caireer",
    crop: "scale",
    width: 150,
    height: 150,
  });

  // req.body.user = req.user.id;
  const { category,  jobtitle, locations,  salary,jobinfo, jobdescription,skills, vacancy, experience,deadline,  emplloymenttatus } = req.body;
  if (!category || !jobtitle || !locations || !salary || !jobinfo || !jobdescription || !skills || !vacancy|| !experience|| !deadline|| ! emplloymenttatus ){
    return next(new ErrorHander("Please fill Required Field", 404));
  }
  const Jobs= await Job.create({
    category,  jobtitle,  locations,  salary,jobinfo, jobdescription,skills, vacancy, experience,deadline,  emplloymenttatus,
    jobtitleImg: {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    },

  });
  res.status(201).json({
    success: true,
    Jobs,
  });
});

// Get All Job
exports.getAllJobs = catchAsyncErrors(async (req, res, next) => {
  const resultPerPage = 10;
  const JobCount = await Job.countDocuments();

  const apiFeature = new ApiFeatures(Job.find(), req.query)
    .search()
    .filter();

  let Jobs = await apiFeature.query;

  let filteredJobsCount = Jobs.length;

  apiFeature.pagination(resultPerPage);

  Jobs = await apiFeature.query;

  res.status(200).json({
    success: true,
    Jobs,
    JobCount,
    resultPerPage,
    filteredJobsCount,
    
  });
});

// Get All JobsPost Without pegination 
exports.getAllJobsWithoutPegination = catchAsyncErrors(async (req, res, next) => {
  const Jobs = await Job.find();

  res.status(200).json({
    success: true,
    Jobs,
  });
});

// Get Jobs Details
exports.getJobsDetails = catchAsyncErrors(async (req, res, next) => {
  id = req.params.id
  const Jobs = await Job.findById(id);
  if (!Jobs) {
    return next(new ErrorHander("Blog not found", 404));
  }

  res.status(200).json({
    success: true,
    Jobs,
  });
});

// Update Jobs -- Admin

exports.updateJobs = catchAsyncErrors(async (req, res, next) => {
  const  { category,  jobtitle,  locations,  salary,jobinfo, jobdescription, skills, vacancy, experience,deadline,  emplloymenttatus } = req.body;

  const newJobPostData = { category,  jobtitle,  locations,  salary, jobinfo, jobdescription , skills, vacancy, experience,deadline,  emplloymenttatus }
  let Jobs = await Job.findById(req.params.id);

  if (!Jobs) {
    return next(new ErrorHander("Jobs Psot not found", 404));
  }
  if (req.body.jobtitleImg !== "") {
    const imageId = Jobs.jobtitleImg.public_id;
    await cloudinary.v2.uploader.destroy(imageId);

    const myCloud = await cloudinary.v2.uploader.upload(req.body.jobtitleImg, {
      folder: "caireer",
      crop: "scale",
      width: 150,
      height: 150,

    });

    newJobPostData.jobtitleImg = {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    };
  }
   


  Jobs = await Job.findByIdAndUpdate(req.params.id, newJobPostData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    Jobs,
  });
});

// Delete jobs --admin

exports.deleteJobs = catchAsyncErrors(async (req, res, next) => {
  id = req.params.id
  const Jobs = await Job.findById(id);

  if (!Jobs) {
    return next(new ErrorHander("Job Post  not found", 404));
  }

  // Deleting Images From Cloudinary
  await cloudinary.v2.uploader.destroy(Jobs.jobtitleImg.public_id);

  await Jobs.remove();

  res.status(200).json({
    success: true,
    message: "Job Post Delete Successfully",
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
