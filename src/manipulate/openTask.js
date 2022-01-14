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

    if(task.priority=='high') card.classList.add('high');
    if(task.priority=='low') card.classList.add('low');

    let title = create("textarea",task.getTitle(),"title");

    title.setAttribute('value', task.getTitle());
   
    let desc = create("textarea",task.getDescription(),"description");
    
    desc.setAttribute('value', task.getDescription())
    let dueDate = create("div",task.getDueDate(),"date");
    let notes = create('textarea','','notes');
    if (task.getNotes()) notes.innerText = task.getNotes();
    let priority = create('div', `${task.getPriority()} priority`, 'priority');
    let textDiv = create('div','','text-div');
    let cardContent = create('div','','card-content');
    let divClose = create('div','','div-close');
    let close = create('button',"×",'close');
    let buttons = create('div','','button-rack');
    let saveButton = create('button',"Save changes","save");
    let deleteButton = create('button',"delete","delete");
  

    

    append(textDiv,dueDate,title,desc,notes);
    append(cardContent,textDiv);
    append(buttons,saveButton,deleteButton);
    append(divClose,priority,close);
    append(card,divClose,cardContent,buttons);

    if (!task.getDescription()) {

        desc.setAttribute('placeholder', 'Add some details')
    }

    if (!task.getNotes()) {

        notes.setAttribute('placeholder', 'Notes: ')
    } 
    
    if (!task.getTitle()) {

        title.setAttribute('placeholder', 'Title')
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

       task.setTitle(newTitle);
       task.setDescription(newDesc);
       task.setNotes(newNotes);
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