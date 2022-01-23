import renderLists from "./render";
import data from "../data";
import append from "./append";
import openList from "./openList";



export default function closeOverlay(){
    let list = document.querySelector('.open-list');
    let id = list.getAttribute('data-id');
    let overlay = document.querySelector('.overlay');
    overlay.remove();
    let container = renderLists(data);
    let main = document.querySelector('main')
    append(main, container);
    openList(data[id]);
}