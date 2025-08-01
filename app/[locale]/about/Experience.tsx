type propsType = {
    title: string,
    desc: string
}

export default function Experience({title, desc}:propsType){
    return (
        <div className="mt-[100px] max-xs:mt-[70px] border-l-[1px] border-[#D44217]">
            <div className="grid grid-cols-[3fr_3fr_6fr] max-2xl:grid-cols-[1fr] pl-[20px] max-xs:pl-[10px]">
                <h1 className="font-[GeistVariableVF] font-[800] text-[26px] text-[#252525] max-xs:text-[22px]">{title}</h1>
                <span></span>
                <p className="font-[GeistVariableVF] font-[400] text-[16px] text-[#252525] max-2xl:mt-[20px] max-xs:mt-[10px] mb-[20px]">{desc}</p>
            </div>
        </div>
    )
}