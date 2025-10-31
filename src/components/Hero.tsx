import React from 'react'

function Hero() {
  return (
    <div className="overflow-hidden relative w-full h-[495px] -mt-5 ">
        <div className="absolute left-0 w-full bg-white  h-[601px] top-[-105px]" />
        <img
          alt=""
          className="object-cover absolute top-0 left-0 w-full h-[767px] "
          loading="lazy"
          src="./herobanner.png"
        />
        <div className="flex absolute flex-col gap-2 justify-center items-start p-4 rounded-3xl backdrop-blur-md bg-[#464B50] left-[120px] top-[226px] w-[563px] max-md:left-[60px] max-md:w-[480px] max-sm:relative max-sm:left-5 max-sm:p-5 max-sm:top-[180px]">
          <div className="overflow-hidden self-stretch text-base leading-6 text-white h-[126px]"
          >
            <div className="text-base text-white">
              Feisal Al-Balawi Law Firm is one of the leading legal offices in
              the Kingdom of Saudi Arabia. The firm brings together a team of
              qualified lawyers and consultants dedicated to providing
              comprehensive and professional legal solutions that meet the needs
              of individuals, corporations, and government entities...
            </div>
          </div>
          <div className="flex gap-2.5 justify-center items-center py-3.5 pr-4 pl-7 bg-[#3E841D] rounded-2xl cursor-pointer">
            <div
              layer-name="Book Your Consultation Now"
              className="text-base font-semibold text-white"
            >
              <div className="text-base font-bold text-white">
                Book Your Consultation Now
              </div>
            </div>
          </div>
        </div>
        <div className="flex absolute flex-col items-start left-[120px] top-[100px] w-[779px] max-md:left-[60px] max-md:w-[600px] max-sm:left-5 max-sm:top-10">
          <div
            layer-name="Feisal Al-Balawi Law Firm and Notarization"
            className="self-stretch text-5xl font-bold text-white"
          >
            <div className="text-4xl font-bold text-white max-md:text-4xl max-sm:text-3xl mb-6">
              Feisal Al-Balawi Law Firm and Notarization
            </div>
          </div>
          <div
            layer-name="Established Legal Expertise with a Renewed Professional Vision"
            className="self-stretch text-2xl font-medium text-white"
          >
            <div className="text-2xl text-white max-md:text-xl max-sm:text-lg max-sm:leading-tight">
              Established Legal Expertise with a Renewed Professional Vision
            </div>
          </div>
        </div>
        <img
          alt=""
          className="object-cover absolute top-0 shadow-sm aspect-[487/495] h-[495px] right-[37px] w-[487px]"
          loading="lazy"
          src="https://api.builder.io/api/v1/image/assets/TEMP/3fc424a9225603fc91ca57d29ab5ce1cee6a39aa?width=974"
        />
      </div>
  )
}

export default Hero
