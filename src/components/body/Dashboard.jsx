export default function Dashboard({
	userId,
	user,
	sessions,
	nutritionData,
	todayScore,
	performanceData,
	sessionLength,
}) {
	return (
		<main className="dashboard-container">
			<section className="dashboard-header">
				<div className="dashboard-header__user-container">
					<h1>Bonjour</h1>
					<h2>{user}</h2>
				</div>
				<p className="dashboard-header__user-congrats">Félicitations ! Vous avez explosé vos objectifs, hier 👏</p>
			</section>
			<section className="dashboard-metrics">
					{/* userId={userId}
					activitySessions={sessions}
					todayScore={todayScore}
					performanceDataAll={performanceData}
					sessionLength={sessionLength} */}
				</section>
		</main>
	)
}