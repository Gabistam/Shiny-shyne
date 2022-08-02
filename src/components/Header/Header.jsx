import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css'

export default function Header() {
  return (
    <nav className="navbar">
      <Link to="/">
        <div className="navlink">Accueil</div>
      </Link>
      <Link to="/survey/42">
        <div className="navlink">Questionnaire</div>
      </Link>
    </nav>
  )
}
