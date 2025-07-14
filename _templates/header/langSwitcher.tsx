'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'
import { useState } from 'react'

const localeNames: Record<string, string> = {
  en: 'ENG',
  ru: 'RUS',
  tk: 'TKM',
}
type ScrolledType = {
  isScrolled: boolean
}
const LanguageSwitcher = ({ isScrolled }: ScrolledType) => {
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = useLocale()
  const [isOpen, setIsOpen] = useState(false)

  const SUPPORTED_LOCALES = ['en', 'ru', 'tk'];

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/');

    if (SUPPORTED_LOCALES.includes(segments[1])) {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }
    const newPath = segments.join('/');
    router.push(newPath);
    setIsOpen(false);
  };


  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`transition-border duration-300 border-1 flex justify-between items-center  text-[#D44217] font-500 bg-[#FFFFFF] rounded-[100px] py-[8px] px-[25px] max-2xl:!border-[#9E9FA0] ${isScrolled ? 'border-[#9E9FA0]' : 'border-[#FFFFFF]'}`}
      >
        <span>{localeNames[currentLocale]}</span>
      </button>

      {isOpen && (
        <ul className="absolute top-[45px] p-[10px] left-[50%] translate-x-[-50%] bg-white shadow-lg rounded-[8px] w-fit z-4">
          {Object.keys(localeNames).map((locale) => (
            <li
              key={locale}
              onClick={() => switchLocale(locale)}
              className="flex px-[20px] py-2 hover:bg-gray-100 cursor-pointer"
            >
              <span className="text-sm">{localeNames[locale]}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default LanguageSwitcher
