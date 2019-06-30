import React from 'react'
import PropTypes from 'prop-types'
import TaskListItem from './TaskListItem'

export default class TaskList extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <h4>Lista de Tareas</h4>
                <ul>
                    {this.props.list.map((value, index) => {
                        return <TaskListItem key={index} subject={value} id={index} />
                    })}
                </ul>
            </div>
        )
    }
}


TaskList.propTypes = {
    list: PropTypes.array
}