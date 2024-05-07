const chalk  = require('chalk')

const displayTODOList = (todoList) => {
    if (todoList && todoList.length) {
      console.log(
        chalk.blue.bold(
          " ===== Tasks in green are completed. Tasks in red are still not completed. ======"
        )
      );
      todoList.forEach((task) => {
        if (task.completed) {
          console.log(
            chalk.greenBright(`Task Id : ${task.id} Status: Completed`)
          );
        } else {
          console.log(
            chalk.redBright(`Task Id : ${task.id} Status: Not completed`)
          );
        }
      });
    } else {
      console.log(chalk.red.bold("You don't have any tasks in todo list."));
    }
  };

  module.exports = {
    displayTODOList
  }