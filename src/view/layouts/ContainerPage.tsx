import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from '..'

const data = [
    {
        path: '/',
        style: 'bgHomeMobile md:bgHomeTablet lg:bgHomeDesktop',
    },
    {
        path: '/destination',
        style: 'bgDestinationMobile md:bgDestinationTablet lg:bgDestinationDesktop',
    },
    {
        path: '/crew',
        style: 'bgCrewMobile md:bgCrewTablet lg:bgCrewDesktop',
    },
    {
        path: '/technology',
        style: 'bgTechnologyMobile md:bgTechnologyTablet lg:bgTechnologyDesktop',
    },
]

const ContainerPage: React.FC = () => {
    const location = useLocation()
    const selected = data.find((element) => element.path === location.pathname)

    return (
        <>
            <div
                className={`fixed z-[-1] h-screen w-full bg-cover bg-center bg-no-repeat ${selected?.style}`}
            ></div>
            <header className="h-[84px]">
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default ContainerPage
