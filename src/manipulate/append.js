export default function append(target,...children) {
     children.forEach(child => {
       target.appendChild(child);
    });
}