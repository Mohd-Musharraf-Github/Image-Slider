import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageSLider from './Components/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ImageSLider url={"https://picsum.photos/v2/list"} page={3} limit={5} />
    </>
  )
}

export default App
