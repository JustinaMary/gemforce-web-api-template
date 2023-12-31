import express from "express";
import { AuthService } from "../services/authService";
import auth from "./auth";
import cors from "cors";

const createApp = async (port: number) => {
	const app = express();
	const authService = new AuthService();

	const corsHost = process.env.CORS_CLIENT_HOST;
	if (corsHost) {
		app.use(
			cors({
				origin: corsHost,
				credentials: true,
			})
		);
	}

	await auth(app, authService);

	app.listen(port, () => {
		console.log("server listens on ", port);
	});

	return app;
};
export default createApp;
