import React from 'react';
import TaskNew from './TaskNew'


export default class TaskContainer extends React.Component {



    handleAddTask(task){
        console.log(task)
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