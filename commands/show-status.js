import chalk from 'chalk'
import axios from 'axios';


export const showTODOStatus =  async () => {
    let todoListPromises = [];
    const endIndex = 20 * 2;

        for(let i = 2; i <= endIndex ; i +=2 ) {
            const response = axios.get(`https://jsonplaceholder.typicode.com/todos/${i}`);
            todoListPromises.push(response)
        } 

    const result = await Promise.all(todoListPromises);
    const todoList = result.map((res) => res.data);

    if (todoList && todoList.length) {
        console.log(
            chalk.blue.bold(' ===== Tasks in green are completed. Tasks in red are still not completed. ======')
        )
        todoList.forEach((task) => {
                if(task.completed) {
                    console.log(
                        chalk.greenBright(`Task Id : ${task.id} Status: Completed`)
                    )
                } else {
                    console.log(
                        chalk.redBright(`Task Id : ${task.id} Status: Not completed`)
                    )
                }
        })
    } else {
        console.log(
            chalk.red.bold('You don\'t have any tasks in todo list.')
        )
    }
}