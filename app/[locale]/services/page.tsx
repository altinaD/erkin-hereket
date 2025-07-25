'use client'
import { useTranslations } from "next-intl"
import Service from "./Service"
import Footer from "@/_templates/footer/footer"

export default function Page() {
    const nav = useTranslations("nav")
    return (
        <>
            <div className="hero-space">
                <div className="w-[100%] h-[50vh] bg-center bg-cover relative" style={{ backgroundImage: `url(/images/services/hero.jpg)` }}>
                    <div className="absolute top-0 left-0 w-[100%] h-[50vh]" style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.5) 100%)' }}>
                        <div className="absolute w-[150px] h-[150px] right-[150px] top-[150px] bg-[#D44217]"></div>
                        <div className="absolute w-[150px] h-[150px] right-0 top-0 bg-[#D4421733]"></div>
                        <div className="absolute w-[150px] h-[150px] right-0 top-[150px]" style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.5) 100%)' }}></div>
                        <div className="absolute w-[150px] h-[150px] right-[150px] top-0 bg-[#FFFFFF1A]"></div>
                        <div className="absolute w-[150px] h-[150px] right-[0] top-[300px] bg-[#FFFFFF1A]"></div>
                        <div className="absolute w-[150px] h-[150px] right-[300px] top-[0] border-[1px] border-t-transparent border-r-transparent border-l-[#FFFFFF1A] border-b-[#FFFFFF1A]"></div>
                    </div>
                    <div className="space">
                        <div className="hero-content hero-content2">
                            <h1 className="hero-title">{nav("services")}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <Service />
            <Footer />
        </>
    )
}