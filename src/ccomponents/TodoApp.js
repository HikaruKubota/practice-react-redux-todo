import React from 'react'

// Propsとして渡されているので引数的にはこのようになる。
export default function TodoApp({ task, tasks, inputTask, addTask }) {
  return (
    <div>
      <input type="text" onChange={(e) => inputTask(e.target.value)}></input>
      <input type="button" value="add" onClick={() => addTask(task)}></input>
      <ul>
        {
          tasks.map((item, i) => {
            return (
              <li key={i}>{item}</li>
            )
          })
        }
      </ul>
    </div>
  )
}
