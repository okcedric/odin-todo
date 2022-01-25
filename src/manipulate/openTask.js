import create from "./create";
import append from "./append";
import closeOverlay from "./closeOverlay";
import createOverlay from "./createOverlay";
import refresh from "./refresh";
import { DateTime } from "luxon";


export default function openTask(task){
    let list = task.parent;
    let status = task.getStatus();
    let textZone = (status =='todo') ? 'textarea' : 'p';
    let title = create(textZone, task.getTitle(),"title");
    
    
    
    let desc = create(textZone, task.getDescription(), "description");
    desc.setAttribute('value', task.getDescription())
    let dueDate = create("input",'',"date");
    let notes = create(textZone,task.getNotes(),'notes');
    let lowDot = create('div', '', 'low-dot');
    let normalDot = create('div', '', 'normal-dot');
    let highDot = create('div', '', 'high-dot');
    dueDate.setAttribute('type','date');
    let isoDate = task.dueDate ? task.dueDate.toISODate() : DateTime.now().plus({day:1}).toISODate();
    dueDate.setAttribute('value', isoDate);

    
    let overlay = createOverlay(list);
    let card = overlay.querySelector('.card');
    card.classList.add(task.priority);
    let priority = card.querySelector('.priority');
    let textDiv = card.querySelector('.text-div');



    let saveButton = overlay.querySelector('.save');
    let deleteButton = overlay.querySelector('.delete');
    let buttonRack = deleteButton.parentElement;
    let todoButton = create('button', 'mark as todo', 'todo');
  

    normalDot.classList.add('dot');
    lowDot.classList.add('dot');
    highDot.classList.add('dot');
    
    
    append(priority,lowDot,normalDot,highDot);
    append(textDiv,dueDate,title,desc,notes);
    if (task.getStatus() == 'done') {
        append(buttonRack, todoButton);
    }


   
    
    let activeDot = priority.querySelector(`.${task.priority}-dot`);
    activeDot.classList.add('active');
    if (!task.getDescription()) {

        desc.setAttribute('placeholder', 'Add some details')
    }

    if (!task.getNotes()) {

        notes.setAttribute('placeholder', 'Notes: ')
    } 
    
    if (!task.getTitle()) {

        title.setAttribute('placeholder', 'Title')
    } 

    let prioritySelection = task.priority;

    if(task.getStatus()==='done') card.classList.add('done');  


    lowDot.onclick = () => {
        if(lowDot.classList.contains('active')) return;
        prioritySelection = 'low';
        let active =  priority.querySelector('.active');
        active.classList.remove('active');
        lowDot.classList.add('active');
        if (card.classList.contains('normal')) card.classList.remove('normal');
        if (card.classList.contains('high')) card.classList.remove('high');
        card.classList.add('low');
    }
    normalDot.onclick = () => {
        if(normalDot.classList.contains('active')) return;
        prioritySelection = 'normal';
        let active = priority.querySelector('.active');
            active.classList.remove('active');
        normalDot.classList.add('active');
        if (card.classList.contains('low')) card.classList.remove('low');
        if (card.classList.contains('high')) card.classList.remove('high');
        card.classList.add('normal');
        
    }
    highDot.onclick = () => {
        if (highDot.classList.contains('active')) return;
        prioritySelection = 'high';
        let active = priority.querySelector('.active');
        active.classList.remove('active');
        highDot.classList.add('active');
        if (card.classList.contains('normal')) card.classList.remove('normal');
        if (card.classList.contains('low')) card.classList.remove('low');
        card.classList.add('high');

    }
    
    
    saveButton.onclick=() => {
        let newTitle = title.value;
        let newDesc = desc.value;
        let newNotes = notes.value;
        let newDate = dueDate.value;
        closeOverlay();
       task.setTitle(newTitle);
       task.setDescription(newDesc);
       task.setNotes(newNotes);
        task.setPriority(prioritySelection);
        task.setDate(DateTime.fromISO(newDate));

       refresh();  
    }

    if (status =='done') {
        saveButton.remove();
        lowDot.remove();
        highDot.remove();
        normalDot.remove();
    }

    deleteButton.onclick = () => {
        list.deleteTask(task);
        closeOverlay();
        refresh();
        
    };
    
    
    todoButton.onclick = () => {
        closeOverlay();
        task.setStatus('todo');
        refresh();
    }
    
    
    return overlay;

}