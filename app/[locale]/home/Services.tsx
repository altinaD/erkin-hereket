'use client'

import styles from "./style.module.css"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { useState, useEffect, useRef } from "react"
// import { Variants } from "framer-motion"

type ServiceType = {
    title: string,
    desc: string,
    expandedHeight: number
}

// interface Position {
//     x: number,
//     y: number
// }

export default function Services() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const t = useTranslations("")
    const services = t.raw('services') as ServiceType[]

    // const [position, setPosition] = useState<Position>({ x: 0, y: 0 })
    const containerRef = useRef<HTMLDivElement | null>(null)
    // const [isMouseInside, setIsMouseInside] = useState<boolean>(false)

    useEffect(() => {
        // const handleMouseMove = (e: MouseEvent) => {
        //     if (containerRef.current) {
        //         const rect: DOMRect = containerRef.current.getBoundingClientRect()
        //         const x: number = e.clientX - rect.left
        //         const y: number = e.clientY - rect.top;

        //         if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        //             setPosition({ x, y })
        //         }
        //     }
        // }
        // const handleMouseEnter = () => {
        //     setIsMouseInside(true)
        // }
        // const handleMouseLeave = () => {
        //     setIsMouseInside(false)
        // }

        // const container = containerRef.current

        // if (container) {
        //     container.addEventListener('mousemove', handleMouseMove)
        //     container.addEventListener('mouseenter', handleMouseEnter);
        //     container.addEventListener('mouseleave', handleMouseLeave);


        //     return () => {
        //         container.removeEventListener('mousemove', handleMouseMove)
        //         container.removeEventListener('mouseenter', handleMouseEnter);
        //         container.removeEventListener('mouseleave', handleMouseLeave);
        //     }
        // }
    }, [])



    // const variants: Variants = {
    //     default: {
    //         opacity: 1,
    //         height: 60,
    //         width: 60,
    //         transition: {
    //             type: "spring",
    //             mass: 0.6
    //         }
    //     }
    // }

    return (

        <div ref={containerRef} className={`section ${styles["services-container"]}`} >
            {/* {isMouseInside && (
                <motion.div
                    className={styles.follower}
                    variants={variants}
                    animate={{ x: position.x - 50, y: position.y - 30 }}
                />
            )} */}
            <ul className={styles['services']}>
                {services.map((service, index) => (
                    <motion.li
                        key={index}
                        className={styles["service_content"]}
                        style={{ backgroundImage: `url(/images/services/${index + 1}.jpg)` }}
                        initial={{ height: 200 }}
                        animate={{ height: hoveredIndex === index ? service.expandedHeight : 200 }}
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
        </div>
    )
}