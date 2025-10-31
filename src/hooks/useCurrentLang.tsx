// "use client"
// import { usePathname } from 'next/navigation';

const useCurrentLang = () => {
  const pathname = "usePathname";
  // const pathname = usePathname();
  return pathname.slice(1, 3);
};

export default useCurrentLang;
