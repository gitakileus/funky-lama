import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
	DiscordIcon,
	MenuCloseIcon,
	MenuOpenIcon,
	MGIcon,
	TwitterIcon,
} from 'components/SVGIcons'

const menuLinks = [
	{
		text: 'HOME',
		link: '/',
	},
	{
		text: 'LAZE LOFT',
		link: '/laze-loft',
	},
	{
		text: 'FUNKY MAP',
		link: '/funky-map',
	},
	{
		text: 'WHITEPAPER',
		link: '/white-paper',
	},
]

const Header = () => {
	const [open, setOpen] = useState(false)
	const location = useLocation().pathname

	return (
		<header className="header">
			<div className="header-content">
				<div className="header-left">
					<Link to="/">
						<div className="logo">
							<img src="/img/logo.svg" alt="" />
						</div>
					</Link>
				</div>
				<div className="header-right">
					<nav>
						<ul>
							{menuLinks.map((menuLink, index) => (
								<li
									key={index}
									className={`${location === menuLink.link ? 'active' : 'menu-item'}`}
								>
									<Link to={menuLink.link}>{menuLink.text}</Link>
								</li>
							))}
						</ul>
					</nav>
					<div className="social-links">
						<ul>
							<li>
								<a href="https://magiceden.com">
									<div className="social-btn">
										<MGIcon />
									</div>
								</a>
							</li>
							<li>
								<a href="https://magiceden.com">
									<div className="social-btn">
										<TwitterIcon />
									</div>
								</a>
							</li>
							<li>
								<a href="https://magiceden.com">
									<div className="social-btn">
										<DiscordIcon />
									</div>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="mobile-menu">
					<button className="hamburger" onClick={() => setOpen(!open)}>
						{!open ? <MenuOpenIcon /> : <MenuCloseIcon />}
					</button>
					{open ? (
						<div className="mobile-nav">
							<nav>
								<ul>
									{menuLinks.map((menuLink, index) => (
										<li key={index}>
											<Link
												to={menuLink.link}
												className={`${location === menuLink.link && 'active'}`}
											>
												{menuLink.text}
											</Link>
										</li>
									))}
								</ul>
							</nav>
							<div className="social-links">
								<ul>
									<li>
										<a href="https://magiceden.com">
											<div className="social-btn">
												<MGIcon />
											</div>
										</a>
									</li>
									<li>
										<a href="https://magiceden.com">
											<div className="social-btn">
												<TwitterIcon />
											</div>
										</a>
									</li>
									<li>
										<a href="https://magiceden.com">
											<div className="social-btn">
												<DiscordIcon />
											</div>
										</a>
									</li>
								</ul>
							</div>
						</div>
					) : (
						<></>
					)}
				</div>
			</div>
		</header>
	)
}

export default Header
