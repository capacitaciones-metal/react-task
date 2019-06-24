import React from 'react';
import TaskNew from './TaskNew'
import PropTypes from 'prop-types'

export default class TaskContainer extends React.Component {

    constructor(props){
        super(props)

        this.state = {tasks: []}

        this.handleAddTask = this.handleAddTask.bind(this);
    }

    handleAddTask(task){
        console.log(task)

        //Por inmutabilidad no usar push (usar concat o spread operator)
        const newTasks = this.state.tasks.concat(task);
        this.setState({tasks:newTasks})

    }

    render() {
        return (
            <div>
                <h3>Gestion de tareas</h3>
                <TaskNew addTask={this.handleAddTask} />
            </div>
        );
    }


}

TaskContainer.propTypes = {
    tasks: PropTypes.array
};