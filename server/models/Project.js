const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      default: "A new project"
    },
    complete: {
      type: Boolean,
      required: true,
      default: false
    },
    img: {
      type: String,
      required: false
    },
    duedate: {
      type: Date,
      required: false
    },
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }]
  },
  {
    timestamps: true
  }
);

const Project = mongoose.model("Project", Schema, "projects");

module.exports = Project;