import openList from "./manipulate/openList";
import data  from "./data";
import closeLists from "./manipulate/closeList";
import Task from "./logic/task";
import openTask from "./manipulate/openTask";
import append from "./manipulate/append";
import create from "./manipulate/create";

let events = (function () {


    function focusList() {
       let headers = document.querySelectorAll('.list .list-header');
       headers.forEach(header => {
           let list = header.parentElement;
           header.onclick = function () {
               let id = list.getAttribute('data-id');
               let ul = list.querySelector('ul');
               closeLists();
               if (!ul) openList(data, id) 
           }
       });
    }

    function addNewTask(list) {
        let main = document.querySelector('main');
    
        
            let newTask = new Task('New task', '', '', '');
            list.addTask(newTask);
            let overlay = openTask(newTask);
            append(main, overlay);
            let overlayTitle = document.querySelector('.overlay .title');
            overlayTitle.select();
    
    }

    function editNameList(list) {
        let main = document.querySelector('main');
        let name = list.name; 
        let card = create('div', '', 'card')
        let overlay = create('div', '', 'overlay');
        let listName = create('textarea', name, 'listName');
        append(card, listName);
        append(overlay, card);
        append(main, overlay);
    }

    return {
        focusList,
        addNewTask,
        editNameList,
    }
    
})();



export default events ;