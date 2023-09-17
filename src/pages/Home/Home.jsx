import { useNavigate } from 'react-router-dom'


const Home = () => {
	
	// Je crée une constante navigate qui me permet de naviguer vers une autre page
	const navigate = useNavigate()

	// Je crée une fonction qui vérifie que le state data est bien rempli et donc que les données de l'utilisateur ont bien été récupérées par Axios
	const checkData = (data) => {
		if (!data) {
			// Si le state data est vide, je navigue vers la page d'erreur en passant un message d'erreur dans le state
			navigate('/404', { state: { message: "Can't get data" } })
		}
	}




	return (
		// Je vérifie que le state data est bien rempli et je passe les données de l'utilisateur en props aux composants Dashboard, HorizontalNav et VerticalNav
		<div className="errorPage-container">
Home page
		</div>
	)
}

export default Home
