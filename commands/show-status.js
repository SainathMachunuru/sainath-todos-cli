import chalk from "chalk";
import { getTODOSById } from "../services/todos.js";

export const showTODOStatus = async (type, limit) => {
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
