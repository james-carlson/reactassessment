import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllTasks } from './reducer';
import { Link } from 'react-router-dom';

class TaskList extends Component {
    componentDidMount() {
        //get all tasks
        this.props.getAllTasks()
    }

    render() {
        let completedTasks = [];
        let incompleteTasks = [];

        //sort
        this.props.tasks.map(task => {
              task.completed === true ? completedTasks.push(task) : incompleteTasks.push(task)
        })

        //complete
        console.log("completed", completedTasks)
        const completedTasksDisplay = completedTasks.map(task => {
            return <div key={task.id}>
                <div><strike>{task.title}</strike>
                </div></div>
        })

        //incomplete
        const incompleteTasksDisplay = incompleteTasks.map(task => {
            return <div key={task.id}>
                <Link to={`/${task.id}`}><div className="incomplete-task">{task.title} | {task.description} | </div></Link>
                </div>
        })


        return (
            <div>
                
                <div>
                    <b>TO DO:</b>
                    {incompleteTasksDisplay}
                </div>
                <div>
                    <b>DONE:</b>
                    {completedTasksDisplay}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { tasks } = state;

    return {
        tasks
    };
}

export default connect(mapStateToProps, { getAllTasks })(TaskList);