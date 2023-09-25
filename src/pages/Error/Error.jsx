// J'utilise le hook useLocation pour récupérer le message d'erreur dans le state
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import React  from "react";

// Je crée une page d'erreur qui s'affiche si la page n'existe pas
const Error404 = () => {
  // Je récupère le message d'erreur dans le state
  const location = useLocation();
  // Je crée une constante message qui affiche un message différent selon le message d'erreur
  const message =
    location.state.message === "API_ERROR"
      ? "Le serveur ne répond pas, merci d'essayer plus tard."
      : "La page que vous demandez n'existe pas.";

  return (
    <main className="error-404">
      <h1 className="error-404__title error-404__text">404</h1>
      <h2 className="error-404__sub-title error-404__text">{message}</h2>

      <Link to="/" className="error-404__link">
        Retourner sur la page d’accueil
      </Link>
    </main>
  );
};

export default Error404;
