import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TodoItem from "../components/TodoItem";

class TodoApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            showtodos:[]
        }
        //this.addtodo = this.addtodo.bind(this) if no arrow
    }
    addtodo = (todo) => {
        const {todos} = this.state
        todo.complete = false
        todos.push(todo)
        this.setState({todos, showtodos:todos})
    }
    deletetodo = (id) => {
        let todos = this.state.todos
        todos = todos.filter(todo => todo.id !== id)
        this.setState({todos, showtodos: todos})
    }
    checktodo = (todo) => {
        let todos = this.state.todos
        todo.complete ^= 1
        this.setState({showtodos: todos})
    }
    showcomplete = () => {
        let {todos} = this.state
        todos = todos.filter(t => t.complete)
        this.setState({showtodos: todos})
    }
    showactive = () => {
        let {todos} = this.state
        todos = todos.filter(todo => !todo.complete)
        this.setState({showtodos: todos})
    }
    showall = () => {
        const {todos} = this.state
        this.setState({showtodos: todos})
    }
    clearcp = () => {
        let {todos} = this.state
        todos = todos.filter(todo => !todo.complete)
        this.setState({todos, showtodos: todos})
    }
    render() {
        const {showtodos, todos} = this.state
        return (
            <>  
                <div className="todo-app__root"><Header text="todos" /></div>
                <div className="todo-app__main">
                    <TodoAdd addtodo={this.addtodo} />
                    <ul className="todo-app__list" id="todo-list">
                    {
                    showtodos.map(t => <TodoItem todo ={t} deletetodo={this.deletetodo}checktodo={this.checktodo}/>)
                    }
                    </ul>
                </div>
                <Footer todos={todos} showcomplete={this.showcomplete} showall={this.showall} 
                showactive={this.showactive} clearcp={this.clearcp}/>
            </>
        );
    }
}
class TodoAdd extends Component {
    constructor(props) {
        super(props)
    this.state = {
        todotext:'',
        id: 0
    }
}
    handleChange = (e) => {
        const todotext = e.target.value.trim()
        this.setState({todotext})
    }
    add = (e) => {
        if (e.key === 'Enter' && e.target.value.trim()){
            //package 
            const todo = this.state
            this.props.addtodo(todo)
            // clear input
            e.target.value = ''
            this.setState(s => ({id: s.id+1}))
        }
    }
    render() {
        return (
            <div>
                <input onKeyPress={this.add} onChange={this.handleChange} type="text" 
                className="todo-app__input" placeholder="Do something for your life!" />
            </div>
        );
    }
}
export default TodoApp;
