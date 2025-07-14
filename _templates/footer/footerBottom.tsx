'use client'
import { useTranslations } from "next-intl"
import Image from "next/image";

export default function FooterBottom(){
    const t = useTranslations('footer')
    const nav:string[] = t.raw("nav") as string[];

    const moveTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <div className="bg-[#252525] min-h-[20vh] relative overflow-hidden">
                <div className="space py-[80px] flex justify-between items-center ">
                    <Image className="max-3xl:hidden" width={200} height={21} alt="Erkin Hereket" src='/images/home/ErkinHereket.png'></Image>
                    <nav className="max-3xl:my-[80px] max-3xl:mx-auto max-xs:mt-[60px] max-xs:mb-[70px]">
                        <ul className="flex flex-row gap-[40px] justify-between max-xs:flex-col max-xs:gap-[50px]">
                            {nav.map((el, ndx) => (
                                <li className="font-[RidleyGroteskMedium] text-[#9E9FA0] text-[16px] font-[500]" key={ndx}>{el}</li>
                            ))}
                        </ul>
                    </nav>
                    <svg className="relative max-3xl:absolute max-3xl:bottom-0 max-3xl:right-0 max-xs:top-[-10%] max-xs:h-[90%] " width="199" height="209" viewBox="0 0 199 209" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M198.561 187.212C198.52 181.566 197.667 170.49 191.241 158.587C185.947 148.781 179.121 142.585 174.846 139.262C153.46 123.715 132.072 108.168 110.686 92.6207V53.298C139.099 74.1552 167.513 95.0114 195.926 115.868C195.73 90.101 196.031 64.395 195.835 38.6285C159.337 11.505 122.341 -15.6801 85.8413 -42.8035C57.5406 -42.8035 28.5244 -42.875 0.222478 -42.875L0.35102 -27.6918C25.8087 -9.00456 51.2653 9.68157 76.723 28.3677V67.9309C51.2653 49.4246 25.6159 30.9416 0.158207 12.4353C0.0626306 37.7704 0.159847 63.0823 0.0642709 88.4175C45.3446 122.124 90.6261 155.83 135.906 189.536C136.004 201.015 136.044 214.709 136.142 226.188C127.897 226.511 119.379 225.823 111.135 226.145C110.874 222.852 110.946 218.355 110.685 215.061C100.796 208.087 90.9062 201.112 81.0165 194.138C80.822 204.665 80.6264 215.19 80.4319 225.717C72.2805 225.33 64.1292 224.942 55.9789 224.554C55.9323 196.462 55.8845 168.37 55.8378 140.278C37.8813 149.578 0.0642709 168.161 0.0642709 168.161L0 227.618C2.24067 235.1 7.37315 247.15 17.9174 258.846C35.4983 278.347 57.4794 283.532 65.3473 285H158.45C162.962 283.747 177.04 279.228 187.728 265.24C198.239 251.483 198.961 237.089 199 232.401C198.853 217.338 198.708 202.275 198.561 187.212Z" fill="#D9D9D9" fillOpacity="0.1"/>
                    </svg>
                    <span className="font-[RubikMedium] absolute bottom-0 left-[50%] translate-x-[-50%] text-center w-[100%] mx-auto mb-[10px] text-[#6C757D] text-[14px] font-[500]">{t("copyright")}</span>
                    <svg onClick={moveTop} className="cursor-pointer absolute right-[80px] max-3xl:hidden" width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1.18073" y="33.0037" width="45" height="45" rx="22.5" transform="rotate(-44.7 1.18073 33.0037)" stroke="#9E9FA0"/>
                        <path d="M33.626 23.4063L41.0556 30.9141C41.2071 31.0673 41.2917 31.2744 41.2905 31.4899C41.2894 31.7053 41.2027 31.9116 41.0496 32.0631C40.8964 32.2147 40.6893 32.2992 40.4738 32.2981C40.2583 32.297 40.0521 32.2103 39.9005 32.0571L33.8504 25.9433L33.7651 42.3666C33.764 42.5822 33.6773 42.7885 33.524 42.9402C33.3707 43.0918 33.1635 43.1764 32.9479 43.1752C32.7323 43.1741 32.526 43.0874 32.3743 42.9341C32.2227 42.7809 32.1381 42.5737 32.1392 42.358L32.2259 25.9348L26.1121 31.9849C25.959 32.1365 25.7519 32.221 25.5364 32.2199C25.3209 32.2187 25.1147 32.1321 24.9631 31.9789C24.8115 31.8257 24.727 31.6186 24.7281 31.4031C24.7293 31.1876 24.8159 30.9814 24.9691 30.8299L32.4769 23.4003C32.6301 23.2487 32.8372 23.1642 33.0527 23.1653C33.2682 23.1664 33.4744 23.2531 33.626 23.4063Z" fill="white"/>
                    </svg>
                </div>
        </div>
    )
}