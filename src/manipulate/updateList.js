import openList from "./openList";
import closeLists from "./closeList";

export default function updateList(list) {
    closeLists();
    openList(list); 
}