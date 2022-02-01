import create from "./create";
import append from "./append";
import closeOverlay from "./closeOverlay";
import refresh from "./refresh";


export default function createOverlay(list) {
    let overlay = create("div", "", "overlay");
    let card = create('div', '', 'card');
    let cardContent = create('div', '', 'card-content');
    let textDiv = create('div', '', 'text-div');
    let divClose = create('div', '', 'div-close');
    let close = create('button', "×", 'close');
    let buttons = create('div', '', 'button-rack');
    let saveButton = create('button', "Save changes", "save");
    let deleteButton = create('button', "delete", "delete");
    let priority = create('div', '', 'priority');


    append(cardContent, textDiv);
    append(buttons, saveButton, deleteButton);
    append(divClose, priority, close);
    append(card, divClose, cardContent, buttons);
    append(overlay,card)
    card.onclick = (e) => e.stopPropagation();

    
    close.onclick = (e) => {
        closeOverlay();
        refresh();
        e.stopPropagation();
    }
    
    overlay.onclick = (e) => {
        closeOverlay();
        refresh();
        e.stopPropagation();
    }

    return overlay
}