export default class Activity {
	constructor(data) {
		this.sessions = data.sessions
	}

	getSessions() {
		return this.sessions
	}

	getDates() {
		const dates = this.sessions.map((session) => session.day)
		return dates
	}
}
