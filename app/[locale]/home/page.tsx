'use client'
import { useTranslations } from "next-intl"
import RedirectButton from "../../../_components/redirectBtn"
import styles from "./style.module.css"
import Footer from "@/_templates/footer/footer"
import Image from "next/image"
import Link from "next/link"
import LearnMore from "./LearnMore"
import Cranes from "@/_components/Cranes"
import Services from "./Services"

type projectType = {
    "title": string,
    "desc": string
}

export default function Home(){
  const t = useTranslations('nav')
  const home = useTranslations("home")
  const all = useTranslations("")
  const projects = all.raw("projects");

    const moveBottom = () => {
        window.scrollTo({top: document.documentElement.scrollHeight,  behavior: "smooth" });
    }

  return (
    <>
        <div className="hero-space w-[100%] h-[100vh]">
            <div className="w-[100%] h-[100%] bg-center bg-cover relative" style={{backgroundImage: `url(/images/home/1.jpg)`}}>
                <div className="absolute top-0 left-0 w-[100%] h-[100%]" style={{background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.5) 100%)'}}>
                    <div className="absolute w-[150px] h-[150px] right-[150px] top-[150px] bg-[#D44217]"></div>
                    <div className="absolute w-[150px] h-[150px] right-0 top-0 bg-[#D4421733]"></div>
                    <div className="absolute w-[150px] h-[150px] right-0 top-[150px]" style={{background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.5) 100%)'}}></div>
                    <div className="absolute w-[150px] h-[150px] right-[150px] top-0 bg-[#FFFFFF1A]"></div>
                    <div className="absolute w-[150px] h-[150px] right-[0] top-[300px] bg-[#FFFFFF1A]"></div>
                    <div className="absolute w-[150px] h-[150px] right-[300px] top-[0] border-[1px] border-t-transparent border-r-transparent border-l-[#FFFFFF1A] border-b-[#FFFFFF1A]"></div>
                </div>

                <div className="space">
                    <div className="hero-content">
                        <h1 className="hero-title">{home('heroTitle')}</h1>
                        <RedirectButton caption="Services" href="/services" />
                    </div>
                </div>
                <div  className={styles['scroll']}>
                    <svg className="absolute left-[-18px] bottom-[4px]" width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 16H18L19 0C16 8.5 9.5 14.5 0 16Z" fill="white"/>
                    </svg>
                    <button onClick={moveBottom}>{home('srollDown')}</button>
                    <svg className="absolute right-[-18px] bottom-[4px]" width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 16H1L0 0C2.99997 8.5 9.5 14.5 19 16Z" fill="white"/>
                    </svg>
                </div>
            </div>
        </div>
        <div className="space  relative">
            <div className={styles['home-container']}>
                <div className={styles['home-title']}>
                    <span className={styles['home-num']}>1</span>
                    <span className="ml-[20px] font-[AkzidenzGroteskBoldExtended]">{t('about')}</span>
                </div>
                <div className={styles["home-content"]}>
                    <div className="w-[115%] relative h-fit max-2xl:order-3 max-2xl:mt-[60px] max-xs:w-[120%] left-[50%] translate-x-[-50%]">
                        <Image className="max-2xl:mx-auto" width={522} height={604} alt="cap" src="/images/home/Group1.png"></Image>
                    </div>
                    <span></span>
                    <div className="max-2xl:order-1 z-3">
                        <h1 className='home-text'>{home("homeAboutText")}</h1>
                        <div className="max-2xl:mt-[40px] max-2xl:mb-[60px] z-2">
                            <LearnMore href="/about" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={`pt-[100px] max-xs:pt-[80px] relative ${styles['home-container']}`}>
                <div className={styles['home-title']}>
                    <span className={styles['home-num']}>2</span>
                    <span className="ml-[20px] font-[AkzidenzGroteskBoldExtended]">{t('services')}</span>
                </div> 
                <Image className="absolute top-[-90px] right-[-80px] max-2xl:right-[-40px] max-2xl:top-[-50%] max-xs:hidden z-[-1] " width={324} height={538} alt="logo" src="/images/home/ErkinHereketTransparent.png" />
                <Services />
                 <div className="pt-[24px] flex justify-center max-2xl:mt-[40px] max-2xl:mb-[60px] z-2">
                    <Link href="/services" className="font-[RidleyGroteskBold] relative font-[700]  text-[16px] uppercase py-[21px] px-[30px] boreder-[#9E9FA0] border-[1px] rounded-[100px]">Learn more</Link>
                </div>
            </div>
        </div>
        <div className="space max-2xl:!pr-0 max-xs:!pr-[16px] " >
            <div className={`mt-[100px] overflow-x-hidden ${styles['home-container']}`}>
                <div className={styles['home-title']}>
                    <span className={styles['home-num']}>3</span>
                    <span className="ml-[20px] font-[AkzidenzGroteskBoldExtended]">{t('cranes')}</span>
                </div>
                <Cranes />
                <div className="mt-[40px] max-xs:mt-[20px] flex justify-center w-[100%]">
                    <RedirectButton caption="See all" href="/cranes" />
                </div>
            </div>
        </div>
        <div className="space overflow-x-hidden">
            <div className={`${styles['home-container']}`}>
                <div className={styles['home-title']}>
                    <span className={styles['home-num']}>4</span>
                    <span className="ml-[20px] font-[AkzidenzGroteskBoldExtended]">{t('projects')}</span>
                </div>
                <div className="flex flex-row items-start mt-[100px] w-[100%] relative max-2xl:flex-col max-2xl:mt-[30px] max-2xl:mb-[40px] max-xs:mb-0" >
                    <div className="w-[30%] max-2xl:w-[100%] max-2xl:order-2">
                        {(projects as projectType[]).map((project: projectType, ndx: number) => (
                           <div className="mb-[60px] max-xs:mb-[40px]" key={ndx}>
                                <h1 className="text-[26px] font-[AkzidenzGroteskBoldExtended] mb-[20px] max-xs:text-[20px]">{project.title}</h1>
                                <p className="font-[RidleyGroteskRegular] text-[16px]">{project.desc}</p>
                            </div>
                        ))}
                    </div>
                    <Image className="w-[80%] object-contain z-2 max-2xl:w-[100%] max-2xl:order-1 max-2xl:mb-[60px]" width={900} height={635} alt="map" src="/images/home/map.png" />
                    <Image className="absolute top-[-100px] right-[-80px]  z-1 max-2xl:top-[-30px] max-xs:hidden" width={324} height={538} alt="logo" src="/images/home/ErkinHereketTransparent.png" />
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

