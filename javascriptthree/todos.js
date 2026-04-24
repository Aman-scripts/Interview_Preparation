class Todo {
  constructor() {
    this.todos = []
  }
  add(todo) {
    this.todos.push(todo)
  }
  remove(indexOfTodo) {
    if(indexOfTodo<0 || indexOfTodo>=this.todos.length) return ;
    this.todos.splice(indexOfTodo, 1)
  }
  update(index, updatedTodo) {
    if(index <0||index>=this.todos.length) return ;
    this.todos[index] = updatedTodo
  }
  getAll() {
    return this.todos;
  }
  get(indexOfTodo) {
    if(indexOfTodo<0||indexOfTodo>=this.todos.length) return null;
    return this.todos[indexOfTodo]
  }
  clear() {
    this.todos = []
  }

}

let todo = new Todo();

todo.add("Learn JS")
todo.add("Build Projects")
console.log(todo.getAll())
todo.update(1,"Learn AdvancedJS")
console.log(todo.getAll())
todo.remove(1)
console.log(todo.getAll())
todo.clear()
console.log(todo.getAll())