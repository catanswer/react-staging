import { Component } from 'react'

import Header from './components/Header'
import Foot from './components/Foot'
import List from './components/List'
import './App.css'

// 创建并暴露App组件
export default class App extends Component {
    // 状态在哪里 操作状态的方法就在哪里

    // 初始化状态
    state = {
        todos: [
            {
                id: '001',
                name: '吃饭',
                done: true
            },
            {
                id: '002',
                name: '睡觉',
                done: true
            },
            {
                id: '003',
                name: 'code',
                done: false
            },
            {
                id: '004',
                name: '逛街',
                done: false
            }
        ]
    }
    // 添加一个新的todo
    addTodo = (todoObj) => {
        const { todos } = this.state
        const newTodos = [todoObj, ...todos]
        this.setState({
            todos: newTodos
        })
    }
    // 改变指定id的todo状态的函数
    updateTodo = (id, done) => {
        const { todos } = this.state
        const newTodos = todos.map(todo => {
            if (todo.id === id) return { ...todo, done }
            else return { ...todo }
        })
        this.setState({
            todos: newTodos
        })
    }

    // 删除todo
    deleteTodo = (id) => {
        const { todos } = this.state
        const newTodos = todos.filter(todo => {
            return todo.id !== id
        })
        this.setState({
            todos: newTodos
        })
    }

    // 清除所有已完成
    clearAllDone = () => {
        const { todos } = this.state
        const newTodos = todos.filter(todo => {
            return !todo.done
        })
        this.setState({
            todos: newTodos
        })
    }

    // 全选
    checkAll = (done) => {
        const { todos } = this.state
        const newTodos = todos.map(todo => {
            return {...todo, done}
        })
        this.setState({
            todos: newTodos
        })
    }

    render() {
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo} />
                    <List todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
                    <Foot todos={this.state.todos} checkAll={this.checkAll} clearAllDone={this.clearAllDone} />
                </div>
            </div>
        )
    }
}