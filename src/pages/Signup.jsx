import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Login = () => {
	const Schema = yup.object().shape({
		email: yup.string().email("Please enter a valid email").required("This field is required"),
		password: yup
			.string()
			.required("This field is required")
			.min(8, "Please enter at least 8 characters"),
		confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Password does not match"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(Schema),
	});

	const onsubmit = (data) => {
		// The values of the inputs are displayed here in the console
		console.log(data);
	};

	return (
		<div>
			<form
				className="form-container"
				onSubmit={handleSubmit(onsubmit)}
			>
				<h1>Signup</h1>

				<div>
					<div>
						<input
							type="text"
							placeholder="Email"
							{...register("email")}
						/>
						<span className="error">{errors?.email?.message}</span>
					</div>

					<div>
						<input
							type="password"
							placeholder="Create password"
							{...register("password")}
						/>
						<span className="error">{errors?.password?.message}</span>
					</div>

					<div>
						<input
							type="password"
							placeholder="Confirm password"
							{...register("confirmPassword")}
						/>
						<span className="error">{errors?.confirmPassword?.message}</span>
					</div>

					<button className="login">Signup</button>

					<p>
						Already have an account? <Link to="/login">Login</Link>
					</p>

					<span className="or">Or</span>

					<div className="btns">
						<button>Facebook</button>
						<button>Google</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Login;
