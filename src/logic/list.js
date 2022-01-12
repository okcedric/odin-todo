class List {

    constructor(name,todo) {
        this.name= name;
        this.todos = [];
        if (todo) this.todos.push(todo);
    }

    getName = () => this.name;
    setName = (newName) => this.name = newName;

    getTodos = () => this.todos;
    addTodo =(todo) => this.todos.push(todo);
    deleteTodo = (rank) => this.todos.splice(rank,1);
}

export default List;