import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/UserProvider";

const HomePage = () => {
	const { user, login } = useContext(AuthContext) ?? {};

	const [password, setPassword] = useState("");

	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (user && !isLoading) {
			const redirectTo = location.state?.from || "/";
			navigate(redirectTo, { replace: true });
		}
	}, [user, navigate, location, isLoading]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!"user".trim() || !password.trim()) {
			setError("נא למלא את כל השדות");
			return;
		}

		setError("");
		setIsLoading(true);

		try {
			const success = await login!("user", password);
			if (success) {
				// המשתמש יועבר דרך useEffect
			} else {
				setError("שם משתמש או סיסמה לא נכונים");
				setPassword("");
			}
		} catch (err) {
			setError("אירעה שגיאה בהתחברות. אנא נסה שנית");
			setPassword("");
		} finally {
			setIsLoading(false);
		}
	};


	return (
		<div className="home-page">
			<form onSubmit={handleSubmit}>
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
			</form>
		</div>
	)
}

export default HomePage