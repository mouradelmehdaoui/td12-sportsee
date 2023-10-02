import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'

export default function Score({ todayScore }) {
	// Je crée une constante scoreAngle qui me permet de calculer l'angle du score du jour à afficher dans le graphique radial
	const scoreAngle = parseInt(todayScore * 360 + 90)
	const scoreValue = parseInt(todayScore * 100)

	// Je crée un tableau data qui contient les données à afficher et la couleur dans le graphique radial
	const data = [
		{
			todayScore: scoreAngle,
			fill: '#ff0000',
		},
	]

	return (
		<div className="score-container">
			<span className="score-container__title">Score</span>
			<div className="scoreLegend-container">
				<div className="scoreLegend-container__scoreValue">{scoreValue}%</div>
				<div className="scoreLegend-container__scoreText">de votre objectif</div>
			</div>
			<ResponsiveContainer width="100%" height="100%">
				<RadialBarChart
					innerRadius="80%"
					outerRadius="80%"
					margin={{ top: 50 }}
					barSize={10}
					data={data}
					startAngle={90}
					endAngle={scoreAngle}
				>
					<RadialBar cornerRadius={5} dataKey="todayScore" />
				</RadialBarChart>
			</ResponsiveContainer>
		</div>
	)
}