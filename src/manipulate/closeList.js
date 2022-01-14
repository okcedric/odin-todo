


export default function closeLists() {
    let ul = document.querySelector('.list ul');
    
    if(ul) {
        let list = ul.parentElement;
        list.classList.remove('open-list');
        let chevron =  ul.parentElement.querySelector('.chevron');
        chevron.textContent = '+';
        ul.remove();
    }
}