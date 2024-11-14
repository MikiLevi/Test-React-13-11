import { useContext, useEffect, useState } from "react";
import {  NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/UserProvider";


export default function HomePage() {
	const { user, login } = useContext(AuthContext) ?? {};

	const [password, setPassword] = useState("");
	const [name, setName] = useState("");

	const [error, setError] = useState("");
	

	const navigate = useNavigate();


	useEffect(() => {
	console.log(user);
	}, [user]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			 await login!(name, password);
	navigate("/");
		} catch (err) {
			setError("אירעה שגיאה בהתחברות. אנא נסה שנית");
			setPassword("");
		
	}
}
	return (
		<>
			<div className="home-page">
				<form onSubmit={handleSubmit}>
					<div className="card-home">
						<h2>Login 👋👋👋</h2>
						<div className="form-group">
							<label htmlFor="user">User Name: </label> <br />
							<input required id="user" type="text" onChange={(e) => setName(e.target.value)} />
						</div>
						<div className="from-group">
							<label htmlFor="password">Password: </label> <br />
							<input required id="password" type="text" onChange={(e) => setPassword(e.target.value)} />
						</div>
						<button type="submit">Login</button>
					</div>
				</form>
			</div>
			<NavLink to={"/register"}>To Register</NavLink>
		</>
	)
}

