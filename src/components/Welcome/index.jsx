import { Component } from 'react'
import welcome from'./index.module.css'

// 创建并暴露App组件
export default class Welcome extends Component {
    render() {
        return (
            <div className={ welcome.title }>
                Welcome React
            </div>
        )
    }
}