import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

type linkType = {
    href: string
}
export default function LearnMore({href}: linkType){
    const t = useTranslations("home")

    return (
        <Link href={href} className="transition-bg transition-border duration-300 ease-in-out bg-[#fff] hover:bg-[#C3C3C3]  font-[RidleyGroteskBold, GeistVariableVF] relative top-[50px] left-[0] font-[700]  text-[16px] uppercase py-[21px] px-[30px] boreder-[#9E9FA0] hover:border-transparent border-[1px] rounded-[100px]">{t("learnMoreBTn")}</Link>
    )
}