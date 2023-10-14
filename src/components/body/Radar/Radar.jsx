import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts'
import { getPerformanceDataValue } from '../../../treatments/model/Performance'
let data = []

export default function RadarChartComponent({ performanceDataAll }) {
	// Je vérifie que performanceDataAll est bien rempli
	if (performanceDataAll) {
		data = getPerformanceDataValue(performanceDataAll)
		
	}

	// Je crée une fonction getKind qui va me permettre de récupérer les valeurs de kind dans data, les traduire en français pour le graphique et mettre dans le bon ordre pour le graphique
	const getKind = (data) => {
		let kind = data.kind
		//
		switch (kind) {
			case 1:
				return 'Intensité'
			case 2:
				return 'Vitesse'
			case 3:
				return 'Force'
			case 4:
				return 'Endurance'
			case 5:
				return 'Energie'
			case 6:
				return 'Cardio'
			default:
				return 'Valeur inconnue'
		}
	}

	return (
		<div className="radar-container">
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart outerRadius="80%" data={data} margin={{ top: 25, right: 25, bottom: 25, left: 25 }}>
					<PolarGrid radialLines={false} />
					<PolarAngleAxis dataKey={getKind} tick={{ fill: 'white', fontSize: 12 }} />
					<Radar dataKey="A" fill="#FF0101" fillOpacity={0.7} dot={false} animationEasing="ease-in-out" />
				</RadarChart>
			</ResponsiveContainer>
		</div>
	)
}