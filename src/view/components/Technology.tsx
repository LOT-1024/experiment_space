import React, { useEffect, useState } from 'react'
import Data from '../../model/data/data.json'

const datas = Data.technology

const Technology: React.FC = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 1023px)')
        setIsSmallScreen(mediaQuery.matches)

        const handler = (e: MediaQueryListEvent) => setIsSmallScreen(e.matches)

        mediaQuery.addEventListener('change', handler)
        return () => mediaQuery.removeEventListener('change', handler)
    }, [])
    return (
        <div className="w-full text-white">
            <h1 className="text-center tracking-[2.7px]">
                <span className="mr-[16px] text-white/30">03</span>SPACE LAUNCH
                101
            </h1>
            <img
                src={
                    isSmallScreen
                        ? datas[0].images.landscape
                        : datas[0].images.portrait
                }
                alt="technology image"
                className="absolute left-[0.3%]"
            />
            <div className="m-auto w-[327px]">Hello World</div>
        </div>
    )
}

export default Technology
