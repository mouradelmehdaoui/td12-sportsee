import axios from 'axios'
import MainData from '../model/MainData'
import Activity from '../model/Activity'
import Sessions from '../model/Session'
import Performance from '../model/Performance'
import environment from '../../environment/environment'

const HOST = environment.host;

export const getMainData = async (user) => {
	let errorCode = null
	// Je précise l'url de l'API pour récupérer les données principales de l'utilisateur
	let mainDataUrl = `${HOST}/user/${user}`

	

	try {
		const userMain = await axios.get(mainDataUrl)
		const userMainData = new MainData(userMain.data.data)
		// Je retourne un objet avec les données de l'utilisateur et le code d'erreur
		return { data: userMainData, errorCode }
	} catch (error) {
		if (error.code === 'Network Error') {
			errorCode = error.code
			console.log('problème API, code :', errorCode)
		}
		return { data: null, errorCode }
	}
}

export const getActivityData = async (user) => {
	// Je précise l'url de l'API pour récupérer les données d'activité de l'utilisateur
	let activityDataUrl = `${HOST}/user/${user}/activity`

	try {
		const userActivity = await axios.get(activityDataUrl)
		const userActivityData = new Activity(userActivity.data.data)
		return userActivityData
	} catch (error) {
		console.log(error)
	}
}

export const getSessionsData = async (user) => {
	// Je précise l'url de l'API pour récupérer les données de sessions de l'utilisateur
	let sessionsDataUrl = `${HOST}/user/${user}/average-sessions`

	try {
		const userSessions = await axios.get(sessionsDataUrl)
		const userSessionsData = new Sessions(userSessions.data.data)
		return userSessionsData
	} catch (error) {
		console.log(error)
	}
}

export const getPerformanceData = async (user) => {
	// Je précise l'url de l'API pour récupérer les données de performance de l'utilisateur
	let performanceDataUrl = `${HOST}/user/${user}/performance`

	try {
		const userPerformance = await axios.get(performanceDataUrl)

		const userPerformanceData = new Performance(userPerformance.data.data)
		return userPerformanceData
	} catch (error) {
		console.log(error)
	}
}