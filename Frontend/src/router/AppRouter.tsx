import { Route, RouterProvider, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import RegisterPage from "../pages/RegisterPage"
import DashBord from "../pages/DashBord"

const AppRouter = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<DashBord />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/Login" element={<HomePage />} />

			</Routes>
		</div>
	)
}

export default AppRouter