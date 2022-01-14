import create from "./create";
import append from "./append";
import openTask from "./openTask";
import Task from "../logic/todo";



export default function openList(data,id){
    function associatedDOMlist(id) {
        let listsNode = document.querySelectorAll(`.list`);
        return listsNode[id];
    }


    let ul = create('ul');
    let list = data[id];
    let listComponent = associatedDOMlist(id);
    let chevron = listComponent.querySelector('.chevron');
    let main = document.querySelector('main');
   
    if (list.tasks.length == 0) {
        let empty = create('div','This list is empty',"empty");
        append(ul,empty);
    } else {

        list.tasks.forEach(task => {
            let header = create('div', '', 'header');
            let puce = create('span', '', 'puce');
            let title = create('h2', task.getTitle(), 'title');
            append(header, puce, title);
            let desc = create('p', task.getDescription(), 'description');
            let li = create('li');
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
    let addtaskButton = create('button', "Add task +", 'add-task');

    addtaskButton.onclick = function (){
        let newTask = new Task('New task','','','');
        list.addTask(newTask);
        let overlay= openTask(newTask);
        append(main,overlay);
        let title = document.querySelector('.overlay .title');
        title.select();
    }
    append(ul, addtaskButton);
    return ul
}