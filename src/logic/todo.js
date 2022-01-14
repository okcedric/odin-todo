class Task {

    constructor(title, description, dueDate, notes)  {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.notes = notes;
        this.priority = "normal";
    }

    getTitle = () => this.title;
    setTitle = (newTitle) => this.title = newTitle;

    getDescription = () => this.description;
    setDescription = (newDescription) => this.description = newDescription;

    getDueDate = () => this.dueDate;
    setDueDate = (newDueDate) => this.dueDate = newDueDate;

    getNotes = () => this.notes;
    setNotes = (newNotes) => this.notes = newNotes;
    
    getPriority = () => this.priority;
    setPriority = (newPriority) => this.priority = newPriority;
    
    getStatus = () => this.status;
    setStatus = (newStatus) => this.status = newStatus;
    getParent = () => this.parent;
    setParent = (obj) => this.parent = obj;

}

export default Task;