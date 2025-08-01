'use client'

import styles from "./style.module.css"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { useState, useEffect, useRef } from "react"

type ServiceType = {
    title: string,
    desc: string,
    expandedHeight: number
}


export default function Services() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const t = useTranslations("")
    const services = t.raw('services') as ServiceType[]
    const [isMobile, setIsMobile] = useState(false)
    const containerRef = useRef<HTMLDivElement | null>(null)
   
    useEffect(() => {
        const checkWidth = () => {
            setIsMobile(window.innerWidth <= 835)
        }

        checkWidth()
        window.addEventListener("resize", checkWidth)

        return () => window.removeEventListener("resize", checkWidth)
    }, [])


    return (

        <div ref={containerRef} className={`section ${styles["services-container"]}`} >
            <span></span>
            <ul className={styles['services']}>
                {services.map((service, index) => (
                    <motion.li
                        key={index}
                        className={styles["service_content"]}
                        style={{ backgroundImage: `url(/images/services/${index + 1}.jpg)` }}
                        initial={{ height: 200 }}
                        animate={{
                            height: !isMobile && hoveredIndex === index ? service.expandedHeight : 200
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 230,
                            damping: 15,
                            mass: 0.5,
                        }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className="w-[100%] p-[20px] h-[400px] max-xs:h-[100%]" style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.7) 100%)' }}>
                            <div className={styles['index-container']}>
                                <span className={styles.indexing}>{index + 1}</span>
                            </div>
                            <h1 className={styles.title}>{service.title}</h1>
                            <p className={`${styles.desc}`}>{service.desc}</p>
                        </div>
                    </motion.li>
                ))}
            </ul>
            <span></span>
        </div>
    )
}