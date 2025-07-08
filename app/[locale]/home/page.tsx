'use client'
import Header from "@/_templates/header/header"
import { useTranslations } from "next-intl"
import RedirectButton from "../../../_components/redirectBtn"
import styles from "./style.module.css"
import Footer from "@/_templates/footer/footer"

export default function Home(){
  const t = useTranslations('nav')
  const home = useTranslations("home")

  return (
    <>
        <div className="hero-space">
        <div className="w-[100%] h-[100vh] bg-center bg-cover relative" style={{backgroundImage: `url(/home/1.jpg)`}}>
            <div className="absolute top-0 left-0 w-[100%] h-[100vh]" style={{background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.5) 100%)'}}>
                <div className="absolute w-[150px] h-[150px] right-[150px] top-[150px] bg-[#D44217]"></div>
                <div className="absolute w-[150px] h-[150px] right-0 top-0 bg-[#D4421733]"></div>
                <div className="absolute w-[150px] h-[150px] right-0 top-[150px]" style={{background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.5) 100%)'}}></div>
                <div className="absolute w-[150px] h-[150px] right-[150px] top-0 bg-[#FFFFFF1A]"></div>
                <div className="absolute w-[150px] h-[150px] right-[0] top-[300px] bg-[#FFFFFF1A]"></div>
                <div className="absolute w-[150px] h-[150px] right-[300px] top-[0] border-[1px] border-t-transparent border-r-transparent border-l-[#FFFFFF1A] border-b-[#FFFFFF1A]"></div>
            </div>
            <Header />
            <div className="hero-content">
                <h1 className="hero-title">{home('heroTitle')}</h1>
                <RedirectButton caption="Services" href="/services" />
            </div>
            <div className={styles['scroll']}>Scroll down</div>
        </div>
        </div>
        <div className="space">
            <div className={styles['home-container']}>
                <div className={styles['home-title']}>
                    <span className={styles['home-num']}>1</span>
                    <span className="ml-[20px]">{t('about')}</span>
                </div>
                <div className={styles["home-content"]}>
                    <div className={styles['home-imgs']}>
                        
                    </div>
                    <h1 className={styles['home-text']}>{home("homeAboutText")}</h1>
                </div>
            </div>
        </div>
        <div className={styles.blank}></div>
        <Footer/>
    </>
  )
}

