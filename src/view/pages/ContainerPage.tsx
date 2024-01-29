import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from '..'
import Data from '../../model/data/background.json'

const data = Data.background

const ContainerPage:React.FC = () => {
  const location = useLocation()
  const selected = data.find((element) => element.path === location.pathname)
  
  return (
    <div className={`bg-cover bg-center bg-no-repeat h-screen ${selected?.style}`}>
        <header className='h-[1%]'>
            <Navbar />
        </header>
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default ContainerPage