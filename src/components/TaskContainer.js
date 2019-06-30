import React from 'react';
import TaskNew from './TaskNew'
import TaskList from './TaskList'
import PropTypes from 'prop-types'

export default class TaskContainer extends React.Component {

    constructor(props){
        super(props)

        this.state = {tasks: []}

        this.handleAddTask = this.handleAddTask.bind(this);
    }

    handleAddTask(task){

        //Por inmutabilidad no usar push (usar concat o spread operator)
        const newTasks = this.state.tasks.concat(task);
        this.setState({tasks:newTasks})

    }

    render() {
        return (
            <div>
                <h3>Gestion de tareas</h3>
                <TaskNew addTask={this.handleAddTask} />

                <TaskList list={this.state.tasks} />
            </div>
        );
    }


}

TaskContainer.propTypes = {
    tasks: PropTypes.array
};