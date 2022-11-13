import express from "express";
import userControllers from "../controllers/authApisController"

const route = express.Router();

/**
 * @param {Initialize route require}
 */

const initializeWebRoute = (app) => 
{

	/**
	 * @param {function login, signup, logout for user, in file authApisController}
	*/
	route.post("/signup", userControllers.signupUser)






	route.get('/', (req, res) => { res.send("xin chao mn tren toan the gioi ") })
	app.use("/api/v1", route)
}


export default initializeWebRoute;