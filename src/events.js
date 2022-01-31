import create from "./manipulate/create";
import Task from "./logic/task";
import openTask from "./manipulate/openTask";
import append from "./manipulate/append";
import createOverlay from './manipulate/createOverlay';
import openList from './manipulate/openList';
import closeList from './manipulate/closeList';
import renderLists from "./manipulate/render";
import data from './data'
import refresh from "./manipulate/refresh";
import save from "./save";

let events = (function () {


    function focusList(list) {
        let alreadyOpenList = document.querySelector('.open-list');
        
        if(alreadyOpenList){
            alreadyOpenList
            let openID = alreadyOpenList.getAttribute('data-id');
            let clickedID= list.id;
            closeList();
            if (clickedID != openID) openList(list)
             
        } else {    
            openList(list);
            
        }
        
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
        let overlay = createOverlay(list);
        let textDiv = overlay.querySelector('.text-div');
        let title = create("textarea", list.getName(), "title");
        append(textDiv, title)
        append(main, overlay);
        let saveButton = overlay.querySelector('.save');
        let deleteButton = overlay.querySelector('.delete');
        title.select();
        saveButton.onclick = () => {
            let newName = title.value;
            list.setName(newName);
            refresh();
            save();
        }
        
        
        
        deleteButton.onclick = () => {
            let id = list.id;
            data.splice(id, 1);
            refresh();
            save();
        };
    }

    return {
        focusList,
        addNewTask,
        editNameList,
    }
    
})();



export default events ;