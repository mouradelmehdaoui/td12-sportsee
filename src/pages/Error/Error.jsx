import VerticalNav from '../../components/VerticalNav/VerticalNav'
import HorizontalNav from '../../components/HorizontalNav/HorizontalNav'
// J'utilise le hook useLocation pour récupérer le message d'erreur dans le state
import { useLocation } from 'react-router-dom'

// Je crée une page d'erreur qui s'affiche si la page n'existe pas
const Error = () => {
	// Je récupère le message d'erreur dans le state
	const location = useLocation()
	// Je crée une constante message qui affiche un message différent selon le message d'erreur
	const message =
		location.state.message === 'API_ERROR'
			? "Le serveur ne répond pas, merci d'essayer plus tard."
			: "La page que vous demandez n'existe pas."

	return (
		<div className="errorPage-container">
			<HorizontalNav />
			<VerticalNav />

			<section className="errorPage">
				<span className="errorPage__title">Oups...</span>
				<span className="errorPage__text">{message}</span>
			</section>
		</div>
	)
}

export default Error
