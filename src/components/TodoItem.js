import React, { Component } from "react";
import propTypes from 'prop-types'
import Ximg from "../img/x.png";

export default class TodoItem extends Component {
    static propTypes = {
        todo: propTypes.object.isRequired
    }
    handleClick = () => {
        const {deletetodo, todo} = this.props
        deletetodo(todo.id)
    }
    check = () => {
        this.props.checktodo(this.props.todo)
    }
    render() {
        const {todo} = this.props
        return(
            <li className="todo-app__item">
                <div className="todo-app__checkbox">
                    <input id={todo.id} type="checkbox" checked={todo.complete} onClick={this.check}></input>
                    <label htmlFor={todo.id}></label>
                </div>
                <h1 className="todo-app__item-detail" style={{opacity:todo.complete ? 0.3 : 1,
                textDecoration:todo.complete ? "line-through" : "none"}}>{todo.todotext}</h1>
                <img className="todo-app__item-x" src={Ximg} onClick={this.handleClick}></img>
            </li>
        )
    }
}

