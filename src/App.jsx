import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
	return (
		<div className="container">
			<Router>
				<Routes>
					<Route
						path="/login"
						element={<Login />}
					/>

					<Route
						path="/signup"
						element={<Signup />}
					/>

					<Route
						path="*"
						element={<Login />}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
