import RedirectButton from "@/_components/redirectBtn"
import styles from "./styles.module.css"
import Link from "next/link"
import { useTranslations } from "next-intl"

export default function Contact(){
    const home = useTranslations("home")
    const footer = useTranslations("footer")
    const contact:string[] = footer.raw("contactBox") as string[];
    return (
        <div className="w-[100%]" >
            <div className="space">
                <div className={`${styles['black']} ${styles['footer-top-content']}`}>
                    <div>
                        <h1 className="text-[46px] text-[#252525] uppercase font-[700] w-[80%] font-[AkzidenzGroteskBoldExtended] max-xs:text-[26px]">{home("heroTitle")}</h1>
                        <div className={styles["contact-boxes"]}>
                            <div className={` ${styles['address-box']}`}>
                                <span className="font-[AkzidenzGroteskBoldExtended]">Address</span>
                                <span className="font-[RidleyGroteskRegular]" >G. Kulyýew (2127) “Begenchli” Floor 3</span>
                            </div>
                            <div className={styles['small-boxes']}>
                                <div className={styles['box']}>
                                    <span className="font-[AkzidenzGroteskBoldExtended]">Phone number:</span>
                                        <span className="font-[RidleyGroteskRegular]" >+993 64 64 66 79</span>
                                </div>
                                <div className={styles['box']}>
                                    <span className="font-[AkzidenzGroteskBoldExtended]">Address:</span>
                                    <span  className="font-[RidleyGroteskRegular]" style={{wordWrap: 'break-word'}}>erkinhereket@gmail.com</span>
                                </div>
                            </div>
                        </div>
                        {/* <div className={`${styles['socials']}`}>
                            <Link href="https://www.instagram.com/erkinhereket_hj">
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 0H7C5.14409 0.00198528 3.36477 0.740121 2.05245 2.05245C0.740121 3.36477 0.00198528 5.14409 0 7V19C0.00198528 20.8559 0.740121 22.6352 2.05245 23.9476C3.36477 25.2599 5.14409 25.998 7 26H19C20.8559 25.998 22.6352 25.2599 23.9476 23.9476C25.2599 22.6352 25.998 20.8559 26 19V7C25.998 5.14409 25.2599 3.36477 23.9476 2.05245C22.6352 0.740121 20.8559 0.00198528 19 0ZM13 19C11.8133 19 10.6533 18.6481 9.66658 17.9888C8.67988 17.3295 7.91085 16.3925 7.45672 15.2961C7.0026 14.1997 6.88378 12.9933 7.11529 11.8295C7.3468 10.6656 7.91824 9.59647 8.75736 8.75736C9.59647 7.91824 10.6656 7.3468 11.8295 7.11529C12.9933 6.88378 14.1997 7.0026 15.2961 7.45672C16.3925 7.91085 17.3295 8.67988 17.9888 9.66658C18.6481 10.6533 19 11.8133 19 13C18.9983 14.5908 18.3657 16.116 17.2408 17.2408C16.116 18.3657 14.5908 18.9983 13 19ZM20.5 7C20.2033 7 19.9133 6.91203 19.6666 6.7472C19.42 6.58238 19.2277 6.34811 19.1142 6.07403C19.0007 5.79994 18.9709 5.49834 19.0288 5.20736C19.0867 4.91639 19.2296 4.64912 19.4393 4.43934C19.6491 4.22956 19.9164 4.0867 20.2074 4.02882C20.4983 3.97094 20.7999 4.00065 21.074 4.11418C21.3481 4.22771 21.5824 4.41997 21.7472 4.66664C21.912 4.91332 22 5.20333 22 5.5C22 5.89782 21.842 6.27936 21.5607 6.56066C21.2794 6.84196 20.8978 7 20.5 7ZM17 13C17 13.7911 16.7654 14.5645 16.3259 15.2223C15.8864 15.8801 15.2616 16.3928 14.5307 16.6955C13.7998 16.9983 12.9956 17.0775 12.2196 16.9231C11.4437 16.7688 10.731 16.3878 10.1716 15.8284C9.61216 15.269 9.2312 14.5563 9.07686 13.7804C8.92252 13.0044 9.00173 12.2002 9.30448 11.4693C9.60723 10.7384 10.1199 10.1136 10.7777 9.67412C11.4355 9.2346 12.2089 9 13 9C14.0609 9 15.0783 9.42143 15.8284 10.1716C16.5786 10.9217 17 11.9391 17 13Z" fill="white"/>
                                </svg>
                            </Link>
                        </div> */}
                    </div>
                    <span></span>
                    <form className={styles['form']}>
                        <div className="w-[100%] flex flex-row gap-[20px]">
                            <div className="w-[50%] nowrap mb-[20px]">
                                <label className="font-[RidleyGroteskBold] mb-[5px] text-[#252525] text-[14px] font-[700]">{contact[0]}</label>
                                <input placeholder="Jon" className={`${styles['small-input']} font-[RidleyGroteskRegular] placeholder-[#30303054] border-[#C8C8C8] border-[0.5px] bg-[#F0F0F0] py-[16px] px-[20px]`} type="text" />
                            </div>
                            <div className="w-[50%] nowrap mb-[20px]">
                                <label className="font-[RidleyGroteskBold] mb-[5px] text-[#252525] text-[14px] font-[700]">{contact[1]}</label>
                                <input placeholder="Doe" className={`${styles['small-input']} font-[RidleyGroteskRegular] placeholder-[#30303054] border-[#C8C8C8] border-[0.5px] bg-[#F0F0F0] py-[16px] px-[20px]`} type="text" />
                            </div>
                        </div>
                        <div className="flex flex-col w-[100%] mb-[20px]">
                            <label className="font-[RidleyGroteskBold] mb-[5px] text-[#252525] text-[14px] font-[700]">{contact[2]}</label>
                            <input placeholder="example@mail.com" className=" font-[RidleyGroteskRegular] placeholder-[#30303054] border-[#C8C8C8] border-[0.5px] bg-[#F0F0F0] py-[16px] px-[20px]" type="text" />
                        </div>
                        <div className="flex flex-col w-[100%]">
                             <label className="font-[RidleyGroteskBold] mb-[5px] text-[#252525] text-[14px] font-[700]">{contact[3]}</label>
                            <textarea placeholder="Your message" className=" font-[RidleyGroteskRegular] placeholder-[#30303054] border-[#C8C8C8] border-[0.5px] bg-[#F0F0F0] py-[16px] px-[20px]" name="" id=""></textarea>
                        </div>
                        <div className="flex justify-between items-baseline mb-[40px] max-xs:flex-col max-xs:mb-[60px]">
                            <div className={`${styles['socials2']}`}>
                               <Link href="https://www.instagram.com/erkinhereket_hj">
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 0H7C5.14409 0.00198528 3.36477 0.740121 2.05245 2.05245C0.740121 3.36477 0.00198528 5.14409 0 7V19C0.00198528 20.8559 0.740121 22.6352 2.05245 23.9476C3.36477 25.2599 5.14409 25.998 7 26H19C20.8559 25.998 22.6352 25.2599 23.9476 23.9476C25.2599 22.6352 25.998 20.8559 26 19V7C25.998 5.14409 25.2599 3.36477 23.9476 2.05245C22.6352 0.740121 20.8559 0.00198528 19 0ZM13 19C11.8133 19 10.6533 18.6481 9.66658 17.9888C8.67988 17.3295 7.91085 16.3925 7.45672 15.2961C7.0026 14.1997 6.88378 12.9933 7.11529 11.8295C7.3468 10.6656 7.91824 9.59647 8.75736 8.75736C9.59647 7.91824 10.6656 7.3468 11.8295 7.11529C12.9933 6.88378 14.1997 7.0026 15.2961 7.45672C16.3925 7.91085 17.3295 8.67988 17.9888 9.66658C18.6481 10.6533 19 11.8133 19 13C18.9983 14.5908 18.3657 16.116 17.2408 17.2408C16.116 18.3657 14.5908 18.9983 13 19ZM20.5 7C20.2033 7 19.9133 6.91203 19.6666 6.7472C19.42 6.58238 19.2277 6.34811 19.1142 6.07403C19.0007 5.79994 18.9709 5.49834 19.0288 5.20736C19.0867 4.91639 19.2296 4.64912 19.4393 4.43934C19.6491 4.22956 19.9164 4.0867 20.2074 4.02882C20.4983 3.97094 20.7999 4.00065 21.074 4.11418C21.3481 4.22771 21.5824 4.41997 21.7472 4.66664C21.912 4.91332 22 5.20333 22 5.5C22 5.89782 21.842 6.27936 21.5607 6.56066C21.2794 6.84196 20.8978 7 20.5 7ZM17 13C17 13.7911 16.7654 14.5645 16.3259 15.2223C15.8864 15.8801 15.2616 16.3928 14.5307 16.6955C13.7998 16.9983 12.9956 17.0775 12.2196 16.9231C11.4437 16.7688 10.731 16.3878 10.1716 15.8284C9.61216 15.269 9.2312 14.5563 9.07686 13.7804C8.92252 13.0044 9.00173 12.2002 9.30448 11.4693C9.60723 10.7384 10.1199 10.1136 10.7777 9.67412C11.4355 9.2346 12.2089 9 13 9C14.0609 9 15.0783 9.42143 15.8284 10.1716C16.5786 10.9217 17 11.9391 17 13Z" fill="white"/>
                                    </svg>
                                </Link>
                            </div>
                            <div className="max-xs:mt-[20px] max-xs:mb-[60px] max-3xl:absolute max-3xl:left-[50%] max-3xl:translate-x-[-50%]" >
                                <RedirectButton caption="Submit" href="/contact" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}