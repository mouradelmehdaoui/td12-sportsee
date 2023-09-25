import NutritionCard from './NutritionCard'

export default function Nutritionnels({ nutritionData }) {
	// Je récupère les types de données nutritionnelles pour les passer en props au composant NutritionCard
	let nutritionTypes = Object.keys(nutritionData)

	return (
		<aside className="nutrition_container">
			{nutritionTypes.map((type, index) => (
				<NutritionCard key={index} type={type} amount={nutritionData[type]} />
			))}
		</aside>
	)
}