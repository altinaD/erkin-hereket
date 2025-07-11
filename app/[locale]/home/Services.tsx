'use client'

import styles from "./styles/styles.module.css"
// import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  type serviceType = {
    id: string,
    title: string,
    categories: string,
    expandedHeight: number,
    link?: string
  }

  const t = useTranslations("homePage");
  const services = t.raw('services') as serviceType[]
  interface Position {
    x: number,
    y: number
  }


  const [position, setPosition] = useState<Position>({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [isMouseInside, setIsMouseInside] = useState<boolean>(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect: DOMRect = containerRef.current.getBoundingClientRect()
        const x: number = e.clientX - rect.left
        const y: number = e.clientY - rect.top;

        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
          setPosition({ x, y })
        }
      }
    }

    const handleMouseEnter = () => {
      setIsMouseInside(true)
    }

    const handleMouseLeave = () => {
      setIsMouseInside(false)
    }

    const container = containerRef.current

    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);


      return () => {
        container.removeEventListener('mousemove', handleMouseMove)
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    }

  }, [])

  type variantsType = {
    default: {
      opacity: number,
      height: number,
      width: number,
      transition: {
        type: string,
        mass: number
      }
    }
  }

  const variants: variantsType = {
    default: {
      opacity: 1,
      height: 60,
      width: 60,
      transition: {
        type: "spring",
        mass: 0.6
      }
    }
  };


  return (
    <>
      <div className='section'>
        <h1 className={styles['home-section_title']}>{t('servicesTitle')}</h1>
      </div>
      <div ref={containerRef} className={`section ${styles["services-container"]}`} >
        {isMouseInside && (
          <motion.div
            className={styles.follower}
            variants={variants}
            animate={{ x: position.x - 50, y: position.y - 30 }}
          />
        )}
        <ul className={styles['services']}>
          {services.map((service, index) => (
            <motion.li
              key={service.id}
              className={styles["service_content"]}
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
              <span className={styles.indexing}>{service.id}</span>
              <h1 className={styles.title}>{service.title}</h1>
              <p className={styles.categories}>
                <p>{service.categories}</p>
                {service.link && (
                  <Link href="https://caspyconcept.com" className={styles['go-to-link']}>
                    <span className={styles['go-to-link_text']}>Go to Caspy Concept</span>
                    <svg className={styles['go-to-link_arrow']} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F7F7F7" viewBox="0 0 256 256"><path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path></svg>
                  </Link>
                )}
              </p>
            </motion.li>
          ))}
          <li className={styles.space}>
            <div className={styles.spaceD}></div>
          </li>
        </ul>
      </div>
    </>
  );
}
