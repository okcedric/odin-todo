import data from "./data";
function toJSON(data) {
    let array = [];
    data.forEach(list => {
        let jList={};
        jList.name = list.name;
        let tasks = []; 
        list.tasks.forEach(task => {
            let jTask={};
            jTask.title = task.title;
            jTask.description = task.description;
            jTask.priority = task.priority;
            jTask.notes = task.notes;
            jTask.status = task.status;
            jTask.date = task.dueDate.c;
            tasks.push(jTask);
        })
        jList.tasks = tasks;
        array.push(jList);
    });
    let string = JSON.stringify(array);
    return string;
}

export default function save() {
    if(localStorage) {
        localStorage.setItem('data', toJSON(data))
    }
}
