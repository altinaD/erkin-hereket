'use client'
import { useTranslations } from "next-intl"
import { navConfig } from './nav'
// import { Link } from "@/i18n/navigation"
import Link from "next/link"
import { createNavigation } from 'next-intl/navigation'
import { routing } from '@/i18n/routing'
import { useEffect, useState } from "react"
import LanguageSwitcher from "./langSwitcher"
import styles from "./style.module.css"

export const { Link: NextIntlLink, redirect, useRouter, getPathname } =
    createNavigation(routing)

export default function Header() {
    const home = useTranslations()
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const navKeys = Object.keys(navConfig) as (keyof typeof navConfig)[]
    const t = useTranslations('nav')
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        handleScroll()
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <header className="fixed w-[100%] z-4 overflow-visible" >
            <div className={`transition-bg duration-300 ease-in-out max z-3 relative max-2xl:!bg-white ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
                <div className="space !overflow-visible">
                    <div className={` flex flex-row justify-between  py-[20px]  `}>
                        <Link href="/home">
                            <svg id="_Слой_1" data-name="Слой 1" xmlns="http://www.w3.org/2000/svg" width="164" height="50" viewBox="0 0 495.39426 151.45987">
                                <path className={`cls-3 max-2xl:!fill-[#D44217] ${isScrolled ? 'transition-fill duration-300 !fill-[#D44217]' : 'fill-[#fff]'}`} d="M115.03575,57.48902V11.70655h48.315l.00271,10.98012h-31.90985l-.00271,6.78978h29.50395v10.30598h-29.50395l-.05022,6.77782h32.4867l.05022,10.92876h-48.89185Z" />
                                <path className={`cls-3 max-2xl:!fill-[#D44217] ${isScrolled ? 'transition-fill duration-300 !fill-[#D44217]' : 'fill-[#fff]'}`} d="M392.85985,115.11809v-45.78247h48.315l.00271,10.98012h-31.90985l-.00271,6.78978h29.50395v10.30598h-29.50395l-.05022,6.77782h32.4867l.05022,10.92876h-48.89185Z" />
                                <path className={`cls-3 max-2xl:!fill-[#D44217] ${isScrolled ? 'transition-fill duration-300 !fill-[#D44217]' : 'fill-[#fff]'}`} d="M282.63162,115.15827v-45.78247h48.315l.00271,10.98012h-31.90985l-.00271,6.78978h29.50395v10.30598h-29.50395l-.05022,6.77782h32.4867l.05022,10.92876h-48.89185Z" />
                                <path className={`cls-3 max-2xl:!fill-[#D44217] ${isScrolled ? 'transition-fill duration-300 !fill-[#D44217]' : 'fill-[#fff]'}`} d="M172.4034,115.38489v-45.78247h48.315l.00271,10.98012h-31.90985l-.00271,6.78978h29.50395v10.30598h-29.50395l-.05022,6.77782h32.4867l.05022,10.92876h-48.89185Z" />
                                <path className={`cls-3 max-2xl:!fill-[#D44217] ${isScrolled ? 'transition-fill duration-300 !fill-[#D44217]' : 'fill-[#fff]'}`} d="M204.78811,57.68991l-9.46884-16.66544h-8.68798v16.66544h-16.46846V11.90744h33.71779c6.16248,0,12.06468.45023,15.75795,6.28911.84418,1.35772,2.33555,4.08722,2.33555,8.23775,0,2.13858-.45023,8.23071-6.2258,11.41044-1.10446.6472-1.9416.9708-4.27716,1.55469l11.41044,18.29048h-18.0935ZM204.92177,24.94386c-.73777-.87432-1.67428-1.24283-2.09285-1.36406-.81076-.2347-1.70242-.29047-2.57825-.29047h-13.61937v7.42369h12.31793c1.58591.0639,2.82623-.15008,3.62248-.34159,1.43378-.34489,1.92797-.7376,2.17024-.97056.46781-.44965.68106-.96049.76679-1.17099.09409-.23141.2915-.73315.25018-1.38381-.06155-.96495-.60895-1.63168-.83714-1.9022Z" />
                                <path className={`cls-3 max-2xl:!fill-[#D44217] ${isScrolled ? 'transition-fill duration-300 !fill-[#D44217]' : 'fill-[#fff]'}`} d="M260.22932,115.23862l-9.46884-16.66544h-8.68798v16.66544h-16.46846v-45.78247h33.71779c6.16248,0,12.06468.45023,15.75795,6.28911.84418,1.35772,2.33555,4.08722,2.33555,8.23775,0,2.13858-.45023,8.23071-6.2258,11.41044-1.10446.6472-1.9416.9708-4.27716,1.55469l11.41044,18.29048h-18.0935ZM260.36298,82.49257c-.73777-.87432-1.67428-1.24283-2.09285-1.36406-.81076-.2347-1.70242-.29047-2.57825-.29047h-13.61937v7.42369h12.31793c1.58591.0639,2.82623-.15008,3.62248-.34159,1.43378-.34489,1.92797-.7376,2.17024-.97056.46781-.44965.68106-.96049.76679-1.17099.09409-.23141.2915-.73315.25018-1.38381-.06155-.96495-.60895-1.63168-.83714-1.9022Z" />
                                <path className={`cls-3 max-2xl:!fill-[#D44217] ${isScrolled ? 'transition-fill duration-300 !fill-[#D44217]' : 'fill-[#fff]'}`} d="M259.73222,57.53924l-11.99433-17.31264-5.71226,5.44493v11.86771h-15.17406V11.75677h15.24441v17.11566l15.364-17.11566h19.91551l-17.96688,17.31264,20.04214,28.46983h-19.71854Z" />
                                <path className={`cls-3 max-2xl:!fill-[#D44217] ${isScrolled ? 'transition-fill duration-300 !fill-[#D44217]' : 'fill-[#fff]'}`} d="M284.62005,57.61458V11.83211h16.41219v45.78247h-16.41219Z" />
                                <path className={`cls-3 max-2xl:!fill-[#D44217] ${isScrolled ? 'transition-fill duration-300 !fill-[#D44217]' : 'fill-[#fff]'}`} d="M344.40981,57.46391l-21.73049-24.51627v24.51627h-16.20818V11.68144h13.54902l21.85712,24.12232V11.68144h16.14486v45.78247h-13.61234Z" />
                                <path className={`cls-3 max-2xl:!fill-[#D44217] ${isScrolled ? 'transition-fill duration-300 !fill-[#D44217]' : 'fill-[#fff]'}`} d="M151.68945,115.2788v-17.57293h-20.03511v17.57293h-16.4755v-45.78247h16.53881v16.66544h19.97179v-16.66544h16.60212v45.78247h-16.60212Z" />
                                <path className={`cls-3 max-2xl:!fill-[#D44217] ${isScrolled ? 'transition-fill duration-300 !fill-[#D44217]' : 'fill-[#fff]'}`} d="M368.77272,115.31898l-11.99433-17.31264-5.71226,5.44493v11.86771h-15.17406v-45.78247h15.24441v17.11566l15.364-17.11566h19.91551l-17.96688,17.31264,20.04214,28.46983h-19.71854Z" />
                                <path className={`cls-3 max-2xl:!fill-[#D44217] ${isScrolled ? 'transition-fill duration-300 !fill-[#D44217]' : 'fill-[#fff]'}`} d="M479.16389,80.42159l.01515,34.85257h-16.46846l-.01515-34.85257h-16.27852l.01515-10.9299h48.9622l-.01515,10.9299h-16.21521Z" />
                                <g>
                                    <path className={`cls-3 max-2xl:!fill-[#D44217] ${isScrolled ? 'transition-fill duration-300 !fill-[#D44217]' : 'fill-[#fff]'}`} d="M91.00933,106.30437c-.01885-2.60724-.40958-7.72188-3.35508-13.21807-2.42639-4.52829-5.55529-7.38922-7.51454-8.92361-9.80237-7.17934-19.60525-14.35816-29.40762-21.5375v-18.15797c13.02296,9.6312,26.04643,19.2619,39.06939,28.89259-.08966-11.89815.04829-23.76835-.04137-35.6665C73.03108,25.16856,56.07444,12.61537,39.3449.09063,26.37339.09063,13.07399.05762.10197.05762l.05892,7.01112c11.6684,8.62916,23.33628,17.25782,35.00468,25.88647v18.26903C23.49717,42.67862,11.74091,34.14374.07251,25.59812c-.04381,11.69896.00075,23.38718-.04306,35.08615,20.75401,15.56448,41.50852,31.12897,62.26252,46.69345.04483,5.30057.06317,11.62408.108,16.92465-3.77892.14926-7.68316-.16862-11.46208-.01987-.11921-1.52064-.0866-3.59706-.20581-5.1182-4.53287-3.22059-9.06574-6.44118-13.59861-9.66177-.08915,4.86094-.17881,9.72137-.26796,14.58231-3.73613-.17881-7.47226-.35813-11.20788-.53693-.0214-12.97202-.0433-25.94403-.0647-38.91605C17.36267,88.92633.02946,97.50737.02946,97.50737l-.02946,27.45531c1.027,3.45493,3.37944,9.0193,8.21236,14.42023,8.0581,9.00461,18.13301,11.39891,21.73923,12.07696h42.67307c2.06827-.57871,8.52066-2.66532,13.41929-9.12483,4.81764-6.35254,5.14877-12.99902,5.1666-15.16357-.06724-6.9557-.13398-13.9114-.20122-20.8671Z" />
                                    <path className={`cls-3 max-2xl:!fill-[#D44217] ${isScrolled ? 'transition-fill duration-300 !fill-[#D44217]' : 'fill-[#fff]'}`} d="M89.77479.02936c-6.75448-.04483-13.50127.01547-20.25575-.02936,6.75448,5.23384,13.50127,10.60431,20.25575,15.83765V.02936Z" />
                                </g>
                                <text className={`cls-4 max-2xl:!fill-[#D44217] ${isScrolled ? 'transition-fill duration-300 !fill-[#D44217]' : 'fill-[#fff]'}`} transform="translate(113.90991 139.03038)"><tspan className="cls-17" x="0" y="0">H</tspan><tspan className="cls-10" x="24.30078" y="0">O</tspan><tspan className="cls-9" x="48.97949" y="0">J</tspan><tspan className="cls-6" x="71.03223" y="0">A</tspan><tspan className="cls-1" x="95.10156" y="0">L</tspan><tspan className="cls-7" x="115.31641" y="0">Y</tspan><tspan className="cls-11" x="138.39551" y="0">K </tspan><tspan className="cls-14" x="178.17383" y="0">J</tspan><tspan className="cls-5" x="200.83789" y="0">E</tspan><tspan className="cls-17" x="223.54297" y="0">M</tspan><tspan className="cls-12" x="249.42871" y="0">G</tspan><tspan className="cls-16" x="273.01855" y="0">Y</tspan><tspan className="cls-13" x="296.61621" y="0">Ý</tspan><tspan className="cls-8" x="319.67773" y="0">E</tspan><tspan className="cls-2" x="342.37012" y="0">T</tspan><tspan className="cls-15" x="364.6084" y="0">I</tspan></text>
                            </svg>
                        </Link>

                        <ul className={`flex items-center flex-row gap-[40px] max-2xl:hidden`}>
                            {navKeys.map(key => {
                                const { path } = navConfig[key]
                                return (
                                    <li key={key}>
                                        <Link
                                            href={path.replace(/^\//, '')}
                                            className={`transition-text duration-300 text-nowrap cursor-pointer font-[GeistVariableVF] text-[16px] font-medium ${isScrolled ? 'text-[#212529]' : 'text-[#FFFFFF]'}`}
                                        >
                                            {t(key)}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>

                        <div className="flex flex-row gap-[20px] ">
                            <LanguageSwitcher isScrolled={isScrolled} />
                            <div className={`${styles['hamburger-icon']} ${isOpen ? styles.fix : ''}`} onClick={() => setIsOpen(!isOpen)} >
                                <div className={`${styles['icon-1']} ${isOpen ? styles.a : ''}`}></div>
                                <div className={`${styles['icon-2']} ${isOpen ? styles.c : ''}`}></div>
                                <div className={`${styles['icon-3']} ${isOpen ? styles.b : ''}`}></div>
                                <div className={styles.clear}></div>
                            </div>
                        </div>

                        <div className={`${styles['mobile-menu']} ${isOpen ? styles.open : ''}`}>
                            <ul className={`z-11 flex items-center flex-row gap-[40px] w-fit  ${styles['mobile-links']}`}>
                                <li onClick={() => setIsOpen(false)}>
                                    <Link
                                        href='/'
                                        className={`text-[#6C757D] text-[30px] text-left font-[500]`}
                                    >{home("navHome")}</Link>
                                </li>
                                {navKeys.map(key => {
                                    const { path } = navConfig[key]
                                    return (
                                        <li key={key} onClick={() => setIsOpen(false)}>
                                            <Link
                                                href={path}
                                                className={`text-[#6C757D] text-[30px] text-left font-[500] font-[GeistVariableVF]`}
                                            >
                                                {t(key)}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}