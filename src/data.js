import Task from "./logic/task";
import List from "./logic/list";

let task1 = new Task(
    "Call Muriel", 
    "To get her advice on the new design", 
    "13/01/22"
    );

let task3 = new Task(
    "Get to the grocery store",
    "Get all the ingredient for making Osso-Buco except flour ",
    "13/01/22"
);

let task2 = new Task(
    "Send the newsletter",
    "The January newsletter  ",
    "13/01/22"
);

let task4 = new Task(
    "Buy some flowers for Liliane",
    "It's her birthday ",
    "13/01/22"
);



let defaultList = new List("Work");
let secondList = new List('Personal');
defaultList.addTask(task1);
defaultList.addTask(task2);
task2.setPriority('high');
secondList.addTask(task3);
task3.setPriority('low');
secondList.addTask(task4);


let data = [defaultList, secondList];

export default data;