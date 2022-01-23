import append from "./append";
import create from "./create";
import "./render.css";
import events from '../events';
import List from "../logic/list";

export default function renderLists(data){
    let container = create('div',"","container");
    let main = document.querySelector('main');
    main.innerHTML = ' ';
    let i = 0;
    data.forEach(list => {
        let listComponent= create('div',"","list");
        let chevron = create('div','+','chevron');
        let listHeader = create('div',"","list-header");
        listComponent.setAttribute('data-id',i);
        let listTitle = create('h1',list.name,'list-title');
        console.log(list.getTodoCount());
        let taskCounter = create('p', `${list.getTodoCount()}/${list.tasks.length}`, 'taskCounter');
        let div = create('div','','flex');
        append(div, listTitle, taskCounter)
        append(listHeader,div, chevron);      
        append(listComponent, listHeader);
        append(container,listComponent);  
        list.id= i;
        

        listHeader.onclick = ()=> {
            events.focusList(list);
        }
        i++;
        
    });
    
    let addListButton = create('button',"Add new list", 'add-list');
    append(container,addListButton );


    addListButton.onclick = () => {
        let newList = new List('New list');
        data.push(newList)
        renderLists(data);
        events.editNameList(newList);
    }

    return container;
}