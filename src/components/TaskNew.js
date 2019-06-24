import React from 'react';
import PropTypes from 'prop-types'

export default class TaskNew extends React.Component {


    constructor(props){
        super(props);

        this.state = {task: ""};

        this.handleTaskChange = this.handleTaskChange.bind(this);
    }

    handleTaskChange(event){
        this.setState({task: event.target.value});
    }

    handleAddTask(){
        if(this.state.task){
            this.props.addTask(this.state.task)
            this.setState({task:""})
        }
    }

    render(){
        return (
            <div>
                <label>Agregar Tarea: </label>
                <input type="text" name="task" value={this.state.task}  onChange={this.handleTaskChange} />
                <button onClick={this.handleAddTask.bind(this)}>Agregar</button>
            </div>
        );
    }

}


TaskNew.propTypes = {
    addTask: PropTypes.func
};