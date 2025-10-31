// import { useTranslations } from "next-intl";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { destroyCookie, parseCookies } from "nookies";
import { FC, useEffect, useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import useCleanPath from "../_hooks/useCleanPath";
// import useCurrentLang from "../_hooks/useCurrentLang";
// import { displayUser } from "../reduxTool-kit/slices/displayUserSlice";
// import { AppDispatch } from "../store";
import useCurrentLang from "../hooks/useCurrentLang"
import React from "react";

const NewHeader: FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [showLanguage, setShowLanguage] = useState<boolean>(false);
  const [showUserData, setShowUserData] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [currentPath, setCurrentPath] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  // const t = useTranslations("nav");
  // const { cleanPath } = useCleanPath();
  // const router = useRouter();
  // const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const { tokenMainSite } = parseCookies();
  // const dispatch = useDispatch<AppDispatch>();
  const locale = useCurrentLang();
  const language = useCurrentLang();
  const profileRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLDivElement>(null);
  // const displayUserInfo = useSelector((state: any) => state.displayUser);

  const handleLogOut = () => {
    // destroyCookie(null, "tokenMainSite", {
    //   path: "/",
    // });
    // router.refresh();
    window.location.reload();
  };

  useEffect(() => {
    setIsMounted(true);
    setCurrentPath(window.location.pathname);
  }, []);

  // useEffect(() => {
  //   const checkUserToken = async () => {
  //     if (!tokenMainSite) {
  //       // إذا لم تكن هناك token
  //       setIsLoggedIn(false);
  //       // console.log("Token not found. User not logged in.");
  //       return;
  //     }

  //     try {
  //       // console.log("Token:");
  //       // إرسال الطلب للتحقق من المستخدم
  //       // const result = await dispatch(displayUser({ token, locale }));
  //       const result = await dispatch(
  //         displayUser({ tokenMainSite, locale })
  //       ).unwrap();
  //       // console.log("User data:", result);

  //       if (result && Object.keys(result).length > 0) {
  //         // إذا تم العثور على بيانات المستخدم
  //         setIsLoggedIn(true);
  //         // console.log("User authenticated.");
  //       } else {
  //         // إذا لم يتم العثور على بيانات للمستخدم
  //         setIsLoggedIn(false);
  //         console.log("No user data found. User not logged in.");
  //       }
  //     } catch (error) {
  //       // التعامل مع الأخطاء
  //       setIsLoggedIn(false);
  //       console.error("Error fetching user data:", error);
  //     }
  //   };

  //   checkUserToken();
  // }, [dispatch, tokenMainSite, locale]);

  const handleClickCurrency = () => {
    setIsActive(!isActive);
  };

  const handleClickLang = () => {
    setShowLanguage(!showLanguage);
    setShowUserData(false);
  };
  const handleClickUser = () => {
    setShowUserData(!showUserData);
    setShowLanguage(false);
  };
  const closeDropdown = () => {
    setShowUserData(false);
    setShowLanguage(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setShowUserData(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (burgerRef.current && !burgerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [])
  // useEffect(() => {
  //   if (isOpen) {
  //     document.body.classList.add("overflow-hidden");
  //   } else {
  //     document.body.classList.remove("overflow-hidden");
  //   }
  //   return () => document.body.classList.remove("overflow-hidden");
  // }, [isOpen]);

  return (
    <header className="bg-white leading-10">
    {/* <header className="bg-white leading-10 sticky top-0 z-10"> */}
      <nav className="relative bg-white shadow ">
        <div className="@container/main px-6 md:px-12 lg:px-20 py-2 xl:py-0 mx-auto">
          <div className={`xl:flex xl:items-center lg:justify-between xl:justify-between  xl:${locale == "ar" ? "gap-0" : "gap-8"}`}>
            <div className="flex items-center justify-between ">
              <a
                href={`/${language}`}
                className="md:flex md:items-center md:gap-12 cursor-pointer top-3 z-20"
              >
                <img
                  src="./logo.svg"
                  alt="eduxa logo"
                  width={130}
                  height={80}
                />
              </a>

              {/* Mobile menu button */}
              <div className="flex xl:hidden" >
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="text-gray-500  hover:text-gray-600  focus:outline-none focus:text-gray-600 "
                  aria-label="toggle menu"
                >
                  {isOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 8h16M4 16h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            {/* Mobile Menu */}
            <div
              className={`absolute flex ${isLoggedIn ? "flex-row" : "flex-col md:flex-row"} justify-between z-20 w-[92%] transition-all duration-300 ease-in-out bg-neutral-100 rounded-lg xl:relative xl:bg-transparent xl:w-auto xl:opacity-100 xl:translate-x-0 xl:flex xl:items-center ${isOpen
                ? "translate-x-0 md:translate-x-4 opacity-100 "
                : "opacity-0 -translate-x-full hidden"
                }`}
            >
              {/* navigation page */}
              <div className="flex  xl:items-center ms-2 md:ms-6 lg:mx-8 lg:gap-5 ">
                <div className="flex gap-2 items-start max-md:gap-4 xl:gap-4 flex-col   xl:flex-row">
                  <a
                    href={`/${language}`}
                    onClick={() => setIsOpen(!isOpen)}
                    className={`px-4 py-2 text-base  max-md:px-2.5 max-md:py-2 hover:bg-[#3E841D] hover:text-white rounded-md  ${currentPath === `/${language}`
                      ? "font-bold text-white bg-[#3E841D]"
                      : "font-semibold text-black"
                      }`}
                  >
                    {/* {t("home")} */}
                    Home
                  </a>
                  <a
                    href={`/${language}`}
                    onClick={() => setIsOpen(!isOpen)}
                    className={`px-4 py-2 text-base  max-md:px-2.5 max-md:py-2 hover:bg-[#3E841D] hover:text-white rounded-md  ${currentPath === `/${language}/about`
                      ? "font-bold text-[#3E841D]"
                      : "font-semibold text-black"
                      }`}
                  >
                    {/* {t("home")} */}
                    About-Us
                  </a>
                  <a
                    href={`/${language}/`}
                    onClick={() => setIsOpen(!isOpen)}
                    className={`px-4 py-2 text-base  max-md:px-2.5 max-md:py-2 hover:bg-[#3E841D] hover:text-white rounded-md  ${currentPath.includes("university")
                        ? "font-bold text-[#3E841D]"
                        : "font-semibold text-black"
                      }`}
                  >
                    {/* {t("Universities")} */}
                    Vision & Mission
                  </a>
                  <a
                    href={`/${language}/`}
                    onClick={() => setIsOpen(!isOpen)}
                    className={`px-4 py-2 text-base  max-md:px-2.5 max-md:py-2 hover:bg-[#3E841D] hover:text-white rounded-md  ${currentPath.includes("language-schools")
                        ? "font-bold text-[#3E841D]"
                        : "font-semibold text-black"
                      }`}
                  >
                    {/* {t("institutes")} */}
                    Our Services
                  </a>
                  <a
                    href={`/${language}/`}
                    onClick={() => setIsOpen(!isOpen)}
                    className={`px-4 py-2 text-base  max-md:px-2.5 max-md:py-2 hover:bg-[#3E841D] hover:text-white rounded-md  ${currentPath.includes("contact")
                        ? "font-bold text-[#3E841D]"
                        : "font-semibold text-black"
                      }`}
                  >
                    {/* {t("contact")} */}
                    Contact-Us
                  </a>
                </div>
                {/* popup language */}
              </div>

            </div>
            <div className="flex gap-2">
              {/* <div className=""> */}
                <div
                  x-data="{ isActive: false }"
                  className="items-center md:ps-8 relative"
                >
                  {/* popup language */}
                  <div className="inline-flex items-center overflow-hidden rounded-md border  border-gray-200">
                    <button
                      onClick={handleClickLang}
                      className="text-sm md:text-base text-black bg-secondColor hover:bg-gray-50 hover:text-gray-700 flex justify-center items-center py-1 px-1"
                    >
                      {language === "en" ? <img
                        src="/images/uk.png"
                        // src="/images/us.svg"
                        alt="EN flag"
                        width={32}
                        height={32}
                        className="rounded-l md:mx-2"
                      /> : <img
                        src="https://api.eduxa.com/upload/ar.png"
                        alt="AR flag"
                        width={32}
                        height={32}
                        className="rounded-full md:mx-2"
                      />}
                      {language === "en" ? "English" : "Arabic"}

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>

                  <div
                    className="absolute start-0 md:start-10 mt-2 w-24 rounded-md border-gray-100 bg-white shadow-lg z-50"
                    role="menu"
                    x-show="isActive"
                  >
                    {showLanguage ? (
                      <div className="p-2 ">
                        <div className="flex justify-start items-center">
                          <a
                            href={`/ar/${window.location.pathname.slice(4)}`}
                            className="rounded-lg px-1 pe-2 py-2 text-sm text-gray-500 hover:bg-gray hover:text-gray-700 flex items-center"
                          >
                            <img
                              src="https://api.eduxa.com/upload/ar.png"
                              alt="AR flag"
                              width={32}
                              height={32}
                              className="rounded-full mx-2"
                            />
                            AR
                          </a>
                        </div>
                        <div className="flex justify-start items-center">
                          <a
                            href={`/en/${window.location.pathname.slice(4)}`}
                            className="  rounded-lg px-1 pe-2 py-2 text-sm text-gray-500 hover:bg-gray hover:text-gray-700 flex items-center"
                          >
                            <img
                              src="/images/uk.png"
                              alt="EN flag"
                              width={32}
                              height={32}
                              className="rounded-full mx-2"
                            />
                            EN
                          </a>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              {/* </div> */}
              <div className="bg-[#3E841D] px-2 py-0 rounded-md text-white">
                Appointment
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Overlay when mobile menu is open */}
      {isOpen && (
        <button
          aria-label="Close menu overlay"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-[1px] z-10 xl:hidden"
        />
      )}

    </header>
  );
};

export default NewHeader;
// import React from 'react'

// function NewHeader() {
//   return (
//     <div className="flex flex-wrap gap-10">
//       <img
//       alt=''
//         loading="lazy"
//         srcSet="https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/0dc317fae6676b28aeacdf7c029e4e0d9a86d74e?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=100 100w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/0dc317fae6676b28aeacdf7c029e4e0d9a86d74e?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=200 200w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/0dc317fae6676b28aeacdf7c029e4e0d9a86d74e?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=400 400w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/0dc317fae6676b28aeacdf7c029e4e0d9a86d74e?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=800 800w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/0dc317fae6676b28aeacdf7c029e4e0d9a86d74e?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=1200 1200w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/0dc317fae6676b28aeacdf7c029e4e0d9a86d74e?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=1600 1600w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/0dc317fae6676b28aeacdf7c029e4e0d9a86d74e?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=2000 2000w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/0dc317fae6676b28aeacdf7c029e4e0d9a86d74e?apiKey=e969867fc0a145258ec2d2dcaf1c3295&"
//         className="object-contain shrink-0 max-w-full aspect-[1.07] w-[117px]"
//       />
//       <div className="flex flex-wrap gap-10 items-center self-start min-h-20 max-md:max-w-full">
//         <div className="flex flex-wrap gap-4 items-center self-stretch my-auto text-lg font-medium min-w-60 text-zinc-900 w-[503px] max-md:max-w-full">
//           <div className="flex grow shrink gap-2.5 justify-center items-center self-stretch px-2 py-1 my-auto text-sm w-[81px]">
//             <div className="self-stretch my-auto text-zinc-900">
//               <span className="text-lg">Contact</span>{" "}
//               <span className="text-lg">Us</span>
//             </div>
//           </div>
//           <div className="flex grow shrink gap-2.5 justify-center items-center self-stretch px-2 py-1 my-auto min-h-10 w-[91px]">
//             <div className="self-stretch my-auto text-zinc-900">
//               Our Service
//             </div>
//           </div>
//           <div className="flex grow shrink gap-2.5 justify-center items-center self-stretch px-1.5 py-1 my-auto min-h-10 w-[132px]">
//             <div className="self-stretch my-auto text-zinc-900">
//               Vision and Mission
//             </div>
//           </div>
//           <div className="flex grow shrink gap-2.5 justify-center items-center self-stretch px-2 py-1 my-auto w-20 min-h-10">
//             <div className="self-stretch my-auto text-zinc-900">About Us</div>
//           </div>
//         </div>
//         <div className="flex gap-2 justify-center items-center self-stretch my-auto text-sm whitespace-nowrap">
//           <div className="flex gap-2.5 justify-center items-center self-stretch px-2 py-2 my-auto font-medium text-white bg-lime-700 rounded-lg min-h-10 w-[97px]">
//             <div className="self-stretch my-auto text-white">Appointment</div>
//           </div>
//           <div className="flex gap-2.5 justify-center items-center self-stretch px-2 py-2 my-auto text-black rounded-md min-h-10">
//             <img
//               loading="lazy"
//               alt=''
//               src="https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/1e01c98c3a88f02ce3a59595b5ad4cfd18cc20ce?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=100 100w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/1e01c98c3a88f02ce3a59595b5ad4cfd18cc20ce?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=200 200w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/1e01c98c3a88f02ce3a59595b5ad4cfd18cc20ce?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=400 400w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/1e01c98c3a88f02ce3a59595b5ad4cfd18cc20ce?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=800 800w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/1e01c98c3a88f02ce3a59595b5ad4cfd18cc20ce?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=1200 1200w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/1e01c98c3a88f02ce3a59595b5ad4cfd18cc20ce?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=1600 1600w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/1e01c98c3a88f02ce3a59595b5ad4cfd18cc20ce?apiKey=e969867fc0a145258ec2d2dcaf1c3295&width=2000 2000w, https://api.builder.io/api/v1/image/assets/e969867fc0a145258ec2d2dcaf1c3295/1e01c98c3a88f02ce3a59595b5ad4cfd18cc20ce?apiKey=e969867fc0a145258ec2d2dcaf1c3295&"
//               className="object-contain shrink-0 self-stretch my-auto w-5 rounded-full aspect-square"
//             />
//             <div className="self-stretch my-auto">English</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default NewHeader
