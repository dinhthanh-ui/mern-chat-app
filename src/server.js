import express from "express";
import mongoose from "mongoose";
import initializeWebRoute from "./routes/webApis";
require("dotenv").config();

let app = express();
const port = process.env.PORT;


app.use(express.json());
app.use(express.urlencoded({ extended: true }))


/**
 * @param {route request}
 */
initializeWebRoute(app)

/**
 * @param {Connect database mongoose}
 */
const connectDatabase = async () =>
{
	try
	{

		const Database = await mongoose.connect(process.env.URL_MONGOOSE_DATABASE, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})

		app.listen(port, () => { console.log("listening on port " + port) })

		console.log(`MongoDB Connected to ${Database.connection.host}`);
	} catch (error)
	{
		console.log(`Error: ${error.message}`);
		process.exit();
	}
}
connectDatabase();