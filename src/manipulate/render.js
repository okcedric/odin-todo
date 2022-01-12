import append from "./append";
import create from "./create";
import "./render.css";

export default function renderLists(data){
    let container = create('div',"","container");
    let i = 0;
    data.forEach(list => {
        let chevron = create('div','+','chevron');
        let listHeader = create('div',"","list-header");
        let listComponent= create('div',"","list");
        listComponent.setAttribute('data-id',i);
        let listTitle = create('h1',list.name);
        append(listHeader,listTitle,chevron);      
        append(listComponent,listHeader)
        append(container,listComponent);  
        i++;
       
    });

   
    let addListButton = create('button',"Add new list", 'add-list');
    append(container,addListButton );
    return container;
}