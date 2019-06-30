import React from 'react'
import PropTypes from 'prop-types'

export default class TaskListItem extends React.Component{


    render(){
        return <li >{this.props.subject}</li>
    }
}


TaskListItem.propTypes = {
    id : PropTypes.number,
    subject : PropTypes.string
}