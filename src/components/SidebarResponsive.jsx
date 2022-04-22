import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const SidebarResponsive = () => {

    const [showNav, setShowNav] = useState(false)

    return (
        <div className='px-2 text-lg md:hidden' onClick={() => { setShowNav(!showNav) }}>
            <i className={`fas fa-${showNav ? 'times' : 'bars'} hover:text-gray-500`} />
            {
                showNav &&
                <div>
                    <RouteResponsive name={"Perfil"} icon={"fa-solid fa-user"} route={"/admin/profile"} />
                    <RouteResponsive name={"Vehiculos"} icon={"fas fa-car"} route={"/admin/vehicles"} />
                    <RouteResponsive name={"Clientes"} icon={"fas fa-users"} route={"/admin/clients"} />
                    <RouteResponsive name={"Usuarios"} icon={"fa-solid fa-screwdriver-wrench"} route={"admin/users"} />
                </div>
            }
        </div>
    )
}

const RouteResponsive = ({ route, icon, name }) => {
    return (
        <Link to={route}>
            <li className='bg-indigo-700 rounded-md text-white my-1 p-1 w-full hover:bg-indigo-900'>
                <i className={`${icon} w-10`} />
                {name}
            </li>
        </Link>
    )
}

export default SidebarResponsive