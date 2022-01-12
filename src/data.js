import Todo from "./logic/todo";
import List from "./logic/list";

let task1 = new Todo(
    "This is a dummy task", 
    "You can edit it, or delete it if you want ", 
    "13/01/22"
    );

let task2 = new Todo(
    "Get to the grocery store",
    "Get all the ingredient for making Osso-Buco except flour ",
    "13/01/22"
);

let task3 = new Todo(
    "Send the newsletter",
    "Send the Polar bear newsletter  ",
    "13/01/22"
);

let task4 = new Todo(
    "Buy some flowers for Liliane",
    "It's her birthday ",
    "13/01/22"
);


let defaultList = new List("Example list");
defaultList.addTodo(task1);
defaultList.addTodo(task2);
defaultList.addTodo(task3);
defaultList.addTodo(task4);

let data = [defaultList, defaultList, defaultList, defaultList, defaultList];

export default data;