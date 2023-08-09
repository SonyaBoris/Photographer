import Link from "next/link";

import './menu.css';


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

const MenuByBurger = ({active}) => {
  return (   
      <nav className={active ? 'menu active' : 'menu'}>
        {links.map((link) => (
          <Link key={link.id} href={link.url}>{link.title}</Link>
        ))}
      </nav>   
  );
}

export default MenuByBurger;