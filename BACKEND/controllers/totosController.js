const { default: mongoose } = require("mongoose");
const Todos = require("../models/TodosModel");

// Get All the documents
const getTodos = async (req, res) => {
  const todos = await Todos.find({}).sort({ createdAt: -1 });

  res.status(200).json(todos);
};

// Get one document
const getTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Can not find document " });
  }
  const todo = await Todos.findById(id);
  if (!todo) {
    return res
      .status(404)
      .json({ error: "Cant find the documnet by the id give" });
  }
  return res.status(200).json(todo);
};

// Delete one Document

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ error: "Can not find the Document with the given id " });
  }
  const todo = await Todos.findOneAndDelete({ _id: id });
  if (!todo) {
    return res.status(404).json({ error: "Document not found" });
  }
  res.status(200).json({ msg: "Deleted" });
};

// Create a Document
const createTodo = async (req, res) => {
  const { title, description } = req.body;

  try {
    const exists = await Todos.find({ title });
    if (!exists) {
      const todo = await Todos.create({ title, description });
      res.status(200).json(todo);
    }
  } catch (error) {
    res.status(400).json({
      error: error.message,
      mssg: "Same Title exists can not add new ",
    });
  }
};

// Update the Document (Patch)

const updateTodo = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ error: "Cant find the document with the id provided" });
  }
  const todo = await Todos.findOneAndUpdate({ _id: id }, { ...req.body });
  if (!todo) {
    return res.status(404).json({ error: "No document found  to update " });
  } else {
    return res.status(200).json({ mssg: "Updated Successfully " });
  }
};

module.exports = {
  getTodos,
  createTodo,
  deleteTodo,
  getTodo,
  updateTodo,
};
