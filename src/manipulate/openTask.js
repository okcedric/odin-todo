import create from "./create";
import append from "./append";
import closeOverlay from "./closeOverlay";
import openList from "./openList";
import closeList from "./closeList"
import createOverlay from "./createOverlay";
import renderLists from "./render";
import data from "../data";

export default function openTask(task){
    let list = task.parent;
    
    
    let title = create("textarea",task.getTitle(),"title");
    title.setAttribute('value', task.getTitle());
    
    let desc = create("textarea",task.getDescription(),"description");
    
    desc.setAttribute('value', task.getDescription())
    let dueDate = create("div",task.getDueDate(),"date");
    let notes = create('textarea',task.getNotes(),'notes');
    let lowDot = create('div', '', 'low-dot');
    let normalDot = create('div', '', 'normal-dot');
    let highDot = create('div', '', 'high-dot');
    
    
    let overlay = createOverlay(list);
    let card = overlay.querySelector('.card');
    card.classList.add(task.priority)
    let priority = card.querySelector('.priority')
    let textDiv = card.querySelector('.text-div');



    let saveButton = overlay.querySelector('.save');
    let deleteButton = overlay.querySelector('.delete');
  

    normalDot.classList.add('dot');
    lowDot.classList.add('dot');
    highDot.classList.add('dot');
    
    
    append(priority,lowDot,normalDot,highDot);
    append(textDiv,dueDate,title,desc,notes);

   
    
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
        closeOverlay();
       task.setTitle(newTitle);
       task.setDescription(newDesc);
       task.setNotes(newNotes);
        task.priority = prioritySelection;
       closeList();
       openList(list);
    }



    deleteButton.onclick = () => {
        list.deleteTask(task);
        closeOverlay();
        closeList();
        openList(list);

    };


    


    
  
 
    
    return overlay;

}