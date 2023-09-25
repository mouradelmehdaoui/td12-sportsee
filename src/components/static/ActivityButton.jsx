import zen from '../../assets/zen-icon.svg'
import swim from '../../assets/swim-icon.svg'
import bike from '../../assets/bike-icon.svg'
import weight from '../../assets/weight-icon.svg'

export default function ActivityButton({ activity }) {
	let activityIcon
	// Je crée une condition pour afficher l'icône correspondant à l'activité
	if (activity === 'zen') {
		activityIcon = zen
	} else if (activity === 'swim') {
		activityIcon = swim
	} else if (activity === 'bike') {
		activityIcon = bike
	} else if (activity === 'weight') {
		activityIcon = weight
	}

	return (
		<div className="activity-button">
			<img src={activityIcon} alt={activity} />
		</div>
	)
}
