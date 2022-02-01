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


let dummyData = 
    [{
        'name':'Work',
        'tasks': [{
                'title': 'Send the newsletter',
                'description': 'The January newsletter',
                'date': {
                    'year': "2022",
                    'month': '3',
                    'day': '10'
                },
                'priority' : 'high'
            },
            {
                'title': 'Call Mélanie',
                'description': 'To get her advice on the new design',
                'date': {
                    'year': "2022",
                    'month': '1',
                    'day': '29'
                }
            }
        ]
        
    },
    {
        'name':'Home',
        'tasks': [{
                'title': 'Get to the grocery store',
                'description': 'Get all the ingredient for making Osso-Buco except flour ',
                'date': {
                    'year': "2022",
                    'month': '1',
                    'day': '25'
                },
                'priority':'low'
            },
            {
                'title': 'Buy some flowers for Liliane',
                'description': 'It\'s her birthday',
                'date': {
                    'year': "2022",
                    'month': '5',
                    'day': '13'
                },
                'status' : 'done'
            }
        ]
    }]

    
    
    function toData(array) {
        console.log(array)
        let data = [];
        
        array.forEach(jList => {
            let list = new List(jList.name);
            jList.tasks.forEach(jTask=> {
                let task = new Task(
                jTask.title,
                jTask.desc,
                DateTime.fromObject( jTask.date)
                );
            task.setParent(list);
            if(jTask.priority) task.setPriority(jTask.priority);
            if(jTask.notes) task.setNotes(jTask.notes);
            if(jTask.status) task.setStatus(jTask.status);
            list.tasks.push(task);
        })
        data.push(list);
    });
    return data;
}

let stored = localStorage && localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : dummyData;
let data = toData(stored);

export default data;