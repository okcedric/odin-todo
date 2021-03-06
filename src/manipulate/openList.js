import './icons.css';
import create from "./create";
import append from "./append";
import openTask from "./openTask";
import events from "../events";
import refresh from "./refresh";
import { DateTime } from 'luxon';
import save from '../save';


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
            let date = create('p', task.getDate(), 'date');
            let now = DateTime.now();
            
            if (task.getDate() && task.isOverdue()) date.classList.add('overdue')
            
            let icons = create('div','','icons');
            let deleteIcon = create('span','delete','deleteIcon');
            let doneIcon = create('span','done','doneIcon');

            deleteIcon.classList.add('material-icons');
            doneIcon.classList.add('material-icons');
            append(header, puce, title,date);
            li.classList.add(task.getPriority());
            let status = task.getStatus();
            
            let ul = document.querySelector(`.${status}`);
            
            if (status=='todo') append(icons, doneIcon, deleteIcon);
            
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
                save();
            };
            
            doneIcon.onclick = (e) => {
                e.stopPropagation();
                task.setStatus('done');
                refresh();
                save();
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