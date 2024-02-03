import React, { useState } from 'react'
import Data from '../../model/data/data.json'

const datas = Data.crew

const Crew: React.FC = () => {
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
                <span className="mr-[18px] text-white/30">02</span>MEET YOUR
                CREW
            </h2>
            <div className="mt-[32px] flex w-full justify-center border-b-[1px] border-white/20">
                <img
                    src={selected?.images.png.substring(1)}
                    alt="crew images"
                    className="h-[222px] w-[177.12px]"
                />
            </div>
            <div className="my-[32px] flex w-full justify-center gap-[16px]">
                {datas.map((data, i) => (
                    <button
                        key={i}
                        className={`h-[10px] w-[10px] rounded-full ${selected === data ? 'bg-white' : 'bg-white/40 hover:bg-white/60'}`}
                        onClick={() => onClickEvent(data.name)}
                    ></button>
                ))}
            </div>
            <div className="w-full text-center">
                <h1 className="text-white/70">
                    {selected?.role.toUpperCase()}
                </h1>
                <h1 className="mt-[8px] text-[24px]">
                    {selected?.name.toUpperCase()}
                </h1>
                <p className="mb-[104px] mt-[16px] text-white/70">
                    {selected?.bio}
                </p>
            </div>
        </div>
    )
}

export default Crew
