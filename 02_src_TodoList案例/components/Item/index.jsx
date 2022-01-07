import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Item extends Component {
    static propTypes = {
        updateTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired,
    }

    // 勾选改变处理函数
    handleCheck = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked)
        }
    }

    // 删除todo
    handleDelete = (id) => {
        this.props.deleteTodo(id)
    }
    render() {
        const { id, name, done } = this.props
        return (
             <li>
                <label>
                    <input checked={done} type="checkbox" onChange={this.handleCheck(id)} />
                    <span>{name}</span>
                </label>
                <button onClick={ () => this.handleDelete(id) } className="btn btn-danger" style={{display: 'none'}}>删除</button>
            </li>
        )
    }
}
