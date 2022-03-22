import React from 'react'
import { Link } from 'react-router-dom'
import LogoImg from './LogoImg'

const Sidebar = () => {
  return (
    <nav className='hidden md:flex flex-col h-full w-72 bg-gray-200 p-4'>
      <Link to="/admin">
        <LogoImg />
      </Link>
      <div>
        <RoutesSide name={"Perfil"} icon={"fa-solid fa-user"} route={"#"} />
        <RoutesSide name={"Vehiculos"} icon={"fas fa-car"} route={"/admin/vehicles"} />
        <RoutesSide name={"Clientes"} icon={"fas fa-users"} route={"/admin/clients"} />
        <RoutesSide name={"Usuarios"} icon={"fa-solid fa-screwdriver-wrench"} route={"admin/"} />
      </div>
      <RoutesSide name={"Cerrar Sesión"} icon={"fa-solid fa-arrow-right-from-bracket"} route={"/login"} />
    </nav>
  )
}

const RoutesSide = ({ route, icon, name }) => {
  return (
    <Link to={route}>
      <button className='bg-indigo-700 text-justify rounded-md text-white my-1 p-1 w-full hover:bg-indigo-900'>
        <i className={`${icon} w-10`} />
        {name}
      </button>
    </Link>
  )
}

export default Sidebar