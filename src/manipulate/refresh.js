import renderLists from "./render";
import data from "../data";
import append from "./append";
import openList from "./openList";

export default function refresh() {
    let list = document.querySelector('.open-list');
    let container = renderLists(data);
    let main = document.querySelector('main');
    append(main, container);
    if (list) {
        let id = list.getAttribute('data-id');
        openList(data[id]);
    }
}