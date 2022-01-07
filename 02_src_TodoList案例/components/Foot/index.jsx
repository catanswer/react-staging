import React, { Component } from 'react'
import './index.css'

export default class Foot extends Component {
    // 全选checkbox的回调
    handleAllChecked = (event) => {
        this.props.checkAll(event.target.checked)
    }

    // 清除所有
    handleClearAllDone = () => {
        this.props.clearAllDone()
    }

    render() {
        const { todos } = this.props

        // 已完成的数量
        const doneCount = todos.reduce((prev, current) => prev + (current.done ? 1 : 0), 0)

        // 总数
        const total = todos.length

        return (
            <div className="todo-footer">
                <label>
                    <input checked={ doneCount === total && total > 0 }  type="checkbox" onChange={ this.handleAllChecked } />
                </label>
                <span>
                    <span>已完成{ doneCount }</span> / 全部 { todos.length }
                </span>
                <button className="btn btn-danger" onClick={ this.handleClearAllDone }>清除已完成任务</button>
            </div>
        )
    }
}
