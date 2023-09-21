export default class MainData {
	constructor(data) {
		this.data = data
		this.userInfos = data.userInfos
		this.firstName = this.userInfos.firstName
		this.todayScore = data.todayScore
		this.keyData = data.keyData
	}

	getFirstName() {
		return this.firstName
	}

	getTodayScore() {
		return this.todayScore
	}

	getKeyData() {
		return this.keyData
	}
}