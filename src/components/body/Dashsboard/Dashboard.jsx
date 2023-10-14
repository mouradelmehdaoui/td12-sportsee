import DailyActivity from "../DailyActivity/DailyActivity";
import Nutritionnels from "../Nutritions/Nutritionnels";
import SessionLength from "../SessionLength/SessionLength";
import Score from "../Score/Score";
import Radar from "../Radar/Radar";

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
        <p className="dashboard-header__user-congrats">
          Félicitations ! Vous avez explosé vos objectifs, hier 👏
        </p>
      </section>
      <DailyActivity sessions={sessions} />
      <section className="dashboard-metrics">
        <section className="chartsZone-container">
          <SessionLength sessionLength={sessionLength} />
          <Radar userId={userId} performanceDataAll={performanceData} />
          <Score todayScore={todayScore}></Score>
          <Nutritionnels nutritionData={nutritionData} />
        </section>
      </section>
    </main>
  );
}
