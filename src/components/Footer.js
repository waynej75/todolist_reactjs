import React, { Component } from "react";

export default class Footer extends Component {
    
    // showComplete = () => {
    //     const{showcomplete} = this.props
    //     showcomplete()
    // }
    // showAll = () => {
    //     this.props.showall()
    // }
    // showActive = () => {
    //     this.props.showactive()
    // }
    clearCp = () => {
        this.props.clearcp()
    }
    render() {
        const {todos} = this.props
        return (
            <>
                <footer className="todo-app__footer" id="todo_footer">
                    <div id="todo-count" className="todo-app__total">{todos.length} left</div>
                    <ul className="todo-app__view-buttons">
                        <button onClick={this.props.showall}>All</button>
                        <button onClick={this.props.showactive}>Active</button>
                        <button onClick={this.props.showcomplete}>Completed</button>
                    </ul>
                    <div className="todo-app__clean"><button onClick={this.clearCp}>Clear Completed</button></div>
                </footer>
            </>   
        )
    }
}