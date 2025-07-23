import styles from "./styles.module.css"
import Link from "next/link"
import { useTranslations } from "next-intl"
import emailjs from '@emailjs/browser';
import { useEffect, useState, useRef, FormEvent } from "react"

type postType = {
    name: string,
    lastName: string,
    email: string,
    message: string
}
interface FormData {
    name: string,
    lastName: string,
    email: string,
    message: string
}


export default function PostForm({name, lastName, email, message}: postType) {
    const footer = useTranslations("footer")

    useEffect(() => {
        emailjs.init(process.env.NEXT_PUBLIC_PUBLIC_KEY!)
    }, []);
    
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
     const [formData, setFormData] = useState<FormData>({
        name: "",
        lastName: "",
        email: "",
        message: ""
    })

    const [loading, setLoading] = useState<boolean>(false)

    const formRef = useRef<HTMLFormElement>(null);

      const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        setLoading(true);

        if(!formData.name || !formData.lastName || !formData.email || !formData.message){
            setError("Please fill all inputs")
        }

        try {
        await emailjs.send(
            process.env.NEXT_PUBLIC_SERVICE_ID!, 
            process.env.NEXT_PUBLIC_TEMPLATE_ID!, 
            {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            },
            process.env.NEXT_PUBLIC_PUBLIC_KEY
        );

        setFormData({ name: "", lastName: "", email: "", message: "" }); 
        setSuccess("Yor message successfully sent")
        setTimeout(() => {
            setSuccess("")
        }, 3000)
        formRef.current?.reset();

        } catch (error) {
            console.error("ERROR:", error);
        } finally {
            setLoading(false);
            formData.name = ""
            formData.email = ""
            formData.message = ""
        }
    };

    
    return (

        <form onSubmit={handleSubmit} className={styles['form']}>
            <div className="w-[100%] flex flex-row gap-[20px]">
                <div className="w-[50%] nowrap mb-[20px]">
                    <label className="font-[RidleyGroteskBold, GeistVariableVF] mb-[5px] text-[#FFFFFF] text-[14px] font-[700]">{name}</label>
                    <input onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))} placeholder="Jon" value={formData.name} className={`${styles['small-input']} font-[RidleyGroteskRegular, GeistVariableVF] placeholder-[#FFFFFF54] bg-[#E45A31] py-[16px] px-[20px]`} type="text" />
                </div>
                <div className="w-[50%] nowrap mb-[20px]">
                    <label className="font-[RidleyGroteskBold, GeistVariableVF] mb-[5px] text-[#FFFFFF] text-[14px] font-[700]">{lastName}</label>
                    <input onChange={(e) => setFormData((prev) => ({ ...prev, lastName: e.target.value }))}  value={formData.lastName} placeholder="Doe" className={`${styles['small-input']} font-[RidleyGroteskRegular, GeistVariableVF] placeholder-[#FFFFFF54] bg-[#E45A31] py-[16px] px-[20px]`} type="text" />
                </div>
            </div>
            <div className="flex flex-col w-[100%] mb-[20px]">
                <label className="font-[RidleyGroteskBold, GeistVariableVF] mb-[5px] text-[#FFFFFF] text-[14px] font-[700]">{email}</label>
                <input  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}  value={formData.email} placeholder="example@mail.com" className=" font-[RidleyGroteskRegular, GeistVariableVF] placeholder-[#FFFFFF54] bg-[#E45A31] py-[16px] px-[20px]" type="text" />
            </div>
            <div className="flex flex-col w-[100%]">
                <label className="font-[RidleyGroteskBold, GeistVariableVF] mb-[5px] text-[#FFFFFF] text-[14px] font-[700]">{message}</label>
                <textarea  onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}  value={formData.message} placeholder="Your message" className="h-[160px] resize-none font-[RidleyGroteskRegular, GeistVariableVF] placeholder-[#FFFFFF54] bg-[#E45A31] py-[16px] px-[20px]" name="" id=""></textarea>
            </div>
            <div className="flex justify-between items-baseline mb-[40px] max-xs:flex-col max-xs:mb-[60px]">
                <div className={`${styles['socials2']}`}>
                    <Link href="https://www.instagram.com/erkinhereket_hj">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 0H7C5.14409 0.00198528 3.36477 0.740121 2.05245 2.05245C0.740121 3.36477 0.00198528 5.14409 0 7V19C0.00198528 20.8559 0.740121 22.6352 2.05245 23.9476C3.36477 25.2599 5.14409 25.998 7 26H19C20.8559 25.998 22.6352 25.2599 23.9476 23.9476C25.2599 22.6352 25.998 20.8559 26 19V7C25.998 5.14409 25.2599 3.36477 23.9476 2.05245C22.6352 0.740121 20.8559 0.00198528 19 0ZM13 19C11.8133 19 10.6533 18.6481 9.66658 17.9888C8.67988 17.3295 7.91085 16.3925 7.45672 15.2961C7.0026 14.1997 6.88378 12.9933 7.11529 11.8295C7.3468 10.6656 7.91824 9.59647 8.75736 8.75736C9.59647 7.91824 10.6656 7.3468 11.8295 7.11529C12.9933 6.88378 14.1997 7.0026 15.2961 7.45672C16.3925 7.91085 17.3295 8.67988 17.9888 9.66658C18.6481 10.6533 19 11.8133 19 13C18.9983 14.5908 18.3657 16.116 17.2408 17.2408C16.116 18.3657 14.5908 18.9983 13 19ZM20.5 7C20.2033 7 19.9133 6.91203 19.6666 6.7472C19.42 6.58238 19.2277 6.34811 19.1142 6.07403C19.0007 5.79994 18.9709 5.49834 19.0288 5.20736C19.0867 4.91639 19.2296 4.64912 19.4393 4.43934C19.6491 4.22956 19.9164 4.0867 20.2074 4.02882C20.4983 3.97094 20.7999 4.00065 21.074 4.11418C21.3481 4.22771 21.5824 4.41997 21.7472 4.66664C21.912 4.91332 22 5.20333 22 5.5C22 5.89782 21.842 6.27936 21.5607 6.56066C21.2794 6.84196 20.8978 7 20.5 7ZM17 13C17 13.7911 16.7654 14.5645 16.3259 15.2223C15.8864 15.8801 15.2616 16.3928 14.5307 16.6955C13.7998 16.9983 12.9956 17.0775 12.2196 16.9231C11.4437 16.7688 10.731 16.3878 10.1716 15.8284C9.61216 15.269 9.2312 14.5563 9.07686 13.7804C8.92252 13.0044 9.00173 12.2002 9.30448 11.4693C9.60723 10.7384 10.1199 10.1136 10.7777 9.67412C11.4355 9.2346 12.2089 9 13 9C14.0609 9 15.0783 9.42143 15.8284 10.1716C16.5786 10.9217 17 11.9391 17 13Z" fill="white"/>
                        </svg>
                    </Link>
                </div>
                <div className="max-xs:mt-[20px] max-xs:mb-[60px] max-xs:mx-auto">
                    <button disabled={loading} className="w-fit mt-[20px] bg-[#D44217] text-[#FFFFFF] flex flex-row items-center rounded-[100px]  py-[8px] pl-[30px] pr-[8px]">
                        <span className="text-[16px] font-[700] font-[AkzidenzGroteskBoldExtended, GeistVariableVF]">{loading ? footer("loading") : footer("submit")} </span>
                        <div className="bg-[#FFFFFF] rounded-[50%] ml-[20px] p-[10px]">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.3125 6.5V17.0625C20.3125 17.278 20.2269 17.4847 20.0745 17.637C19.9221 17.7894 19.7155 17.875 19.5 17.875C19.2845 17.875 19.0778 17.7894 18.9254 17.637C18.7731 17.4847 18.6875 17.278 18.6875 17.0625V8.46117L7.07481 20.0748C6.92235 20.2273 6.71557 20.313 6.49996 20.313C6.28436 20.313 6.07758 20.2273 5.92512 20.0748C5.77266 19.9224 5.68701 19.7156 5.68701 19.5C5.68701 19.2844 5.77266 19.0776 5.92512 18.9252L17.5388 7.3125H8.93746C8.72198 7.3125 8.51531 7.2269 8.36294 7.07452C8.21057 6.92215 8.12496 6.71549 8.12496 6.5C8.12496 6.28451 8.21057 6.07785 8.36294 5.92548C8.51531 5.7731 8.72198 5.6875 8.93746 5.6875H19.5C19.7155 5.6875 19.9221 5.7731 20.0745 5.92548C20.2269 6.07785 20.3125 6.28451 20.3125 6.5Z" fill="#D44217" />
                            </svg>
                        </div>
                    </button>
                </div>
                {success && <p className="text-green-500">{success}</p>}
                {error && <p className="text-red-600">{error}</p>}
            </div>
        </form>
    )
}