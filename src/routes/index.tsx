import { Route, Routes, useLocation } from 'react-router-dom'
import Home from 'pages/Home'
import LazeLoft from 'pages/LazeLoft'
import FunkyBoxes from 'pages/FunkyBoxes'
import { PageTransition } from '@steveeeie/react-page-transition'

const Router = () => {
	const location = useLocation();
	return (
		<PageTransition
			preset={'roomToBottom'}
			transitionKey={location.pathname}
			enterAnimation={''}
			exitAnimation={''}
		>
			<Routes location={location}>
				<Route path="/" element={<Home />} />
				<Route path="/laze-loft" element={<LazeLoft />} />
				<Route path="/funky-boxes" element={<FunkyBoxes />} />
			</Routes>
		</PageTransition>
	)
}

export default Router
