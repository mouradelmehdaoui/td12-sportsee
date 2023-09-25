import { Link } from 'react-router-dom'
import ActivityButton from './ActivityButton'

export default function NavSideBar() {

    let activities = ['zen', 'swim', 'bike', 'weight']
	return (
		<aside className="verticalContainer">
		<nav className="verticalButtons-container">
			{activities.map((activity, index) => {
				return (
					<Link key={index} to="/user/:userId">
						<ActivityButton key={index} activity={activity} />
					</Link>
				)
			})}
		</nav>
			<p className="copyright">Copyright, SportSee 2023</p>
		</aside>
	)
}
