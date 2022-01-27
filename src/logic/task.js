import {DateTime} from  'luxon';

class Task {
    constructor(title, description, dueDate, notes)  {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.notes = notes;
        this.priority = "normal";
        this.status = 'todo';
    }

    getTitle = () => this.title;
    setTitle = (newTitle) => this.title = newTitle;

    getDescription = () => this.description;
    setDescription = (newDescription) => this.description = newDescription;

    getDate = () => {
        if (this.dueDate.isValid) return this.dueDate.toLocaleString(DateTime.DATE_FULL);
    }
    
    setDate = (newDueDate) => this.dueDate = newDueDate;

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