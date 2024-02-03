import React from 'react'

const Home: React.FC = () => {
    return (
        <div className="mt-[28px] flex flex-col items-center justify-center">
            <div className="h-[276px] w-[327px] text-white">
                <h2 className="text-center leading-[auto] tracking-[2.7px] text-white/75">
                    SO, YOU WANT TO TRAVEL TO
                </h2>
                <h1 className="my-[16px] text-center text-[80px] leading-[100px]">
                    SPACE
                </h1>
                <p className="text-center text-[15px] leading-[25px] text-white/75">
                    Let's face it; if you want to go to space, you might as well
                    genuinely go to outer space and not hover kind of on the
                    edge of it. Well sit back, and relax because we'll give you
                    a truly out of this world experience!
                </p>
            </div>
            <div className="mt-[33px] flex h-[246px] w-full items-center justify-center">
                <div className="flex h-[150px] w-[150px] items-center justify-center rounded-full bg-white text-blackCustom">
                    <h1 className="text-center text-[20px] leading-[auto] tracking-[1.25px]">
                        EXPLORE
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Home
