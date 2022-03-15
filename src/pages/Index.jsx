import { useDarkMode } from 'context/DarkMode'
import React from 'react'

const Index = () => {

  const { darkMode } = useDarkMode();

  return (
    <div className={`flex h-full w-full ${darkMode ? "bg-gray-700" : 'bg-gray-50'}`}>Index</div>
  )
}

export default Index