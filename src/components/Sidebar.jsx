import React from 'react'
import TriggerDarkMode from './TriggerDarkMode'

const Sidebar = () => {
  return (
    <nav className='flex flex-col w-72 border-x border-gray-900 '>

      <TriggerDarkMode/>

    </nav>
  )
}

export default Sidebar