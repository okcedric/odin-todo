export default function create(tag, text, newClass) {
    let el = document.createElement(tag);
    if (newClass) el.classList.add(newClass);
    el.textContent = text;
    return el
}