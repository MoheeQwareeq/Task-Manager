const Tasks = [];

const printMenu = () => {
  console.log("Task Manager Menu:");
  console.log("1. Add Task");
  console.log("2. View Task");
  console.log("3. Toggle Task Completion");
  console.log("4. Edit Task");
  console.log("5. Delete Task");
  console.log("6. Search Task");
  console.log("7. Exit");
};

const printTask = (task) => {
  console.log(
    `${task.id}. ${task.description} [${
      task.state ? "Completed" : "Not Completed"
    }]`
  );
};

let input;
let count = 1;
do {
  printMenu();
  input = Number(prompt("Enter your choice(1-7):"));
  let temp;
  switch (input) {
    case 1:
      const description = prompt("Enter the task description:");
      const task = { id: count++, description: description, state: false };
      if (task) {
        Tasks.push(task);
        console.log(`Task added: "${task.description}"  `);
      }
      break;

    case 2:
      Tasks.forEach(printTask);
      break;

    case 3:
      const idToCompletion = Number(prompt("Enter the task ID to completion:"));
      temp = Tasks.find((task) => task.id === idToCompletion);
      if (temp) {
        temp.state = !temp.state;
        console.log(
          `Task ${idToCompletion}  [${
            temp.state ? "Completed" : "Not Completed"
          }]`
        );
      } else console.log("Invalid ID entered.");
      break;

    case 4:
      const idToEdit = Number(prompt("Enter the task ID to edit:"));

      temp = Tasks.find((task) => task.id === idToEdit);
      if (temp) {
        const newDescription = prompt("Enter the new description:");
        if (newDescription) {
          temp.description = newDescription;
          console.log(`Task "${temp.id}" updated to ${newDescription}`);
        } else
          console.log("No new description provided. Task was not updated.");
      } else console.log("Invalid ID entered.");
      break;

    case 5:
      const idToDelete = Number(prompt("Enter the task ID to delete:"));
      const indexToDelete = Tasks.findIndex((task) => task.id === idToDelete);
      if (indexToDelete !== -1) {
        Tasks.splice(indexToDelete, 1);
        console.log(`Task ${idToDelete} deleted successfully.`);
      } else console.log("Invalid ID entered.");
      break;

    case 6:
      const searchTerm = prompt("Enter term to search for: ");
      const result = Tasks.filter((task) =>
        task.description.startsWith(searchTerm)
      );

      if (result.length > 0) {
        console.log("result:");
        result.forEach(printTask);
      } else console.log("No tasks found.");

      break;

    case 7:
      break;

    default:
      console.log("Invalid choice, Please enter a number between 1 and 6.");
      break;
  }
} while (input != 7);
