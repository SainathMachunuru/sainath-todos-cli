const { getTODOSById } = require("../services/todos.js");
const { displayTODOList } = require('../utils/todos.js')

// can be extensible for other type and limit
const showTODOStatus = async (type, limit) => {
  let todoListPromises = [];
  const endIndex = limit * 2;
  if (type === "even") {
    for (let i = 2; i <= endIndex; i += 2) {
      const response = getTODOSById(i);
      todoListPromises.push(response);
    }
  }

  const result = await Promise.all(todoListPromises);
  const todoList = result.map((res) => res.data);
  displayTODOList(todoList);
};



module.exports = {
  showTODOStatus,
  displayTODOList
}
