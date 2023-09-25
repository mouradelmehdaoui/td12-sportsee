import { Link } from "react-router-dom";
import logo from "../../assets/big-logo.svg";

export default function NavHeader() {
  let horizontal_links = ["Accueil", "Profil", "Réglages", "Communauté"];
  return (
    <header className="horizontalContainer">
      <div className="logo-container">
        {/* Je crée le composant Logo qui sera aussi un lien vers la page principale */}
        <Link to="/">
          <img src={logo} alt="logo de SportSee" className="logo" />
        </Link>
      </div>
      <nav className="horizontal_links">
        {horizontal_links.map((link, index) => (
          // Je crée un lien pour chaque élément de la Navigation horizontale et je précise que le lien Accueil renvoie vers la page d'accueil
          <Link key={index} to={link === "Accueil" ? "/" : "/user/:userId"}>
            {link}
          </Link>
        ))}
      </nav>
    </header>
  );
}
