import React from 'react'
import './burger.css';


const Burger = ({ menu, setActive }) => {
  return (
    <div>
      <button className='burger' aria-label="Открыть меню" onClick={() => setActive(!menu)}>
        <span></span>
      </button>
    </div>
  );
}

export default Burger;