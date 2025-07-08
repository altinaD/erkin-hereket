export const navConfig = {
    about: { path: "/about" },
    services: { path: "/services" },
    cranes: { path: "/cranes" },
    projects: { path: "/projects" },
    contact: { path: "/contact" }
} as const

// Map every possible translated label to canonical route key
export const labelToKey: Record<string, keyof typeof navConfig> = {

    "About Us": "about",
    "О нас": "about",
    "Biz barada": "about",

    "Services": "services",
    "Hyzmatlar": "services",
    "Услуги": "services",

    "Our cranes": "cranes",
    "Kranlarymyz": "cranes",
    "Наши краны": "cranes",
  
    "Projects": "projects",
    "Taslamalar": "projects",
    "Проекты": "projects",

    "Contact Us":   "contact",
    "Контакты":     "contact",
    "Habarlaşmak":  "contact",

}
