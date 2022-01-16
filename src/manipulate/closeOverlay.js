import renderLists from "./render";
import data from "../data";
import append from "./append";


export default function closeOverlay(){
    let overlay = document.querySelector('.overlay');
    overlay.remove();
    let container = renderLists(data);
    let main = document.querySelector('main')
    append(main, container);
}