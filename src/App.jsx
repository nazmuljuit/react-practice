import { useState } from 'react'
import './App.css'
import Post from './components/Post'

const name = ['Nazmul','Hossain'];
function App() {
  const [count, setCount] = useState(0)
  const selectName = Math.random() > 0.5 ? name[0]:name[1];
  return (
    <Post name = {selectName}/>
  )
}

export default App
