export default function create(tag, text, newClass) {
    let el = document.createElement(tag);
    if (newClass) el.classList.add(newClass);
    if (text) el.textContent = text;
    return el
}