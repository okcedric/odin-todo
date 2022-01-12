


export default function closeLists() {
    let ul = document.querySelector('.list ul');
    if(ul) {
        let chevron =  ul.parentElement.querySelector('.chevron');
        chevron.textContent = '+';
        ul.remove();
    }
}