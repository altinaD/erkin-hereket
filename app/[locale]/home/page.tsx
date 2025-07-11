'use client'
// import Header from "@/_templates/header/header"
import { useTranslations } from "next-intl"
import RedirectButton from "../../../_components/redirectBtn"
import styles from "./style.module.css"
import Footer from "@/_templates/footer/footer"
import Image from "next/image"
import LearnMore from "./LearnMore"
import Cranes from "@/_components/Cranes"

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
        <div className="hero-space">
            <div className="w-[100%] h-[100vh] bg-center bg-cover relative" style={{backgroundImage: `url(/images/home/1.jpg)`}}>
                <div className="absolute top-0 left-0 w-[100%] h-[100vh]" style={{background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.5) 100%)'}}>
                    <div className="absolute w-[150px] h-[150px] right-[150px] top-[150px] bg-[#D44217]"></div>
                    <div className="absolute w-[150px] h-[150px] right-0 top-0 bg-[#D4421733]"></div>
                    <div className="absolute w-[150px] h-[150px] right-0 top-[150px]" style={{background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.5) 100%)'}}></div>
                    <div className="absolute w-[150px] h-[150px] right-[150px] top-0 bg-[#FFFFFF1A]"></div>
                    <div className="absolute w-[150px] h-[150px] right-[0] top-[300px] bg-[#FFFFFF1A]"></div>
                    <div className="absolute w-[150px] h-[150px] right-[300px] top-[0] border-[1px] border-t-transparent border-r-transparent border-l-[#FFFFFF1A] border-b-[#FFFFFF1A]"></div>
                </div>
                {/* <Header /> */}
                <div className="hero-content">
                    <h1 className="hero-title">{home('heroTitle')}</h1>
                    <RedirectButton caption="Services" href="/services" />
                </div>
                <button onClick={moveBottom} className={styles['scroll']}>Scroll down</button>
            </div>
        </div>
        <div className="space">
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
                    <div className="max-2xl:order-1">
                        <h1 className='home-text'>{home("homeAboutText")}</h1>
                        <div className="max-2xl:mt-[40px] max-2xl:mb-[60px]">
                            <LearnMore />
                        </div>
                    </div>
                </div>
            </div>

            <div className={`pt-[100px] max-xs:pt-[80px] ${styles['home-container']}`}>
                <div className={styles['home-title']}>
                    <span className={styles['home-num']}>2</span>
                    <span className="ml-[20px] font-[AkzidenzGroteskBoldExtended]">{t('services')}</span>
                </div>
            </div>
        </div>
        <div className="space max-2xl:!pr-0 max-xs:!pr-[16px] " >
            <div className={`pt-[150px] overflow-x-hidden ${styles['home-container']}`}>
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

