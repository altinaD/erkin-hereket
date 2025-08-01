import { useTranslations } from "next-intl"
import Image from "next/image";

type ServiceType = {
    title: string,
    desc: string
}
export default function Service(){
    const t = useTranslations()
    const services = t.raw("services");
    return (
        <section className="space">
            <div className="pt-[144px] max-xs:pt-[66px]">
                {(services as ServiceType[]).map((service: ServiceType, ndx: number) => (
                    <div className="change-order mb-[120px] max-xs:mb-[40px] relative" key={ndx}>
                        <span className="absolute top-[-66px] max-2xl:left-[0] max-xs:left-0 max-xs:top-0 w-[66px] h-[66px] max-xs:w-[40px] max-xs:h-[40px] max-xs:border-0 max-xs:bg-[#FFFFFF] max-xs:text-[#D44217] border-[1px] border-[#D44217] text-[30px] font-[900] font-[GeistVariableVF] flex justify-center items-center">{ndx+1}</span>
                        <div className="ml-[66px] max-2xl:ml-[0]">
                            <h1 className=" text-[#FFFFFF] text-[28px] font-[800] font-[GeistVariableVF] py-[18px] px-[20px] max-xs:hidden" style={{background: 'linear-gradient(90deg, #D44217 0%, #6E220C 100%)'}}>{service.title}</h1>
                            <div className="change-grid grid grid-cols-[4fr_1fr_6fr] max-2xl:grid-cols-[1fr]"> 
                                <h1 className="mt-[10px] hidden max-xs:block font-[GeistVariableVF] font-[800] text-[20px] order-text">{service.title}</h1>
                                <p className="max-2xl:w-[100%] mt-[42px] max-2xl:mt-[20px] max-xs:mt-[10px] font-[GeistVariableVF] font-[500] text-[18px] max-xs:text-[16px] order-text">{service.desc}</p>
                                <span className="!order-2"></span>
                                <Image className="max-2xl:w-[100%] w-[100%] h-[100%] object-cover order-img" width={630} height={380} alt="crane images" src={`/images/services/${ndx+1}.jpg`} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}