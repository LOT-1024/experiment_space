import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Data from '../../model/data/navData.json'

const navList = Data.navbar

const Navbar: React.FC = () => {
    const [trigger, setTrigger] = useState(false)

    const onClickEvent = () => {
        setTrigger(!trigger)
    }
    return (
        <>
            {trigger && (
                <aside className="fixed right-0 z-50 h-[100vh] w-[254px] bg-white/5 backdrop-blur-lg">
                    <div className="m-auto flex h-[86.99px] w-[190px] items-center justify-end">
                        <img
                            className="h-[19.09px] w-[19.09px]"
                            src="/assets/shared/icon-close.svg"
                            alt="close icon"
                            onClick={onClickEvent}
                        />
                    </div>
                    <ul className="m-auto mt-[31px] h-[172px] w-[190px]">
                        {navList.map((list, i) => (
                            <li
                                className="mb-[32px] leading-[auto] tracking-[2.7px] text-white"
                                key={i}
                            >
                                <Link to={list.link}>
                                    <h2>
                                        <span className="font-bold">
                                            {list.numlist}
                                        </span>{' '}
                                        <span className="text-white/80">
                                            {list.title}
                                        </span>
                                    </h2>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </aside>
            )}
            <div className="m-auto flex h-full w-[327px] items-center justify-between">
                <img
                    className="h-[40px] w-auto sm:pl-11"
                    src="/assets/shared/logo.svg"
                    alt="Logo"
                />

                <img
                    className="h-[21px] w-auto sm:hidden"
                    src="/assets/shared/icon-hamburger.svg"
                    alt="hamburger-button"
                    onClick={onClickEvent}
                />
            </div>
        </>
    )
}

export default Navbar
