'use client'
import { useTranslations } from "next-intl"
import { navConfig } from './nav'
import { Link } from "@/i18n/navigation"
import { createNavigation } from 'next-intl/navigation'
import { routing } from '@/i18n/routing'
import { useEffect, useState } from "react"
import LanguageSwitcher from "./langSwitcher"
import styles from "./style.module.css"

export const { Link: NextIntlLink, redirect, useRouter, getPathname } =
    createNavigation(routing)

export default function Header() {
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
        <header className="fixed w-[100%] z-4 ">
            <div className={`transition-bg duration-300 ease-in-out max z-3 relative max-2xl:!bg-white ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
            <div className="space !overflow-x-clip">
            <div className={` flex flex-row justify-between  py-[20px]  `}>
                    <Link href="/home">
                        <svg width="164" height="50" viewBox="0 0 164 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_140_18458)">
                                <path className={`max-2xl:!fill-[#D44217] ${isScrolled ? 'transition-fill duration-300 fill-[#D44217]' : 'fill-[#fff]'}`} d="M38.0825 18.9785V3.86475H54.0772L54.0781 7.48951H43.5143L43.5134 9.73095H53.2807V13.1332H43.5134L43.4968 15.3707H54.2515L54.2681 18.9785L38.0825 18.9785Z" />
                                <path className={`max-2xl:!fill-[#D44217] ${isScrolled ? 'transition-fill duration-300 fill-[#D44217]' : 'fill-[#fff]'}`} d="M130.056 38.0029V22.8892H146.051L146.052 26.5139H135.488L135.487 28.7554H145.254V32.1576H135.487L135.47 34.3951H146.225L146.242 38.0029L130.056 38.0029Z" />
                                <path className={`max-2xl:!fill-[#D44217] ${isScrolled ? 'transition-fill duration-300 fill-[#D44217]' : 'fill-[#fff]'}`} d="M93.5649 38.0161V22.9023H109.56L109.56 26.5271H98.9968L98.9959 28.7686H108.763V32.1708H98.9959L98.9792 34.4083H109.734L109.751 38.0161L93.5649 38.0161Z" />
                                <path className={`max-2xl:!fill-[#D44217] ${isScrolled ? 'transition-fill duration-300 fill-[#D44217]' : 'fill-[#fff]'}`} d="M57.0742 38.0908V22.9771H73.0689L73.0698 26.6018H62.506L62.5051 28.8433H72.2724V32.2455H62.5051L62.4885 34.483H73.2432L73.2598 38.0908L57.0742 38.0908Z" />
                                <path className={`max-2xl:!fill-[#D44217] ${isScrolled ? 'transition-fill duration-300 fill-[#D44217]' : 'fill-[#fff]'}`} d="M67.7952 19.0444L64.6605 13.5428H61.7844V19.0444H56.3325V3.93066H67.4948C69.5349 3.93066 71.4888 4.07929 72.7114 6.00683C72.9909 6.45504 73.4846 7.3561 73.4846 8.72628C73.4846 9.43227 73.3356 11.4434 71.4236 12.4931C71.0579 12.7068 70.7808 12.8136 70.0076 13.0063L73.785 19.0444H67.7952ZM67.8394 8.23425C67.5952 7.94562 67.2852 7.82397 67.1466 7.78395C66.8782 7.70647 66.583 7.68806 66.2931 7.68806H61.7844V10.1388H65.8622C66.3873 10.1599 66.7979 10.0892 67.0615 10.026C67.5361 9.91215 67.6997 9.78251 67.7799 9.7056C67.9348 9.55716 68.0054 9.38853 68.0338 9.31904C68.0649 9.24264 68.1303 9.07701 68.1166 8.86221C68.0962 8.54366 67.915 8.32356 67.8394 8.23425Z" />
                                <path className={`max-2xl:!fill-[#D44217] ${isScrolled ? 'transition-fill duration-300 fill-[#D44217]' : 'fill-[#fff]'}`} d="M86.1487 38.0424L83.0141 32.5408H80.1379V38.0424H74.686V22.9287H85.8483C87.8884 22.9287 89.8423 23.0773 91.065 25.0049C91.3444 25.4531 91.8381 26.3542 91.8381 27.7243C91.8381 28.4303 91.6891 30.4415 89.7771 31.4911C89.4115 31.7048 89.1343 31.8116 88.3611 32.0044L92.1386 38.0424H86.1487ZM86.193 27.2323C85.9487 26.9437 85.6387 26.822 85.5001 26.782C85.2317 26.7045 84.9365 26.6861 84.6466 26.6861H80.1379V29.1368H84.2158C84.7408 29.1579 85.1514 29.0873 85.415 29.0241C85.8896 28.9102 86.0532 28.7806 86.1334 28.7037C86.2883 28.5552 86.3589 28.3866 86.3873 28.3171C86.4184 28.2407 86.4838 28.0751 86.4701 27.8603C86.4497 27.5417 86.2685 27.3216 86.193 27.2323Z" />
                                <path className={`max-2xl:!fill-[#D44217] ${isScrolled ? 'transition-fill duration-300 fill-[#D44217]' : 'fill-[#fff]'}`} d="M85.9842 18.9951L82.0135 13.2798L80.1225 15.0773V18.9951H75.0991V3.88135H80.1458V9.53158L85.232 3.88135H91.825L85.8771 9.5966L92.5121 18.9951H85.9842Z" />
                                <path className={`max-2xl:!fill-[#D44217] ${isScrolled ? 'transition-fill duration-300 fill-[#D44217]' : 'fill-[#fff]'}`} d="M94.2231 19.02V3.90625H99.6564V19.02H94.2231Z" />
                                <path className={`max-2xl:!fill-[#D44217] ${isScrolled ? 'transition-fill duration-300 fill-[#D44217]' : 'fill-[#fff]'}`} d="M114.017 18.9702L106.823 10.8769V18.9702H101.457V3.85645H105.942L113.178 11.8197V3.85645H118.523V18.9702H114.017Z" />
                                <path className={`max-2xl:!fill-[#D44217] ${isScrolled ? 'transition-fill duration-300 fill-[#D44217]' : 'fill-[#fff]'}`} d="M50.2167 38.0561V32.2549H43.5841V38.0561H38.1299V22.9424H43.605V28.444H50.2167V22.9424H55.7128V38.0561H50.2167Z" />
                                <path className={`max-2xl:!fill-[#D44217] ${isScrolled ? 'transition-fill duration-300 fill-[#D44217]' : 'fill-[#fff]'}`} d="M122.082 38.0693L118.111 32.354L116.22 34.1515V38.0693H111.197V22.9556H116.243V28.6058L121.33 22.9556H127.923L121.975 28.6708L128.61 38.0693H122.082Z" />
                                <path className={`max-2xl:!fill-[#D44217] ${isScrolled ? 'transition-fill duration-300 fill-[#D44217]' : 'fill-[#fff]'}`} d="M158.627 26.5486L158.632 38.0542H153.18L153.175 26.5486H147.786L147.791 22.9404H164L163.995 26.5486H158.627Z" />
                                <path className={`max-2xl:!fill-[#D44217] ${isScrolled ? 'transition-fill duration-300 fill-[#D44217]' : 'fill-[#fff]'}`} d="M30.1286 35.0933C30.1223 34.2326 29.993 32.5441 29.0179 30.7297C28.2146 29.2348 27.1788 28.2904 26.5302 27.7838C23.2851 25.4138 20.0399 23.0439 16.7948 20.6739V14.6796C21.1061 17.859 25.4175 21.0383 29.7287 24.2176C29.699 20.2898 29.7447 16.3712 29.715 12.4434C24.1769 8.30868 18.5634 4.16461 13.0251 0.0299402C8.7309 0.0299402 4.32814 0.019043 0.0337571 0.019043L0.0532625 2.33356C3.91608 5.18222 7.77872 8.03072 11.6415 10.8792V16.9102C7.77872 14.0891 3.88682 11.2716 0.0240044 8.45048C0.00950112 12.3126 0.0242527 16.1711 0.00974941 20.0331C6.88035 25.1713 13.7511 30.3095 20.6217 35.4476C20.6366 37.1974 20.6426 39.285 20.6575 41.0348C19.4065 41.084 18.114 40.9791 16.863 41.0282C16.8235 40.5262 16.8343 39.8408 16.7948 39.3386C15.2942 38.2754 13.7936 37.2122 12.293 36.149C12.2635 37.7537 12.2338 39.3583 12.2043 40.963C10.9675 40.9039 9.73062 40.8447 8.49394 40.7857C8.48686 36.5034 8.47961 32.2211 8.47253 27.9387C5.7479 29.3564 0.00975272 32.1892 0.00975272 32.1892L0 41.2528C0.339988 42.3933 1.11876 44.2302 2.7187 46.0132C5.38633 48.9858 8.72162 49.7762 9.91546 50H24.0424C24.7271 49.809 26.8631 49.1201 28.4848 46.9877C30.0797 44.8906 30.1893 42.6965 30.1952 41.9819C30.1729 39.6857 30.1508 37.3895 30.1286 35.0933Z" />
                                <path className={`max-2xl:!fill-[#D44217] ${isScrolled ? 'transition-fill duration-300 fill-[#D44217]' : 'fill-[#fff]'}`} d="M29.7198 0.00969234C27.4837 -0.00510696 25.2502 0.0147993 23.0142 0C25.2502 1.7278 27.4837 3.5007 29.7198 5.22833V0.00969234Z" />
                                <path className={`max-2xl:!fill-[#D44217] ${isScrolled ? 'transition-fill duration-300 fill-[#D44217]' : 'fill-[#fff]'}`} d="M39.9464 42.7935H40.582V45.5665H39.9464V44.4335H38.6752V45.5665H38.0396V42.7935H38.6752V43.8472H39.9464V42.7935Z" />
                                <path className={`max-2xl:!fill-[#D44217] ${isScrolled ? 'transition-fill duration-300 fill-[#D44217]' : 'fill-[#fff]'}`} d="M42.5869 45.618C41.6812 45.618 41.0972 44.9683 41.0972 44.18C41.0972 43.3916 41.6812 42.742 42.5869 42.742C43.4927 42.742 44.0767 43.3916 44.0767 44.18C44.0767 44.9683 43.4927 45.618 42.5869 45.618ZM42.5869 45.0238C43.1073 45.0238 43.4331 44.6553 43.4331 44.18C43.4331 43.7006 43.1073 43.3362 42.5869 43.3362C42.0625 43.3362 41.7408 43.7006 41.7408 44.18C41.7408 44.6553 42.0625 45.0238 42.5869 45.0238Z" />
                                <path className={`max-2xl:!fill-[#D44217] ${isScrolled ? 'transition-fill duration-300 fill-[#D44217]' : 'fill-[#fff]'}`} d="M45.449 45.618C44.8174 45.618 44.4479 45.3169 44.2811 44.8772L44.8293 44.5761C44.9008 44.8455 45.0756 45.0238 45.4331 45.0238C45.8065 45.0238 46.0012 44.8336 46.0012 44.485V42.7935H46.6368V44.5048C46.6368 45.2297 46.18 45.618 45.449 45.618Z" />
                                <path className={`max-2xl:!fill-[#D44217] ${isScrolled ? 'transition-fill duration-300 fill-[#D44217]' : 'fill-[#fff]'}`} d="M48.7142 42.7935L49.9139 45.5308V45.5665H49.2306L49.032 45.0832H47.7329L47.5383 45.5665H46.855V45.5308L48.0507 42.7935H48.7142ZM47.9554 44.5365H48.8095L48.3844 43.4946L47.9554 44.5365Z" />
                                <path className={`max-2xl:!fill-[#D44217] ${isScrolled ? 'transition-fill duration-300 fill-[#D44217]' : 'fill-[#fff]'}`} d="M50.9266 44.9802H52.4759V45.5665H50.291V42.7935H50.9266V44.9802Z" />
                                <path className={`max-2xl:!fill-[#D44217] ${isScrolled ? 'transition-fill duration-300 fill-[#D44217]' : 'fill-[#fff]'}`} d="M55.0714 42.7935V42.8291L53.9988 44.4612V45.5665H53.3632V44.4612L52.2906 42.8291V42.7935H52.9858L53.681 43.8987L54.3762 42.7935H55.0714Z" />
                                <path className={`max-2xl:!fill-[#D44217] ${isScrolled ? 'transition-fill duration-300 fill-[#D44217]' : 'fill-[#fff]'}`} d="M57.0353 43.97L58.1119 45.5348V45.5665H57.4127L56.6182 44.4295L56.1057 44.9921V45.5665H55.4701V42.7935H56.1057V44.1403L57.3213 42.7935H58.0801V42.8251L57.0353 43.97Z" />
                                <path className={`max-2xl:!fill-[#D44217] ${isScrolled ? 'transition-fill duration-300 fill-[#D44217]' : 'fill-[#fff]'}`} d="M60.6566 45.618C60.0249 45.618 59.6555 45.3169 59.4886 44.8772L60.0369 44.5761C60.1084 44.8455 60.2832 45.0238 60.6407 45.0238C61.0141 45.0238 61.2088 44.8336 61.2088 44.485V42.7935H61.8444V44.5048C61.8444 45.2297 61.3875 45.618 60.6566 45.618Z" />
                                <path className={`max-2xl:!fill-[#D44217] ${isScrolled ? 'transition-fill duration-300 fill-[#D44217]' : 'fill-[#fff]'}`} d="M63.0851 44.9802H64.7138V45.5665H62.4495V42.7935H64.6741V43.3798H63.0851V43.8829H64.0981V44.4691H63.0851V44.9802Z" />
                                <path className={`max-2xl:!fill-[#D44217] ${isScrolled ? 'transition-fill duration-300 fill-[#D44217]' : 'fill-[#fff]'}`} d="M67.6265 42.7935H68.1628V45.5665H67.5272V43.8393L66.7208 44.9089H66.6652L65.8587 43.8393V45.5665H65.2231V42.7935H65.7594L66.693 44.0334L67.6265 42.7935Z" />
                                <path className={`max-2xl:!fill-[#D44217] ${isScrolled ? 'transition-fill duration-300 fill-[#D44217]' : 'fill-[#fff]'}`} d="M70.2098 44.0017H71.4612V45.1109C71.1632 45.4357 70.7421 45.618 70.2257 45.618C69.2405 45.618 68.6804 44.9643 68.6804 44.1879C68.6804 43.3956 69.2524 42.742 70.1621 42.742C70.754 42.742 71.2069 43.0232 71.4135 43.455L70.8693 43.7363C70.762 43.5065 70.5395 43.3283 70.1701 43.3283C69.6417 43.3283 69.3239 43.6848 69.3239 44.1879C69.3239 44.6751 69.6258 45.0475 70.2416 45.0475C70.4839 45.0475 70.6905 44.9921 70.8772 44.8534V44.5206H70.2098V44.0017Z" />
                                <path className={`max-2xl:!fill-[#D44217] ${isScrolled ? 'transition-fill duration-300 fill-[#D44217]' : 'fill-[#fff]'}`} d="M74.3796 42.7935V42.8291L73.307 44.4612V45.5665H72.6714V44.4612L71.5988 42.8291V42.7935H72.294L72.9892 43.8987L73.6844 42.7935H74.3796Z" />
                                <path className={`max-2xl:!fill-[#D44217] ${isScrolled ? 'transition-fill duration-300 fill-[#D44217]' : 'fill-[#fff]'}`} d="M76.5342 41.8823L76.0177 42.5162H75.4814L75.839 41.8823H76.5342ZM77.3009 42.7935V42.8291L76.2283 44.4612V45.5665H75.5927V44.4612L74.5201 42.8291V42.7935H75.2153L75.9105 43.8987L76.6057 42.7935H77.3009Z" />
                                <path className={`max-2xl:!fill-[#D44217] ${isScrolled ? 'transition-fill duration-300 fill-[#D44217]' : 'fill-[#fff]'}`} d="M78.3431 44.9802H79.9719V45.5665H77.7075V42.7935H79.9321V43.3798H78.3431V43.8829H79.3561V44.4691H78.3431V44.9802Z" />
                                <path className={`max-2xl:!fill-[#D44217] ${isScrolled ? 'transition-fill duration-300 fill-[#D44217]' : 'fill-[#fff]'}`} d="M82.7852 42.7935V43.3798H81.8318V45.5665H81.1962V43.3798H80.2428V42.7935H82.7852Z" />
                                <path className={`max-2xl:!fill-[#D44217] ${isScrolled ? 'transition-fill duration-300 fill-[#D44217]' : 'fill-[#fff]'}`} d="M83.2006 42.7935H83.8363V45.5665H83.2006V42.7935Z" />
                            </g>
                            <defs>
                                <clipPath id="clip0_140_18458">
                                    <rect width="164" height="50" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>

                    <ul className={`flex  items-center flex-row gap-[40px] max-2xl:hidden`}>
                        {navKeys.map(key => {
                            return (
                                <li key={key}>
                                    <Link
                                        href={key}
                                        className={`transition-text duration-300 text-nowrap cursor-pointer text-[16px] font-[400] ${isScrolled ? 'text-[#212529]' : 'text-[#FFFFFF]'}`}
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
                            <div className={`${styles['icon-1']} ${isOpen ? styles.a : ''}`} ></div>
                            <div className={`${styles['icon-2']} ${isOpen ? styles.c : ''}`} ></div>
                            <div className={`${styles['icon-3']} ${isOpen ? styles.b : ''}`} ></div>
                            <div className={styles.clear}></div>
                        </div>
                    </div>

                    <div className={`${styles['mobile-menu']} ${isOpen ? styles.open : ''}`}>
                        <ul className={`z-11 flex items-center flex-row gap-[40px] w-fit  ${styles['mobile-links']}`}>
                            <li onClick={() => setIsOpen(false)}>
                                <Link
                                    href='/home'
                                    className={`text-[#6C757D] text-[30px] text-left font-[400]`}
                                >Home</Link>
                            </li>
                            {navKeys.map(key => {
                                const { path } = navConfig[key]
                                return (
                                    <li key={key} onClick={() => setIsOpen(false)}>
                                        <Link
                                            href={path}
                                            className={`text-[#6C757D] text-[30px] text-left font-[400]`}
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