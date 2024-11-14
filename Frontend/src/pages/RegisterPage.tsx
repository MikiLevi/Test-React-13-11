import { useState } from "react";

const RegisterPage = () => {
	const [error, setError] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [org, setOrg] = useState("");
	const [loction, setLoction] = useState("")

	const register = async (name: string, password: string, org: string, loction: string): Promise<boolean | void> => {
		try {
			
			const response = await fetch("http://localhost:5555/user/register", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				credentials: "include",
				body: JSON.stringify({ name, password, org, loction }),
			})

			const data = await response.json();

			if (response.ok) {
				console.log(data);
				return true;
			}
		} catch (error) {
			return false
		}
	}


	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		await register(name, password, org, loction);
		console.log(name, password, org, loction);
		

	}
	return (
		<div>
			<h1>Welcome</h1>
			<form onSubmit={handleSubmit} >
				<div className="card-home">
					<h2>Register 🤞🤞🤞</h2>
					<div className="form-group">
						<label htmlFor="user">User Name: </label> <br />
						<input required id="user" type="text" onChange={(e) => setName(e.target.value)} />
					</div>
					<div className="from-group">
						<label htmlFor="password">Password: </label> <br />
						<input required id="password" type="text" onChange={(e) => setPassword(e.target.value)} />
					</div>
					<div className="from-group">
						<label htmlFor="org">Organization: </label> <br />
						<select name="org" value={org} onChange={(e) => setOrg(e.target.value)}>
							<option  value="IDF">IDF</option>
							<option  value="Hezbollah">Hezbollah</option>
							<option  value="Hamas">Hamas</option>
							<option  value="Irgc">Irgc</option>
							<option  value="Houthis">Houthis</option>
						</select>
					</div>
					<div className="from-group">
						<label htmlFor="location">Location: </label> <br />
						<select name="location" value={loction} onChange={(e) => setLoction(e.target.value)}>
							<option value="North">North</option>
							<option value="South">South</option>
							<option value="Center">Center</option>
							<option value="West_Bank">West Bank</option>
						</select>
					</div> 
					<button type="submit">Register</button>
				</div>
			</form>
		</div >
	)
}



export default RegisterPage