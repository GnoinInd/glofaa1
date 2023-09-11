const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  Title: {
    type: String,
    required: [true, "Please Enter blog Name"],
    trim: true,
  },
  blogIntro: {
    type: String,
    required: [true, "Please Enter blog Description"],
  },


  image: 
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  
  category: {
    type: String,
    required: [true, "Please Enter blog Category"],
  },
  post: {
    type: String,
    required: [true, "Please Enter blog post"],
  },

  numOfComments: {
    type: Number,
    default: 0,
  },
  comments: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    
      comments: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],


  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("blog", blogSchema);
