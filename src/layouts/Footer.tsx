import { ReactComponent as MoneyIcon } from '@material-icons/svg/svg/attach_money/outline.svg'
import { ReactComponent as PaidIcon } from '@material-icons/svg/svg/paid/outline.svg'
import { ReactComponent as BoxIcon } from '@material-icons/svg/svg/inventory_2/outline.svg'
import { ReactComponent as CategoryIcon } from '@material-icons/svg/svg/category/outline.svg'
import { Link, useLocation } from 'react-router-dom'

export default function Footer() {
	const location = useLocation()
	console.log(location.pathname)
	return (
		<footer>
			<ul>
				{/* <li>
					<Link href='/term-conditions'>Terms and Conditions</Link>
				</li> */}
			
				{location.pathname === '/laze-loft' ? (
					<li  className="quick-link-sm">
						<p className='title'>2022 Funky LIamas</p>
						<div>
							<Link to="/laze-earn">
								<MoneyIcon />
								<p>Laze and Earn</p>
							</Link>
							<Link to="/raid-earn">
								<PaidIcon />
								<p>Raid and Earn</p>
							</Link>
							<Link to="/funky-boxes">
								<BoxIcon />
								<p>Funky Boxes</p>
							</Link>
							<Link to="/funky-slots">
								<CategoryIcon />
								<p>Funky Slots</p>
							</Link>
						</div>
						</li>
					) : (
						<li>
							<p className='title'>2022 Funky LIamas</p>
						</li>
					)}
				{location.pathname === '/laze-loft' && (
					<div className="quick-link">
						<Link to="/laze-earn">
							<MoneyIcon />
							<p>Laze and Earn</p>
						</Link>
						<Link to="/raid-earn">
							<PaidIcon />
							<p>Raid and Earn</p>
						</Link>
						<Link to="/funky-boxes">
							<BoxIcon />
							<p>Funky Boxes</p>
						</Link>
						<Link to="/funky-slots">
							<CategoryIcon />
							<p>Funky Slots</p>
						</Link>
					</div>
				)}
				{/* <li>
					<Link href='/policy'>Privacy Policy</Link>
				</li> */}
			</ul>
		</footer>
	)
}
