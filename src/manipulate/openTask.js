import create from "./create";
import append from "./append";
import closeOverlay from "./closeOverlay";
import data from "../data";
import openList from "./openList";
import closeList from "./closeList"

export default function openTask(task){
    let overlay = create("div","","overlay");
    let card = create('div','','card');
    let list = task.parent;
   
    let listID = document.querySelector('.open-list').getAttribute('data-id');

    card.classList.add(task.priority);
    

    let title = create("textarea",task.getTitle(),"title");

    title.setAttribute('value', task.getTitle());
   
    let desc = create("textarea",task.getDescription(),"description");
    
    desc.setAttribute('value', task.getDescription())
    let dueDate = create("div",task.getDueDate(),"date");
    let notes = create('textarea','','notes');
    if (task.getNotes()) notes.innerText = task.getNotes();
    let priority = create('div', '', 'priority');
    let lowDot = create('div', '', 'low-dot');
    let normalDot = create('div', '', 'normal-dot');
    let highDot = create('div', '', 'high-dot');
    let textDiv = create('div','','text-div');
    let cardContent = create('div','','card-content');
    let divClose = create('div','','div-close');
    let close = create('button',"×",'close');
    let buttons = create('div','','button-rack');
    let saveButton = create('button',"Save changes","save");
    let deleteButton = create('button',"delete","delete");
  

    normalDot.classList.add('dot');
    lowDot.classList.add('dot');
    highDot.classList.add('dot');
    
    append(textDiv,dueDate,title,desc,notes);
    append(cardContent,textDiv);
    append(buttons,saveButton,deleteButton);
    append(priority,lowDot,normalDot,highDot);
    append(divClose,priority,close);
    append(card,divClose,cardContent,buttons);
    
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
    
    close.onclick= () => {
        closeOverlay();
        closeList();
        openList(data, listID);
    }

    overlay.onclick = () => {
        closeOverlay();
        closeList();
        openList(data, listID);
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
       openList(data, listID);
       closeOverlay();
    }



    deleteButton.onclick = () => {
        list.deleteTask(task);
        closeOverlay();
        openTask(task);
        closeList();
        openList(data,listID);
    };


    overlay.appendChild(card);


    card.onclick= (e) => e.stopPropagation();
  
 
    
    return overlay;

}