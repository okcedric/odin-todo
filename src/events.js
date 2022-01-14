import openList from "./manipulate/openList";
import data  from "./data";
import closeLists from "./manipulate/closeList";

export default function events() {
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


