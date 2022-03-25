import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const useActiveRoute = (route) => {

    const location = useLocation()
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (location.pathname.includes(route)) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }

    }, [location, route])

    return isActive;

}

export default useActiveRoute