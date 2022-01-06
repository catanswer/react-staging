import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // 检查子组件中的语法
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// 记录页面性能
reportWebVitals();
