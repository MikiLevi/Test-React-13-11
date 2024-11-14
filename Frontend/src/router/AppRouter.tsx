import { Route, RouterProvider, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import RegisterPage from "../pages/RegisterPage"
import DashBord from "../pages/DashBord"
import { StorePage } from "../pages/StorePage"

const AppRouter = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<DashBord />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/Login" element={<HomePage />} />
				<Route path='/missiles' element={<StorePage name={""} description={""} speed={0} intercepts={0} price={0} />}/>
			</Routes>
		</div>
	)
}

export default AppRouter