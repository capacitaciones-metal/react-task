import React from 'react'
import PropTypes from 'prop-types'
import eventSystem from '../EventSystem'

export default class TaskListItem extends React.Component{

    constructor(props){
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        if(window.confirm("Esta seguro de eliminar la tarea")){
            eventSystem.emit('delete-task',this.props.id)
        }
    }

    render(){
        return <li><button onClick={this.handleClick}>X</button> {this.props.subject}</li>
    }
}


TaskListItem.propTypes = {
    id : PropTypes.number,
    subject : PropTypes.string,
}