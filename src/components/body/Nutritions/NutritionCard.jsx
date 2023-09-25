import calory from '../../../assets/calory-icon.svg'
import protein from '../../../assets/protein-icon.svg'
import glucid from '../../../assets/glucid-icon.svg'
import lipid from '../../../assets/lipid-icon.svg'

// Je crée un objet qui contient les propriétés de chaque type de nutrition
const TYPES = {
	calorieCount: { color: 'red', unit: 'kCal', typeName: 'Calories', icon: calory, hoverColor: 'rgba(255, 0, 0, 0.4)' },
	proteinCount: {
		color: 'blue',
		unit: 'g',
		typeName: 'Protéines',
		icon: protein,
		hoverColor: 'rgba(74, 184, 255, 0.4)',
	},
	carbohydrateCount: {
		color: 'yellow',
		unit: 'g',
		typeName: 'Glucides',
		icon: glucid,
		hoverColor: 'rgba(249, 206, 35, 0.4)',
	},
	lipidCount: { color: 'pink', unit: 'g', typeName: 'Lipides', icon: lipid, hoverColor: 'rgba(253, 81, 129, 0.4)' },
}

// Je récupère les props type et amount de NutritionZone.jsx
export default function NutritionCard({ type, amount }) {
	// Je crée une constante nutritionType qui récupère les propriétés de TYPES en fonction du type de nutrition
	const nutritionType = TYPES[type]

	return (
		// Je crée une carte qui affiche le type de nutrition, la quantité et l'unité et modifie la couleur de fond en fonction du type de nutrition
		<article className="nutrition-card" style={{ '--hover-color': nutritionType.hoverColor }}>
			<div className="nutrition-card-infos">
				<div className={`nutrition-card-infos__button ${nutritionType.color}`}>
					<img src={nutritionType.icon} alt={nutritionType} />
				</div>
				<div className="nutrition-card-infos__content">
					<h3 className="amount-unit">
						{amount}
						{nutritionType.unit}
					</h3>
					<span className="type-name">{nutritionType.typeName}</span>
				</div>
			</div>
		</article>
	)
}