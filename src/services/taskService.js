const Task = require('../models/taskModel');

const createTask = async (taskData) => {
  const task = await Task.create(taskData);
  return task;
};

const getTasks = async (filters) => {
  const tasks = await Task.find(filters).populate('assignedTo').populate('createdBy');
  return tasks;
};

const updateTask = async (taskId, updateData) => {
  const task = await Task.findByIdAndUpdate(taskId, updateData, { new: true });
  return task;
};

const deleteTask = async (taskId) => {
  await Task.findByIdAndDelete(taskId);
};

module.exports = { createTask, getTasks, updateTask, deleteTask };
