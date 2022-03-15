import { useDarkMode } from 'context/DarkMode'
import React from 'react'

const TriggerDarkMode = () => {

    const { darkMode, setDarkMode } = useDarkMode();

    return (
        <button
        className='bg-gray-500 p-2 px-6 m-2 text-white rounded-lg shadow-lg'
            onClick={() => { setDarkMode(!darkMode) }}>
            {darkMode ? "Desactivar" : "Activar"} darkmode
        </button>
    )
}

export default TriggerDarkMode