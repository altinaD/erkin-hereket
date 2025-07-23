'use client'
import { useTranslations } from "next-intl"
import Image from "next/image"
import Counters from "./Counters"
import Footer from "@/_templates/footer/footer"
import Experience from "./Experience"

export default function Page() {
    const nav = useTranslations("nav")
    const about = useTranslations("about")
    return (
        <>
            <div className="hero-space">
                <div className="w-[100%] h-[50vh] bg-center bg-cover relative" style={{ backgroundImage: `url(/images/about/hero.jpg)` }}>
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
                            <h1 className="hero-title">{nav("about")}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space relative">
                <Image className="absolute top-[-90px] right-0 z-1 max-xs:hidden" width={324} height={538} alt="logo" src="/images/home/ErkinHereketTransparent.png" />
                <div className="mt-[80px] max-xs:mt-[60px] relative z-2">
                    <svg id="_Слой_1" data-name="Слой 1" xmlns="http://www.w3.org/2000/svg" className="max-xs:w-[100%] max-xs:h-auto" width="496" height="152" viewBox="0 0 496 152">
                        <path className="cls-3 !fill-[#D44217]" d="M115.03575,57.48902V11.70655h48.315l.00271,10.98012h-31.90985l-.00271,6.78978h29.50395v10.30598h-29.50395l-.05022,6.77782h32.4867l.05022,10.92876h-48.89185Z"/>
                        <path className="cls-3 !fill-[#D44217]" d="M392.85985,115.11809v-45.78247h48.315l.00271,10.98012h-31.90985l-.00271,6.78978h29.50395v10.30598h-29.50395l-.05022,6.77782h32.4867l.05022,10.92876h-48.89185Z"/>
                        <path className="cls-3 !fill-[#D44217]" d="M282.63162,115.15827v-45.78247h48.315l.00271,10.98012h-31.90985l-.00271,6.78978h29.50395v10.30598h-29.50395l-.05022,6.77782h32.4867l.05022,10.92876h-48.89185Z"/>
                        <path className="cls-3 !fill-[#D44217]" d="M172.4034,115.38489v-45.78247h48.315l.00271,10.98012h-31.90985l-.00271,6.78978h29.50395v10.30598h-29.50395l-.05022,6.77782h32.4867l.05022,10.92876h-48.89185Z"/>
                        <path className="cls-3 !fill-[#D44217]" d="M204.78811,57.68991l-9.46884-16.66544h-8.68798v16.66544h-16.46846V11.90744h33.71779c6.16248,0,12.06468.45023,15.75795,6.28911.84418,1.35772,2.33555,4.08722,2.33555,8.23775,0,2.13858-.45023,8.23071-6.2258,11.41044-1.10446.6472-1.9416.9708-4.27716,1.55469l11.41044,18.29048h-18.0935ZM204.92177,24.94386c-.73777-.87432-1.67428-1.24283-2.09285-1.36406-.81076-.2347-1.70242-.29047-2.57825-.29047h-13.61937v7.42369h12.31793c1.58591.0639,2.82623-.15008,3.62248-.34159,1.43378-.34489,1.92797-.7376,2.17024-.97056.46781-.44965.68106-.96049.76679-1.17099.09409-.23141.2915-.73315.25018-1.38381-.06155-.96495-.60895-1.63168-.83714-1.9022Z"/>
                        <path className="cls-3 !fill-[#D44217]" d="M260.22932,115.23862l-9.46884-16.66544h-8.68798v16.66544h-16.46846v-45.78247h33.71779c6.16248,0,12.06468.45023,15.75795,6.28911.84418,1.35772,2.33555,4.08722,2.33555,8.23775,0,2.13858-.45023,8.23071-6.2258,11.41044-1.10446.6472-1.9416.9708-4.27716,1.55469l11.41044,18.29048h-18.0935ZM260.36298,82.49257c-.73777-.87432-1.67428-1.24283-2.09285-1.36406-.81076-.2347-1.70242-.29047-2.57825-.29047h-13.61937v7.42369h12.31793c1.58591.0639,2.82623-.15008,3.62248-.34159,1.43378-.34489,1.92797-.7376,2.17024-.97056.46781-.44965.68106-.96049.76679-1.17099.09409-.23141.2915-.73315.25018-1.38381-.06155-.96495-.60895-1.63168-.83714-1.9022Z"/>
                        <path className="cls-3 !fill-[#D44217]" d="M259.73222,57.53924l-11.99433-17.31264-5.71226,5.44493v11.86771h-15.17406V11.75677h15.24441v17.11566l15.364-17.11566h19.91551l-17.96688,17.31264,20.04214,28.46983h-19.71854Z"/>
                        <path className="cls-3 !fill-[#D44217]" d="M284.62005,57.61458V11.83211h16.41219v45.78247h-16.41219Z"/>
                        <path className="cls-3 !fill-[#D44217]" d="M344.40981,57.46391l-21.73049-24.51627v24.51627h-16.20818V11.68144h13.54902l21.85712,24.12232V11.68144h16.14486v45.78247h-13.61234Z"/>
                        <path className="cls-3 !fill-[#D44217]" d="M151.68945,115.2788v-17.57293h-20.03511v17.57293h-16.4755v-45.78247h16.53881v16.66544h19.97179v-16.66544h16.60212v45.78247h-16.60212Z"/>
                        <path className="cls-3 !fill-[#D44217]" d="M368.77272,115.31898l-11.99433-17.31264-5.71226,5.44493v11.86771h-15.17406v-45.78247h15.24441v17.11566l15.364-17.11566h19.91551l-17.96688,17.31264,20.04214,28.46983h-19.71854Z"/>
                        <path className="cls-3 !fill-[#D44217]" d="M479.16389,80.42159l.01515,34.85257h-16.46846l-.01515-34.85257h-16.27852l.01515-10.9299h48.9622l-.01515,10.9299h-16.21521Z"/>
                        <g>
                            <path className="cls-3 !fill-[#D44217]" d="M91.00933,106.30437c-.01885-2.60724-.40958-7.72188-3.35508-13.21807-2.42639-4.52829-5.55529-7.38922-7.51454-8.92361-9.80237-7.17934-19.60525-14.35816-29.40762-21.5375v-18.15797c13.02296,9.6312,26.04643,19.2619,39.06939,28.89259-.08966-11.89815.04829-23.76835-.04137-35.6665C73.03108,25.16856,56.07444,12.61537,39.3449.09063,26.37339.09063,13.07399.05762.10197.05762l.05892,7.01112c11.6684,8.62916,23.33628,17.25782,35.00468,25.88647v18.26903C23.49717,42.67862,11.74091,34.14374.07251,25.59812c-.04381,11.69896.00075,23.38718-.04306,35.08615,20.75401,15.56448,41.50852,31.12897,62.26252,46.69345.04483,5.30057.06317,11.62408.108,16.92465-3.77892.14926-7.68316-.16862-11.46208-.01987-.11921-1.52064-.0866-3.59706-.20581-5.1182-4.53287-3.22059-9.06574-6.44118-13.59861-9.66177-.08915,4.86094-.17881,9.72137-.26796,14.58231-3.73613-.17881-7.47226-.35813-11.20788-.53693-.0214-12.97202-.0433-25.94403-.0647-38.91605C17.36267,88.92633.02946,97.50737.02946,97.50737l-.02946,27.45531c1.027,3.45493,3.37944,9.0193,8.21236,14.42023,8.0581,9.00461,18.13301,11.39891,21.73923,12.07696h42.67307c2.06827-.57871,8.52066-2.66532,13.41929-9.12483,4.81764-6.35254,5.14877-12.99902,5.1666-15.16357-.06724-6.9557-.13398-13.9114-.20122-20.8671Z"/>
                            <path className="cls-3 !fill-[#D44217]" d="M89.77479.02936c-6.75448-.04483-13.50127.01547-20.25575-.02936,6.75448,5.23384,13.50127,10.60431,20.25575,15.83765V.02936Z"/>
                        </g>
                        <text className="cls-4 !fill-[#D44217]" transform="translate(113.90991 139.03038)"><tspan className="cls-17" x="0" y="0">H</tspan><tspan className="cls-10" x="24.30078" y="0">O</tspan><tspan className="cls-9" x="48.97949" y="0">J</tspan><tspan className="cls-6" x="71.03223" y="0">A</tspan><tspan className="cls-1" x="95.10156" y="0">L</tspan><tspan className="cls-7" x="115.31641" y="0">Y</tspan><tspan className="cls-11" x="138.39551" y="0">K </tspan><tspan className="cls-14" x="178.17383" y="0">J</tspan><tspan className="cls-5" x="200.83789" y="0">E</tspan><tspan className="cls-17" x="223.54297" y="0">M</tspan><tspan className="cls-12" x="249.42871" y="0">G</tspan><tspan className="cls-16" x="273.01855" y="0">Y</tspan><tspan className="cls-13" x="296.61621" y="0">Ý</tspan><tspan className="cls-8" x="319.67773" y="0">E</tspan><tspan className="cls-2" x="342.37012" y="0">T</tspan><tspan className="cls-15" x="364.6084" y="0">I</tspan></text>
                    </svg>
                    <div className="grid mt-[70px] max-xs:mt-[40px] grid-cols-[8fr_4fr] max-2xl:grid-cols-1" >
                        <h1 className="home-text">{about("aboutTitle")}</h1>
                        <span className=""></span>
                    </div>
                </div>
            </div>
            <div className="space">
                <Counters/>
                <Experience title={about("experienceTitle")} desc={about("experienceDesc")} />
                <Image width={1280} height={380} alt="crane" src="/images/about/1.jpg" />
                <Experience title={about("devPeriodTitle")} desc={about("devPeriodDesc")} />
                <Image className="mx-auto w-[100%] relative" width={435} height={846} alt="constructure" src="/images/about/2.png" />
                <Experience title={about("missionTitle")} desc={about("missionDesc")} />
                <Image width={1280} height={380} alt="flags" src="/images/about/3.jpg" />
            </div>
            <div className="relative mt-[130px] max-2xl:mt-[100px] max-xs:mt-[60px] bg-center bg-cover w-[100%] h-[100vh]" style={{backgroundImage: `url(/images/about/4.jpg)` }}>
                <div className="absolute w-[100%] bottom-[66px] max-xs:bottom-[30px]">
                    <div className="space relative grid grid-cols-[6fr_6fr] gap-[20px] max-2xl:grid-cols-[1fr]">
                        <div className="bg-[#FFFFFF] p-[20px]">
                            <h1 className="text-[26px] font-[AkzidenzGroteskBoldExtended, GeistVariableVF] mb-[20px] max-xs:text-[20px] max-xs:mb-[10px]">{about("advTitle")}</h1>
                            <p className="font-[RidleyGroteskBold, GeistVariableVF] text-[20px] uppercase max-xs:text-[18px]">{about.rich("advDesc", {
                                red: (chunks) => <span className="text-[#D44217]">{chunks}</span>,
                                grey: (chunks) => <span className="text-[#6F6F6F]">{chunks}</span>
                            })}</p>
                        </div>
                        <div className="bg-[#FFFFFF] p-[20px]">
                            <h1 className="text-[26px] font-[AkzidenzGroteskBoldExtended, GeistVariableVF] mb-[20px] max-xs:text-[20px] max-xs:mb-[10px]">{about("goalsTitle")}</h1>
                              <p className="font-[RidleyGroteskBold, GeistVariableVF] text-[20px] uppercase max-xs:text-[18px]">{about.rich("goalsDesc", {
                                red: (chunks) => <span className="text-[#D44217]">{chunks}</span>,
                                grey: (chunks) => <span className="text-[#6F6F6F]">{chunks}</span>
                            })}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}