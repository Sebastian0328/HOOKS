import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Pokelist } from './componets/Pokelist'

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const [color, setColor] = useState("red")
  const [color2, setColor2] = useState("blue")
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
 
  const ClickColor = () => {
    const colorRandom = Math.floor(Math.random()*colors.length)
    setColor(colors[colorRandom])
  }
  const ClickColor2 = () => {
    const colorRandom = Math.floor(Math.random()*colors.length)
    setColor2(colors[colorRandom])
  }

  const handClick = () => {

    ClickColor()
    setCount(count + 1)
  }

  const handClick2 = () => {
    ClickColor2()
    setCount2(count2 + 1)
  }
  return (
    <>
      <div>
        {/* <div className="card">
          <button onClick={handClick} className={color} >
            likes {count}
          </button>
          <button onClick={handClick2} className={color2}>
            likes {count2}
          </button>
        </div> */}
        <Pokelist/>
      </div>

    </>
  )
}

export default App
