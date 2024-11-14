
const HomePage = () => {
	return (
		<div className="home-page">
			<div className="card-home">
				<h2>Login 👋👋👋</h2>
				<div className="form-group">
					<label htmlFor="user">User Name: </label> <br />
					<input required id="user" type="text" />
				</div>
				<div className="from-group">
					<label htmlFor="password">Password: </label> <br />
					<input required id="password" type="text" />
				</div>
				<button type="submit">Login</button>
			</div>
		</div>
	)
}

export default HomePage