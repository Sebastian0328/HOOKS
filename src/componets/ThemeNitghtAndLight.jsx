import React, { useState } from 'react'

export const ThemeNitghtAndLight = () => {
  const [Change, setChange] = useState("cartDay")
  const [Theme, setTheme]= useState("CLARO")
  const handclick = () => {
    setTheme((prev)=>{
      if (prev === "CLARO") {
        return "OSCURO"
      }
      else {
        return "CLARO"
      }
    })
    setChange((prev) => {

      if (prev === "cartDay") {
        return "cartNight"
      }
      else {
        return "cartDay"
      }
    })
  }

  return (
    <div className={Change}>
      <h1>Cambio de tema</h1>
      <p>vamos a cambiar de tema de dia a noche</p>
      <button onClick={handclick}>{Theme }</button>
    </div>

  )
}
