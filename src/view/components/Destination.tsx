import React, { useState } from 'react'
import Data from '../../model/data/data.json'

const datas = Data.destinations

const Destination: React.FC = () => {
    const [currentDestination, setCurrentDestination] = useState(datas[0].name)

    const selected = datas.find(
        (element) => element.name === currentDestination
    )

    const onClickEvent = (value: string) => {
        setCurrentDestination(value)
    }

    return (
        <div className="m-auto flex w-[327px] flex-col items-center text-white">
            <h2 className="text-center tracking-[2.7px]">
                <span className="mr-[18px] text-white/30">01</span>PICK YOUR
                DESTINATION
            </h2>
            <img
                className="animate-spin-slow mt-[32px] h-[170px] w-[170px]"
                src={selected?.images.png.substring(1)}
                alt="destination image"
            />
            <ul className="mt-[26px] flex gap-[26px] text-[14px] leading-[auto] tracking-[2.36px]">
                {datas.map((data, i) => (
                    <li key={i}>
                        <button
                            className={`border-b-[3px] pb-[8px] ${data.name === currentDestination ? 'border-white' : 'border-white/0 text-white/70 hover:border-white/30'}`}
                            onClick={() => onClickEvent(data.name)}
                        >
                            {data.name}
                        </button>
                    </li>
                ))}
            </ul>
            <h1 className="mt-[20px] text-[56px]">
                {selected?.name.toUpperCase()}
            </h1>
            <p className="h-[125px] w-[327px] text-center leading-[25px] text-white/80">
                {selected?.description}
            </p>
            <div className="mt-[32px] h-[1px] w-full bg-white/20"></div>
            <h2 className="mt-[32px] text-center text-[14px] leading-[auto] tracking-[2.36px] text-white/60">
                AVG. DISTANCE
            </h2>
            <h1 className="mt-[12px] text-[28px]">
                {selected?.distance.toUpperCase()}
            </h1>
            <h2 className="mt-[32px] text-center text-[14px] leading-[auto] tracking-[2.36px] text-white/60">
                EST. TRAVEL TIME
            </h2>
            <h1 className="mb-[58px] mt-[12px] text-[28px]">
                {selected?.travel.toUpperCase()}
            </h1>
        </div>
    )
}

export default Destination
