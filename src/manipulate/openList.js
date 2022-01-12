import create from "./create";
import append from "./append";
import closeLists from './closeList';



export default function openList(data,id){
    function associatedDOMlist(id) {
        let listsNode = document.querySelectorAll(`.list`);
        return listsNode[id];
    }
    closeLists();
    let ul = create('ul');
    let list = data[id];
    let listComponent = associatedDOMlist(id);
    let chevron = listComponent.querySelector('.chevron');
    list.todos.forEach(todo => {
        let header = create('div', '', 'header');
        let puce = create('span', '', 'puce');
        let title = create('h2', todo.getTitle(), 'title');
        append(header, puce, title);
        let desc = create('p', todo.getDescription(), 'description');
        let li = create('li');
        append(li, header, desc);
        append(ul, li);
        append(listComponent, ul);
        chevron.textContent = "-";
        
    })
    let addTodoButton = create('button', "Add task +", 'add-task');
    append(ul, addTodoButton);
    return ul
}