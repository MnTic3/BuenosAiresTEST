import React from 'react'
import {Link} from 'react-router-dom'

const AdminIndex = () => {
  return (
    <div className='flex flex-col'>
      Admin Index
      <Link to="/admin/vehicles">
        <button className="bg-red-500 p-3 rounded text-white">Vehicles</button>
      </Link>
    </div>
  )
}

export default AdminIndex