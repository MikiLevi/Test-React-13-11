import { AuthContext } from "../provider/UserProvider"

const RegisterPage = () => {
	return (
		<div>
			<h1>Welcome {AuthContext?.user}</h1>
			<div className="card-home">
				<h2>Register 🤞🤞🤞</h2>
				<div className="form-group">
					<label htmlFor="user">User Name: </label> <br />
					<input required id="user" type="text" />
				</div>
				<div className="from-group">
					<label htmlFor="password">Password: </label> <br />
					<input required id="password" type="text" />
				</div>
				<div className="from-group">
					<label htmlFor="org">Organization: </label> <br />
					<select name="org"></select>
				</div>
				<div className="from-group">
					<label htmlFor="location">Location: </label> <br />
					<select name="location"></select>
				</div>
				<button type="submit">Login</button>
			</div>
		</div>
	)
}

export default RegisterPage