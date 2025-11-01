import React from 'react'

function About() {
    return (
        <section className="py-12  bg-neutral-50 ">
            {/* match page width */}
            <div className="w-full  px-5 lg:px-16 xl:px-28">
                <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-4">
                    {/* LEFT: title + paragraph */}
                    <div>
                        <h2
                            className="font-medium text-xl sm:text-xl md:text-3xl leading text-start 
                              border-s-4 border-[#3E841D] border-solid ps-2">
                            <span className="block">About Us</span>
                        </h2>

                        <p className="mt-4 text-sm md:text-base lg:text-2xl font-medium leading-[160%] text-start">
                            Office Introduction
                        </p>

                        <p className="mt-4 text-sm md:text-base leading-[160%] text-start">
                            Feisal Al-Balawi Law Firm and Notarization was established in 2016 in Riyadh to provide comprehensive legal services for individuals and businesses across the Kingdom.The firm comprises a team of competent and experienced lawyers and legal consultants across various branches of law. This diversity has enabled the firm to build a broad knowledge base, allowing it to deliver tailored legal solutions that meet client needs with the highest levels of quality and accuracy
                        </p>
                        <p className="mt-4 text-sm md:text-base lg:text-2xl font-medium leading-[160%] text-start">
                            Our Work Philosophy
                        </p>

                        <p className="mt-4 text-sm md:text-base leading-[160%] text-start">
                            We believe that trust is the foundation of every client relationship, and that successful legal work depends on professionalism, confidentiality, and attention to detail.
                        </p>
                        <p className="mt-1 text-sm md:text-base text-start">

                            Therefore, we strive to deliver every service with a spirit of commitment and an institutional approach that balances legal expertise with technological advancement
                        </p>
                    </div>
                    {/* RIGHT: image */}
                    <div className="relative w-full aspect-4/3 overflow-hidden rounded-2xl">
                        <img
                            src="/servicesbanner.png"
                            alt="Visa success"
                            // fill
                            sizes="(min-width:768px) 50vw, 100vw"
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
