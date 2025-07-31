import {Link} from "@/i18n/navigation"

type btnType = {
    caption: string,
    href: string
}

export default function RedirectButton({caption, href}: btnType){
    return (
        <Link href={href} className="group transition-bg duration-300 ease-in-out w-fit mt-[20px] bg-[#D44217] hover:bg-[#E35930] text-[#FFFFFF] flex flex-row items-center rounded-[100px] py-[8px] pl-[30px] pr-[8px]">
            <span className="text-[16px] font-[800] font-[GeistVariableVF]">{caption}</span>
            <div className="transition-transform duration-300 group-hover:scale-[0.9] bg-[#FFFFFF] rounded-[50%] ml-[20px] p-[10px]">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.3125 6.5V17.0625C20.3125 17.278 20.2269 17.4847 20.0745 17.637C19.9221 17.7894 19.7155 17.875 19.5 17.875C19.2845 17.875 19.0778 17.7894 18.9254 17.637C18.7731 17.4847 18.6875 17.278 18.6875 17.0625V8.46117L7.07481 20.0748C6.92235 20.2273 6.71557 20.313 6.49996 20.313C6.28436 20.313 6.07758 20.2273 5.92512 20.0748C5.77266 19.9224 5.68701 19.7156 5.68701 19.5C5.68701 19.2844 5.77266 19.0776 5.92512 18.9252L17.5388 7.3125H8.93746C8.72198 7.3125 8.51531 7.2269 8.36294 7.07452C8.21057 6.92215 8.12496 6.71549 8.12496 6.5C8.12496 6.28451 8.21057 6.07785 8.36294 5.92548C8.51531 5.7731 8.72198 5.6875 8.93746 5.6875H19.5C19.7155 5.6875 19.9221 5.7731 20.0745 5.92548C20.2269 6.07785 20.3125 6.28451 20.3125 6.5Z" fill="#D44217" />
                </svg>
            </div>              
        </Link>
    )
}
