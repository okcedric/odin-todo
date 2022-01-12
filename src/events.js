import openList from "./manipulate/openList";
import data  from "./data";

export default function events() {
    let chevrons = document.querySelectorAll('.chevron');
    chevrons.forEach(chevron => {

        chevron.onclick = function () {
            let list = chevron.parentElement.parentElement;
            let id = list.getAttribute('data-id');
            openList(data, id);
            i++;
        }
    });
}


