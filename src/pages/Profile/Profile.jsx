import { useNavigate } from 'react-router-dom'


import logo from '../../assets/user_btn.png'

const Profile = () => {
	const navigate = useNavigate()


	return (
		<div className="userSelection-container">

			<nav className="userSelection">
				<h1 className="userSelection__title">Choix de l'utilisateur</h1>
				<ul className="userSelection__list">
					{/* Je crée un lien vers la page de l'utilisateur en utilisant le composant Link de React Router */}
					<li className="userSelection__list-item" onClick={() => navigate('/user/12')}>
						<span className="userName">Karl</span>
						<img className="userSelection__list-item__btn" src={logo} alt="user logo" />
					</li>
					<li className="userSelection__list-item" onClick={() => navigate('/user/18')}>
						<span className="userName">Cecilia</span>
						<img src={logo} alt="user logo" className="userSelection__list-item__btn" />
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Profile
