import { Widget } from "./components/Widget";
import { useState } from "react";


export function App() {
  const [ isWidgetOpen, setIsWidgetOpen ] = useState(false)
  
  function handleOpenContainer () {
    isWidgetOpen === false ? setIsWidgetOpen(true) : setIsWidgetOpen(false)
  }

  function handleCloseContainer () {
    setIsWidgetOpen(false)
  }
  
  return (
    <>
      <Widget 
        isWidgetOpen={isWidgetOpen}
        handleOpenContainer={handleOpenContainer}
        handleCloseContainer={handleCloseContainer}

      />
    </>
  )
}