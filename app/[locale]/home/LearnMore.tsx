import { Link } from "@/i18n/navigation";
type linkType = {
    href: string
}
export default function LearnMore({href}: linkType){
    return (
        <Link href={href} className="font-[RidleyGroteskBold] relative top-[50px] left-[100px] font-[700]  text-[16px] uppercase py-[21px] px-[30px] boreder-[#9E9FA0] border-[1px] rounded-[100px]">Learn more</Link>
    )
}