import React from 'react'
import './App.css'
import TodoApp from './TodoApp/TodoApp'
import ContextBasic1 from './context/ContextBasic1'
import ContextBasic2 from './context/ContextBasic2'
import ContextMedium from './context/ContextMedium'

function App() {

  return (
    <>
      {/* <h1>App Todo sederhana</h1> */}
      {/* <TodoApp /> */}
      <ContextBasic1 />
      <ContextBasic2 />
      <ContextMedium/>
    </>
  )
}

export default App
