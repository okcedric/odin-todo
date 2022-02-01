import append from "../manipulate/append";
import create from "../manipulate/create";
import './header.css';

let header = create("header");
let logo = create("div","LeFaire","logo");
append(header,logo);



export default header;
