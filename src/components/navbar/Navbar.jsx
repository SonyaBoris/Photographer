"use client"

import Link from "next/link"
import styles from "./page.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import Burger from "../Burger/burger";
import MenuByBurger from "../MenuByBurger/MenuByBurger";
import { useState } from "react"


const links = [
  {
    id: 1,
    title: "Главная",
    url: "/",
  },
  {
    id: 2,
    title: "Портфолио",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Прайс",
    url: "/prise",
  },
  {
    id: 4,
    title: "Контакты",
    url: "/contact",
  },

];

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false)
  return (
    <div className={styles.container}>
      <Link href='/' className={styles.logo}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24">
          <path fill="#FBCA1F" d="M4 4h3l2-2h6l2 2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m8 3a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5m0 2a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3Z" />
        </svg>
        <div className={styles.logoText}>БорисоваФото</div>
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        <nav className={styles.navigation}>
          {links.map((link) => (
            <Link key={link.id} href={link.url}>{link.title}</Link>
          ))}
        </nav>
        <Burger menu={menuActive} setActive={setMenuActive}/> 
        <MenuByBurger active={menuActive} />       
      </div>
    </div>
  )
}

export default Navbar