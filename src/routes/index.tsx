import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home'
import LazeLoft from 'pages/LazeLoft'
import FunkyBoxes from 'pages/FunkyBoxes'

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/laze-loft" element={<LazeLoft />} />
			<Route path="/funky-boxes" element={<FunkyBoxes />} />
		</Routes>
	)
}

export default Router
