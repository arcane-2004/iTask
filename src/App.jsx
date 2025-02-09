import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setShowFinished] = useState(true)

  const saveToLS = (newTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos))
  }

  const toggleFinished = (e) => {
    setShowFinished(!showFinished)
  }

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])

  const handleAdd = () => {
    let newTodos = [...todos, { id: uuidv4(), todo, isCompleted: false }]
    setTodos(newTodos)
    saveToLS(newTodos)
    setTodo("")
  }
  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item => {
      return item.id !== id;
    })
    setTodos(newTodos)
    saveToLS(newTodos)
  }
  const handleDelete = (e, id) => {

    let newTodos = todos.filter(item => {
      return item.id !== id;
    })
    setTodos(newTodos)
    saveToLS(newTodos)
  }
  const handleChange = (e) => {
    setTodo(e.target.value)

  }
  const handleCheckbox = (e) => {
    let id = e.target.name
    console.log(`the id is ${id}`)
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    console.log(index)
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
    console.log(newTodos)
    saveToLS(newTodos)
  }

  return (
    <>
      <Navbar />
      <div className="md:cointainer mx-3 md:mx-auto my-6 bg-sky-100 rounded-xl p-5 min-h-[80vh] md:w-1/2">
        <h1 className='text-xl font-bold text-center' >iTask - manage your task at one place</h1>
        <h2 className='text-lg font-bold mt-5'>Add a todo</h2>
        <div className='add flex gap-3 mb-6'>
          <input onChange={handleChange} value={todo} type="text" className='bg-white h-full w-full px-5 py-1 rounded-2xl' />
          <button onClick={handleAdd} disabled={todo.length <= 3} className='bg-sky-600 hover:bg-sky-700 cursor-pointer p-3 py-1 rounded-xl text-white font-bold text-sm'>Add</button>
        </div>
        <input className='my-4' id='show' onChange={toggleFinished} type="checkbox" checked={showFinished} />
        <label className='mx-2' htmlFor="show">Show Finished</label>
        <div className='h-[1px] bg-black opacity-15 w-[90%] mx-auto my-2'></div>
        <h2 className='text-xl font-bold'>Your Todos</h2>

        <div className="todos">
          {todos.length === 0 && <div className='m-5'>No Todos to display </div>}
          {todos.map(item => {
            return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex w-full justify-between mt-1">
              <div className='flex gap-5 items-baseline'>
                <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} />
                <div className={item.isCompleted ? "line-through" : ""}>{item.todo} </div>
              </div>

              <div className="buttons flex h-full">
                <button onClick={(e) => { handleEdit(e, item.id) }} className='bg-sky-600 hover:bg-sky-700 cursor-pointer p-3 py-1 m-2 rounded-md text-white font-bold '><FaEdit /></button>
                <button onClick={(e) => { handleDelete(e, item.id) }} className='bg-sky-600 hover:bg-sky-700 cursor-pointer p-3 py-1 m-2 rounded-md text-white font-bold '><MdDeleteForever /></button>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
