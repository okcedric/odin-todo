import './main.css';
import append from "./manipulate/append"
import header from './header/header';
import render from './manipulate/render';
import openList from "./manipulate/openList";
import  data from "./data"

let body = document.querySelector("body");
let main = document.createElement('main');
append(body,header,main);
let container = render(data);
append(main,container);
openList(data[0]);
