import { useTranslations } from "next-intl"

export default function Counters(){
    const about = useTranslations("about")
    const counters:string[] = about.raw("counterCaptions") as string[]
    return (
        <div className="grid grid-cols-[3fr_3fr_3fr_3fr] gap-[20px] mt-[100px] max-2xl:grid-cols-[1fr_1fr] max-xs:px-[20px]">
            <div className="relative border-[#D44217] border-1 p-[10px]">
                <div className="w-[20px] h-[20px] absolute top-[-20px] left-[-20px] bg-[#D44217]"></div>
                <div className="w-[20px] h-[20px] absolute bottom-[-20px] right-[-20px] bg-[#D44217]"></div>
                <h1 className="text-[56px] max-2xl:text-[46px] max-xs:text-[24px] font-[AkzidenzGroteskBoldExtended, GeistVariableVF] text-[#252525] mb-[70px]">100+</h1>
                <p className="text-[20px] max-xs:text-[16px] font-[AkzidenzGroteskMediumExtended, GeistVariableVF] text-[#252525] absolute bottom-0 right-[5px] text-end">{counters[0]}</p>
            </div>
            <div className="relative border-[#D44217] border-1 p-[10px]">
                <div className="w-[20px] h-[20px] absolute top-[-20px] left-[-20px] bg-[#D44217]"></div>
                <div className="w-[20px] h-[20px] absolute bottom-[-20px] right-[-20px] bg-[#D44217]"></div>
                <h1 className="text-[56px] max-2xl:text-[46px] max-xs:text-[24px] font-[AkzidenzGroteskBoldExtended, GeistVariableVF] text-[#252525] mb-[70px]">50+</h1>
                <p className="text-[20px] max-xs:text-[16px] font-[AkzidenzGroteskMediumExtended, GeistVariableVF] text-[#252525] absolute bottom-0 right-[5px] text-end">{counters[1]}</p>
            </div>
            <div className="relative border-[#D44217] border-1 p-[10px]">
                <div className="w-[20px] h-[20px] absolute top-[-20px] left-[-20px] bg-[#D44217]"></div>
                <div className="w-[20px] h-[20px] absolute bottom-[-20px] right-[-20px] bg-[#D44217]"></div>
                <h1 className="text-[56px] max-2xl:text-[46px] max-xs:text-[24px] font-[AkzidenzGroteskBoldExtended, GeistVariableVF] text-[#252525] mb-[70px]">70+</h1>
                <p className="text-[20px] max-xs:text-[16px] font-[AkzidenzGroteskMediumExtended, GeistVariableVF] text-[#252525] absolute bottom-0 right-[5px] text-end">{counters[2]}</p>
            </div>
            <div className="relative border-[#D44217] border-1 p-[10px]">
                <div className="w-[20px] h-[20px] absolute top-[-20px] left-[-20px] bg-[#D44217]"></div>
                <div className="w-[20px] h-[20px] absolute bottom-[-20px] right-[-20px] bg-[#D44217]"></div>
                <h1 className="text-[56px] max-2xl:text-[46px] max-xs:text-[24px] font-[AkzidenzGroteskBoldExtended, GeistVariableVF] text-[#252525] mb-[70px] ">20+</h1>
                <p className="text-[20px] max-xs:text-[16px] font-[AkzidenzGroteskMediumExtended, GeistVariableVF] text-[#252525] absolute bottom-0 right-[5px] text-end">{counters[3]}</p>
            </div>
        </div>
    )
}