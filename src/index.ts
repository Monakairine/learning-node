
import { startServer } from "./api/express.config";
import dotenv from "dotenv"

dotenv.config()
const PORT = process.env.PORT;

startServer(PORT)
