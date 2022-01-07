import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {
    // 对接收到props类型和必要性进行限制
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    handleKeyUp = event => {
        const { keyCode, target: { value } } = event
        // 不是按回车键 不做任何操作
        if (keyCode !== 13) return
        // 添加的todo名字不能为空
        if (value.trim() === '') return
        // 准备一个todo对象 将它传递给App
        this.props.addTodo({
            id: nanoid(),
            name: value,
            done: false
        })
        // 清空输入框
        event.target.value = ''
    }
    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称， 按回车键确认" />
            </div>
        )
    }
}
