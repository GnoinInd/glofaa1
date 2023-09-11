const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
  category: {
    type: String,
    required: [true, "please enter Job category"],
  },
  jobtitleImg: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  jobtitle: {
    type: String,
    required: [true, "please enter Job title"],
  },
  locations: {
    type: String,
    required: [true, "please enter Job location"],
  },
  salary: {
    type: Number,
    required: [true, "please enter Job salary"],
    default:'negotiate'
  },
  jobinfo: {
    type: String,
    required: [true, "please enter Job info"],
  },
  jobdescription: {
    type: String,
    require:true,
    required: [true, "please enter Job Descriptions"],
  },
  skills: {
    type: String,
    required: [true, "please enter requred skills"],
  },
  vacancy: {
    type: Number,
    required: [true, "please enter No of Vacancy"],
  },
  experience: {
    type: String,
    required: [true, "please enter the Exprience "],
  },

  deadline: {
    type: Date,
    required: [true, "please enter Job aplly Dead-Line"],
  },
  emplloymenttatus: {
    type: String,
    required: [true, "please enter Emplloyement Status"],
  },
  createDate:{
    type:Date,
    default:Date.now
  },
 JobAplication: [
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
      email: {
        type: String,
        required: [true, "enter email"],
      },
      experience: {
        type: String,
        required: [true, "enter experience"],
      },
      intro: {
        type: String,
        required: [true, "about Your Self"],
      },
      onsite: {
        type: String,
        required: [true, "selete work type"],
      },
      cv: {
        type: String,
        required: [true, "upload cv"],
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

module.exports= mongoose.model("Job", jobSchema);


