import { Route, Routes, useLocation } from 'react-router-dom'
import Home from 'pages/Home'
import LazeLoft from 'pages/LazeLoft'
import FunkyBoxes from 'pages/FunkyBoxes'
import { PageTransition } from '@steveeeie/react-page-transition'

const Router = () => {
	const location = useLocation()
	console.log(location)
	return (
		// <PageTransition
		// 	preset="moveToLeftFromRight"
		// 	transitionKey={location.pathname}
		// 	enterAnimation={''}
		// 	exitAnimation={''}
		// >
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/laze-loft" element={<LazeLoft />} />
				<Route path="/funky-boxes" element={<FunkyBoxes />} />
			</Routes>
		// </PageTransition>
	)
}

export default Router
