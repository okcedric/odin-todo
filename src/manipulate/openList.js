import create from "./create";
import append from "./append";
import openTask from "./openTask";
import Task from "../logic/task";
import events from "../events";



export default function openList(data,id){
    function associatedDOMlist(id) {
        let listsNode = document.querySelectorAll(`.list`);
        return listsNode[id];
    }


    let list = data[id];
    let ul = create('ul');
    let addtaskButton = create('button', "Add task +", 'add-task');
    let listComponent = associatedDOMlist(id);
    let chevron = listComponent.querySelector('.chevron');
    let main = document.querySelector('main');
    
    if (list.tasks.length == 0) {
        let empty = create('div','This list is empty',"empty");
        append(ul,empty);
    } else {
        
        list.tasks.forEach(task => {
            let li = create('li');
            let header = create('div', '', 'header');
            let puce = create('span', '', 'puce');
            let title = create('h2', task.getTitle(), 'title');
            let desc = create('p', task.getDescription(), 'description');
            append(header, puce, title);
            if (task.priority=='high') li.classList.add('high');
            if (task.priority=='low') li.classList.add('low');
            
            append(li, header, desc);
            append(ul, li);
            
            li.onclick = function (){
                let overlay = openTask(task);
                append(main,overlay)
            }
        });
    }
    
    listComponent.classList.add('open-list');
    chevron.textContent = "-";
    append(listComponent, ul);
    append(ul, addtaskButton);
    
    
    let listTitle = document.querySelector('.open-list .list-title');

    if (listTitle){
        listTitle.onclick = (e) => {
            if(listComponent.classList.contains('open-list')){
                events.editNameList(list);
                e.stopPropagation();
            }
        }
    }
    
    addtaskButton.onclick = function () {
        events.addNewTask(list);
    }

    return ul
}