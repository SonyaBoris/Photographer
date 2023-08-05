import './burger.css';
import Link from "next/link";


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

const Burger = () => {

  return (
    <div>
      <button className="burger" aria-label="Открыть меню">
        <span></span>
      </button>
      <nav className='navigation'>
        {links.map((link) => (
          <Link key={link.id} href={link.url}>{link.title}</Link>
        ))}
      </nav>
    </div>
  );
}

export default Burger;