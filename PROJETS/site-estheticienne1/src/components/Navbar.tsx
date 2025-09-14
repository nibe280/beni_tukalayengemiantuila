// src/components/Navbar.tsx
import React from "react";
import "./Navbar.css";


interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Accueil", href: "#hero" },
  { label: "Prestations", href: "#services" },
  { label: "Galerie", href: "#gallery" },
  { label: "Avis", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">✨ Esthétique</div>
      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
