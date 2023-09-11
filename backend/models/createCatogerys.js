const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
  type: {
    type: String,
    required: [true, "please enter a Type of category"],
  },
  category: {
    type: String,
    required: [true, "please enter a Type of category"],
    unique: [true, "This Catogery Name Allready Exits"],
  },
  categoryIcone: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },


});

module.exports = mongoose.model("Catogerys", jobSchema);


