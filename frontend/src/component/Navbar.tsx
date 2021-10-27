/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="header">
      <div className="container container--narrow">
        <Link to="/projects" className="header__logo">
          <img src="/styles/images/logo.svg" alt="DevSearch Logo" />
        </Link>

        <nav className="header__nav">
          <input type="checkbox" id="responsive-menu" />
          <label htmlFor="responsive-menu" className="toggle-menu">
            <span>Menu</span>
            <div className="toggle-menu__lines" />
          </label>
          <ul className="header__menu">
            <li className="header__menuItem"><a href="{% url 'profiles' %}">Developers</a></li>
            <li className="header__menuItem"><a href="{% url 'projects' %}">Projects</a></li>
            <li className="header__menuItem"><Link to="/projectForm">Add Project</Link></li>

            {/* {% if request.user.is_authenticated %} */}
            <li className="header__menuItem"><a href="{% url 'inbox' %}">Inbox</a></li>
            <li className="header__menuItem"><a href="{% url 'account' %}">Account</a></li>
            <li className="header__menuItem"><a href="{% url 'logout' %}" className="btn btn--sub">Logout</a></li>
            {/* {% else %} */}
            <li className="header__menuItem"><a href="{% url 'login' %}" className="btn btn--sub">Login/Sign Up</a></li>
            {/* {% endif %} */}
          </ul>
        </nav>
      </div>
    </header>
  );
}
