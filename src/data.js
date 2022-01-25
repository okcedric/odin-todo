import Task from "./logic/task";
import List from "./logic/list";
import { DateTime } from "luxon";


let task1 = new Task(
    "Call Muriel", 
    "To get her advice on the new design", 
    DateTime.fromObject({ day: 29})
    );
let task2 = new Task(
    "Send the newsletter",
    "The January newsletter  ",
    DateTime.utc(2022, 3, 10)
);
let task3 = new Task(
    "Get to the grocery store",
    "Get all the ingredient for making Osso-Buco except flour ",
    DateTime.utc(2022, 1, 25)
);



let task4 = new Task(
    "Buy some flowers for Liliane",
    "It's her birthday ",
    DateTime.utc(2022, 5, 13)
);



let defaultList = new List("Work");
let secondList = new List('Home');
defaultList.addTask(task1);
defaultList.addTask(task2);
task2.setPriority('high');
secondList.addTask(task3);
task3.setPriority('low');
secondList.addTask(task4);


let data = [defaultList, secondList];


export default data;