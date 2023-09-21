export default class Performance {
	constructor(data) {
		this.data = data.data
	}

	getData() {
		return this.data
	}
}

// Je crée une fonction getPerformanceDataValue qui va me permettre de récupérer les valeurs de data.kind et data.value afin de pouvoir les utiliser dans le radar chart
export const getPerformanceDataValue = (data) => {
	let dataArray = []

	for (let i = 0; i < data.length; i++) {
		dataArray.push({
			kind: data[i].kind,
			A: data[i].value,
		})
	}

	// Je récupère la valeur maximale de data.value afin de pouvoir l'utiliser dans le radar chart
	let maxDataValue = Math.max(...dataArray.map((item) => item.A))
	for (let j = 0; j < dataArray.length; j++) {
		// Je crée une nouvelle propriété fullMark dans chaque objet de dataArray afin de pouvoir y stocker la valeur maximale de data.value
		dataArray[j].fullMark = maxDataValue
	}
	return dataArray
}