class List {

    constructor(name,task) {
        this.name= name;
        this.tasks = [];
        if (task) this.tasks.push(task);
    }

    getName = () => this.name;
    setName = (newName) => this.name = newName;

    gettasks = () => this.tasks;
    addTask =(task) => {
        this.tasks.push(task);
        task.parent = this;
    }
    deleteTask= (oldTask) => {
        let rank=0;
        this.tasks.forEach( (task) =>{
            if (oldTask ===  task) this.tasks.splice(rank, 1);
            rank++;
        });
    }
}


export default List;