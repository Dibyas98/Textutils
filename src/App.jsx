import { useState } from 'react'
import './App.css'
import Screen from './Screen'
import { ThemeC } from './component/ThemeContext'

function App() {
  const [theme,setTheme] =useState('light');

  return (
    <ThemeC.Provider value={{theme,setTheme}}>
    <section className={`${theme}`}>
      <Screen></Screen>
    </section>
    </ThemeC.Provider>
  )
}

export default App
