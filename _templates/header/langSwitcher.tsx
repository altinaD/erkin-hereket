"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const locales = [
  { code: "en", label: "ENG" },
  { code: "ru", label: "RUS" },
  { code: "tk", label: "TKM" },
];

type ScrolledType = {
  isScrolled: boolean;
}

function getLocaleLabelFromCookie(){
  if(typeof document === "undefined") return locales[0].label;
  const match = document.cookie.match(/NEXT_LOCALE=([^;]+)/);
  const code = match?.[1] || locales[0].code;
  return locales.find(locale => locale.code === code)?.label || locales[0].label;
}

export default function LangSwitcher({isScrolled}: ScrolledType) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false);
  const [currentLocale, setCurrentLocale] = useState(locales[0].label)
  
  useEffect(() => {
    setCurrentLocale(getLocaleLabelFromCookie());
    setMounted(true);
  }, [])
  if(!mounted) return null; 

  const setLocale = (locale: string) => {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`;
    router.refresh();
    setIsOpen(false);
    setCurrentLocale(locales.find(l => l.code === locale)?.label || locales[0].label);
  };

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`transition-border duration-300 border-1 flex justify-between items-center  text-[#D44217] font-500 bg-[#FFFFFF] rounded-[100px] py-[8px] px-[25px] max-2xl:!border-[#9E9FA0] ${isScrolled ? 'border-[#9E9FA0]' : 'border-[#FFFFFF]'}`}>
          <span>{currentLocale}</span>
      </button>
      {isOpen && (
        <ul role="menu" className="absolute top-[45px] p-[10px] left-[50%] translate-x-[-50%] bg-white shadow-lg rounded-[8px] w-fit z-[4]">
          {locales.map((locale) => (
            <li 
              role="menuitem"
              key={locale.code}
              onClick={() => setLocale(locale.code)}
              className="flex px-[20px] py-2 hover:bg-gray-100 cursor-pointer"
              >
                <span className="text-sm">{locale.label}</span>
            </li>
          ))}
        </ul>
      )}

    </div>
  );
}