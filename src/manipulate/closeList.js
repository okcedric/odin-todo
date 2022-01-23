


export default function closeLists() {
    let list = document.querySelector('.open-list');
    list.classList.remove('open-list');
    let chevron =  list.querySelector('.chevron');
    chevron.textContent = '+';
    let tasks = list.querySelector('.tasks')
    tasks.remove();
    }
