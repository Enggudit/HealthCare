import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Page from './components/page.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#e6f0f8]">
        <Page />
    </div>
  )
}

export default App
