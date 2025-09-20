import React from 'react';
import './Header.css';

const Header = () => (
  <header>
    <nav className="navbar">
      <div className="profile">
        <img
          src="https://media.licdn.com/dms/image/v2/D4D03AQHHlMXA3kHYDg/profile-displayphoto-shrink_800_800/B4DZVINyb0G8Ac-/0/1740673332243?e=1761177600&v=beta&t=hHAuLj5iUSopqR6JsyNJiZJINxh0zrXAHZtMNSxO6Fo0"
          alt="profile_picture"
        />
      </div>
      <ul>
        <li>
          <a href="#about">Sobre</a>
        </li>
        <li>
          <a href="#experience">Experiência</a>
        </li>
        <li>
          <a href="#skills">Habilidades</a>
        </li>
        <li>
          <a href="#projects">Projetos</a>
        </li>
      </ul>
    </nav>
  </header>
);
export default Header;
