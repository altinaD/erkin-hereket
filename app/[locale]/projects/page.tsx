'use client'
import Footer from "@/_templates/footer/footer"
import { useLocale, useTranslations } from "next-intl"
import Image from "next/image"

type projectType = {
    title: string,
    desc: string
}

export default function Page() {
    const nav = useTranslations("nav")
    const all = useTranslations("")
    const projects = all.raw("projects")
    const locale = useLocale()
    console.log(locale)
    return (
        <div>
            <div className="hero-space">
                <div className="w-[100%] h-[50vh] bg-center bg-cover relative" style={{ backgroundImage: `url(/images/projects/hero.jpg)` }}>
                    <div className="absolute top-0 left-0 w-[100%] h-[50vh]" style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.5) 100%)' }}>
                        <div className="absolute w-[150px] h-[150px] right-[150px] top-[150px] bg-[#D44217]"></div>
                        <div className="absolute w-[150px] h-[150px] right-0 top-0 bg-[#D4421733]"></div>
                        <div className="absolute w-[150px] h-[150px] right-0 top-[150px]" style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.5) 100%)' }}></div>
                        <div className="absolute w-[150px] h-[150px] right-[150px] top-0 bg-[#FFFFFF1A]"></div>
                        <div className="absolute w-[150px] h-[150px] right-[0] top-[300px] bg-[#FFFFFF1A]"></div>
                        <div className="absolute w-[150px] h-[150px] right-[300px] top-[0] border-[1px] border-t-transparent border-r-transparent border-l-[#FFFFFF1A] border-b-[#FFFFFF1A]"></div>
                    </div>
                    <div className="hero-content hero-content2">
                        <div className="space">
                            <h1 className="hero-title">{nav("projects")}</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative w-[100%] overflow-x-hidden">
                <svg className="absolute top-0 left-0" width="619" height="903" viewBox="0 0 619 903" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_130_710)">
                        <ellipse cx="142.5" cy="451.5" rx="192.5" ry="128.5" transform="rotate(-33.4351 142.5 451.5)" fill="#D44217" fillOpacity="0.4" />
                    </g>
                    <defs>
                        <filter id="filter0_f_130_710" x="-333.098" y="0.671387" width="951.197" height="901.657" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_130_710" />
                        </filter>
                    </defs>
                </svg>
                <div className="space">
                    <div className="relative mt-[60px] mb-[40px] max-2xl:mt-[80px] max-xs:mt-[60px]">
                        {(projects as projectType[]).map((project: projectType, ndx: number) => (
                            <div className="relative grid grid-cols-[6fr_1fr_5fr] max-2xl:grid-cols-[1fr] pl-[20px] max-xs:pl-[10px] border-l-[1px] max-xs:py-[24px] max-xs:block border-[#D44217]" key={ndx}>
                                <span className="absolute bg-[#D44217] w-[24px] h-[24px] top-[-24px] left-[-12px] max-xs:left-0"></span>
                                <div className="w-[100%] relative">
                                    <h1 className="text-[26px] font-[AkzidenzGroteskBoldExtended] mb-[20px] max-xs:text-[20px]">{project.title}</h1>
                                    <p className="font-[RidleyGroteskRegular] text-[16px] wrap-break-word">{project.desc}</p>
                                </div>
                                <span></span>
                                <div className="py-[60px] max-2xl:flex max-2xl:justify-end max-xs:justify-center">
                                    <Image className="object-cover h-auto" width={281} height={281} alt="project images " src={`/images/projects/${ndx + 1}.png`} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}