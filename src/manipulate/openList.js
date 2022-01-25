import './icons.css';
import create from "./create";
import append from "./append";
import openTask from "./openTask";
import events from "../events";
import refresh from "./refresh";


export default function openList(list){
    function associatedDOMlist(id) {
        let listsNode = document.querySelectorAll(`.list`);
        return listsNode[id];
    }
    let id = list.id;
    
    let tasks = create('div','','tasks');
    let todo = create('ul','','todo');
    let done = create('ul','','done');
    let addTaskButton = create('button', "Add task +", 'add-task');
    let listComponent = associatedDOMlist(id);
    let chevron = listComponent.querySelector('.chevron');
    let main = document.querySelector('main');
    
    append(tasks, todo, done, addTaskButton)
    append(listComponent, tasks);
    
    if (list.tasks.length == 0) {
        let empty = create('div','This list is empty',"empty");
        append(todo,empty);
    } else {
        
        list.tasks.forEach(task => {
            
            let li = create('li');
            let header = create('div', '', 'header');
            let puce = create('span', '', 'puce');
            let title = create('h2', task.getTitle(), 'title');
            let desc = create('p', task.getDate(), 'description');
            let icons = create('div','','icons');
            let deleteIcon = create('span','delete','deleteIcon');
            let doneIcon = create('span','done','doneIcon');
            let scheduleIcon = create('span','schedule','scheduleIcon');

            deleteIcon.classList.add('material-icons');
            doneIcon.classList.add('material-icons');
            scheduleIcon.classList.add('material-icons');
            append(header, puce, title,desc);
            li.classList.add(task.getPriority());
            let status = task.getStatus();
            
            let ul = document.querySelector(`.${status}`);
            
            if (status=='todo') append(icons, scheduleIcon, doneIcon, deleteIcon);
            
            append(li, header,icons); 
            
            append(ul, li);
            
            li.onclick = function (){
                let overlay = openTask(task);
                append(main,overlay)
            }
            
            deleteIcon.onclick = (e) => {
                e.stopPropagation();
                list.deleteTask(task);
                refresh();
            };
            
            doneIcon.onclick = (e) => {
                e.stopPropagation();
                task.setStatus('done');
                refresh();
            };
        });
    }
    
    listComponent.classList.add('open-list');
    chevron.textContent = "-";
    
    
    
    let listTitle = document.querySelector('.open-list .list-title');
    
    if (listTitle){
        listTitle.onclick = (e) => {
            if(listComponent.classList.contains('open-list')){
                events.editNameList(list);
                e.stopPropagation();
            }
        }
    }
    
    addTaskButton.onclick = function () {
        events.addNewTask(list);
    }
    
    return tasks
}