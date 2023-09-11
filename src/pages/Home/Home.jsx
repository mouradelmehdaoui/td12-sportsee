import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import VerticalNav from '../../components/VerticalNav/VerticalNav'
import HorizontalNav from '../../components/HorizontalNav/HorizontalNav'
import Dashboard from '../../components/Dashboard/Dashboard'
import { getMainData, getActivityData, getSessionsData, getPerformanceData } from '../../services/Api'


const Home = () => {
	// Je récupère l'id de l'utilisateur dans l'url
	const { userId } = useParams()

	// Je crée une constante navigate qui me permet de naviguer vers une autre page
	const navigate = useNavigate()

	// Je crée une  fonction checkUserId qui vérifie que l'id de l'utilisateur est bien 12 ou 18
	const checkUserId = (userId) => {
		if (userId !== '12' && userId !== '18') {
			// Si l'id de l'utilisateur n'est pas 12 ou 18, je navigue vers la page d'erreur en passant un message d'erreur dans le state
			navigate('/404', { state: { message: 'Invalid user Id' } })
		}
	}

	// Je crée une fonction qui vérifie que le state data est bien rempli et donc que les données de l'utilisateur ont bien été récupérées par Axios
	const checkData = (data) => {
		if (!data) {
			// Si le state data est vide, je navigue vers la page d'erreur en passant un message d'erreur dans le state
			navigate('/404', { state: { message: "Can't get data" } })
		}
	}

	// Je crée un state pour stocker les données de l'utilisateur sous forme d'objet
	const [data, setData] = useState({
		main: null,
		activity: null,
		sessions: null,
		performance: null,
	})

	useEffect(() => {
		const fetchData = async () => {
			// Je récupère les données principales de l'utilisateur en utilisant Promise.all() pour exécuter plusieurs requêtes en parallèle
			const [mainResponse, activity, sessions, performance] = await Promise.all([
				getMainData(userId),
				getActivityData(userId),
				getSessionsData(userId),
				getPerformanceData(userId),
			])

			// Je vérifie si le code d'erreur est 'ERR_NETWORK'
			if (mainResponse.errorCode === 'ERR_NETWORK') {
				// Si oui, je navigue vers la page d'erreur en passant un message d'erreur dans le state
				navigate('/404', { state: { message: "API_ERROR" } })
			}

			// Je mets à jour le state data avec les données récupérées
			setData({
				main: mainResponse.data,
				activity,
				sessions,
				performance,
			})
		}
		fetchData()

		// Je vérifie que l'id de l'utilisateur est bien 12 ou 18
		checkUserId(userId)
		// Je vérifie que le state data est bien rempli
		checkData(data)
		// eslint-disable-next-line
	}, [])

	// Je récupère les données principales de l'utilisateur en m'assurant que le state data.main est bien rempli et en utilisant les méthodes des classes de modélisation créees pour cela

	const firstName = data.main ? data.main.getFirstName() : ''
	const userNutritionData = data.main ? data.main.getKeyData() : []
	const todayScore = data.main ? data.main.getTodayScore() : 0
	const userActivity = data.activity ? data.activity.getSessions() : []
	const sessionLength = data.sessions ? data.sessions.getSessions() : []
	const performanceDataAll = data.performance ? data.performance.getData() : []

	return (
		// Je vérifie que le state data est bien rempli et je passe les données de l'utilisateur en props aux composants Dashboard, HorizontalNav et VerticalNav
		data && (
			<>
				<HorizontalNav />
				<VerticalNav />
				<Dashboard
					userId={userId}
					user={firstName}
					sessions={userActivity}
					nutritionData={userNutritionData}
					todayScore={todayScore}
					performanceData={performanceDataAll}
					sessionLength={sessionLength}
				/>
			</>
		)
	)
}

export default Home
