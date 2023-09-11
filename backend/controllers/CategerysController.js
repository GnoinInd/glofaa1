const Catogery = require("../models/createCatogerys");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");


// Create Catogerry Type like :product, jobs ,blog,etc -- Admin

exports.createCatogery = catchAsyncErrors(async (req, res, next) => {
  const myCloud = await cloudinary.v2.uploader.upload(req.body.categoryIcone, {
    folder: "caireer",
    crop: "scale",
    width: 150,
    height: 150,
  });

  // req.body.user = req.user.id;
  const { category ,type} = req.body;
  if (! category  || !type){
    return next(new ErrorHander("Please fill Required Field", 404));
  }
  const   Categores= await Catogery.create({
    category,type,
    categoryIcone: {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    },

  });
  res.status(201).json({
    success: true,
    Categores,
  });
});


// Get AllCategory Without pegination 
exports.getAllCatogery = catchAsyncErrors(async (req, res, next) => {
  const  Categores = await Catogery.find();

  res.status(200).json({
    success: true,
    Categores,
  });
});


// Get All Category -- Admin
exports.getAllCategoryAdmin = catchAsyncErrors(async (req, res, next) => {
  const resultPerPage = 10;
  const CategoryCount = await Catogery.countDocuments();

  const apiFeature = new ApiFeatures(Catogery.find(), req.query)
    .search()
    .filter();

  let  Categorys = await apiFeature.query;

  let filteredCategoryCount =  Categorys.length;

  apiFeature.pagination(resultPerPage);

  Categorys = await apiFeature.query;

  res.status(200).json({
    success: true,
    Categorys,
    CategoryCount,
    resultPerPage,
    filteredCategoryCount,
    
  });
});

// Update s -- Admin

exports.updateCatogery = catchAsyncErrors(async (req, res, next) => {
    const { category, type} = req.body;
  const newCtegery ={ category, type} 
  let  Categores = await Catogery.findById(req.params.id);

  if (!Categores) {
    return next(new ErrorHander(" Category not found", 404));
  }
  if (req.body.categoryIcone !== "") {
    const imageId =  Categores.titleImg.public_id;
    await cloudinary.v2.uploader.destroy(imageId);

    const myCloud = await cloudinary.v2.uploader.upload(req.body.categoryIcone, {
      folder: "caireer",
      crop: "scale",
      width: 150,
      height: 150,

    });

    newCtegery.categoryIcone = {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    };
  }
   


  Categores = await Catogery.findByIdAndUpdate(req.params.id, newCtegery, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    Categores,
  });
});

// Delete s --admin

exports.deleteCatogery = catchAsyncErrors(async (req, res, next) => {
  id = req.params.id
  const Categores = await Catogery.findById(id);


  if (!Categores) {
    return next(new ErrorHander(" Category Post  not found", 404));
  }

  // Deleting Images From Cloudinary
  await cloudinary.v2.uploader.destroy(Categores.categoryIcone.public_id);

  await  Categores.remove();

  res.status(200).json({
    success: true,
    message: " Category Post Delete Successfully",
  });
});


