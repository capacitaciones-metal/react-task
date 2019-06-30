import React from 'react';
import TaskNew from './TaskNew'
import TaskList from './TaskList'
import PropTypes from 'prop-types'
import eventSystem from '../EventSystem'

export default class TaskContainer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {tasks: []}

        this.handleAddTask = this.handleAddTask.bind(this);
        this.handleDeleteTask = this.handleDeleteTask.bind(this);
    }

    handleAddTask(task) {

        //Por inmutabilidad no usar push (usar concat o spread operator)
        const newTasks = this.state.tasks.concat(task);
        this.setState({tasks: newTasks})

    }

    handleDeleteTask(id) {
        console.log(id)
        const newTasks = this.state.tasks.filter((value, index) => {
            return index !== id
        })
        this.setState({tasks: newTasks})
    }


    componentDidMount() {
        eventSystem.subscribe('delete-task', this.handleDeleteTask);
    }


    render() {
        return (
            <div>
                <h3>Gestion de tareas</h3>
                <TaskNew addTask={this.handleAddTask}/>

                <TaskList list={this.state.tasks}/>
            </div>
        );
    }


}

TaskContainer.propTypes = {
    tasks: PropTypes.array
};