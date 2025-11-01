import React from 'react'

function Contact() {
    return (
        < section className="flex py-16 lg:px-16 xl:px-28" >
            <div className="flex overflow-hidden relative flex-col justify-center  w-full rounded-3xl md:min-h-[332px] max-md:p-5 md:p-10 max-md:max-w-full">
                <img src="/contactbanner.png" width={800} height={500} alt="flag"
                    className="object-cover absolute inset-0 size-full" />
                <div className="flex xl:gap-3 relative justify-center items-center flex-col lg:flex-row w-full">
                    <div className="flex flex-col my-auto text-center ">
                        <div className="text-4xl font-bold text-white ">
                            Our Motto
                        </div>
                        <div className="mt-6 text-2xl font-semibold md:text-3xl text-white lg:leading-[51px] ">
                            "Exceeding Client Expectations."
                        </div>
                    </div>
                    {/* <a
                        href={`/contact`}
                        className="flex gap-1 w-1/2 xl:w-[626px] xl:h-[68px] justify-center items-center text-base font-medium tracking-wide text-white  bg-primary py-2 md:py-4 mt-5 lg:mt-0 rounded-[64px]"
                    >
                        <div className="self-stretch my-auto">
                            UnderButton
                        </div>
                        {"en" === "en" ?
                            <svg
                                width="22"
                                height="21"
                                viewBox="0 0 25 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M14.9301 5.92993L21.0001 11.9999L14.9301 18.0699"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M4 12H20.83"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg> :
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.56995 18.0701L3.49995 12.0001L9.56995 5.93007" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20.5 12L3.67 12" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>}
                    </a> */}
                </div>
            </div>
        </section >
    )
}

export default Contact
