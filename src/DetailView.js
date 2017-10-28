import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllTasks, createTask, updateTask, deleteTask, completeTask, recordNewText } from './reducer';


class DetailView extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         newTitle: '',
    //         newDescription: '',
    //         completed: false,
    //     }

    //     handleNewTitle(input){
    //         this.setState({
    //             newTitle:  
    //         })

    // }

    componentDidMount() {

    }

    render() {
        const taskData = () => {
            return this.props.tasks.filter(task => {
                return task.id == this.props.match.params.task_id
            })
        }

        const task = taskData()[0]
        console.log("task", task);
        // const { id, title, description, completed } = task

        const taskDisplay = () => {
            if (task) {
                return (
                    <div key={task.id}>
                        <h1>TASK DETAIL</h1>
                        <h2>title</h2>
                        <input placeholder={task.title} onChange={(e) => this.props.recordNewText(e.target.value, "newTaskName")} value={this.props.newTitle} />
                        <button onClick={() => this.props.updateTask(task.id, { "title": this.props.newTaskName })}>SAVE</button>
                        <button onClick={() => handleCancel()}>CANCEL</button>
                        <h2>description</h2>
                        <input placeholder={task.description} onChange={(e) => this.props.recordNewText(e.target.value, "newTaskDescription")} value={this.props.newDescription} />
                        <button onClick={() => this.props.updateTask(task.id, { "description": this.props.newTaskDescription })}>SAVE</button>
                        <h2>status</h2>
                        {task.completed === true ? "COMPLETE" : <div><span>{"NOT FINISHED"}</span><button onClick={() => this.props.updateTask(task.id, { "completed": true })}>MARK AS COMPLETE</button></div>}
                        <h1>cancel</h1>
                        <Link to="/"><button>Cancel</button></Link>
                        <h1>delete</h1>
                        <Link to="/"><button onClick={() => this.props.deleteTask(task.id)}>DELETE THIS TASK</button></Link>
                    </div>
                )
            }
        }
        return (
            <div>
                <div><Link to="/"><button>GO BACK TO THE TASK LIST</button></Link></div>
                {taskDisplay()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state
}

const outputActions = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    completeTask, recordNewText
}

export default connect(mapStateToProps, outputActions)(DetailView);