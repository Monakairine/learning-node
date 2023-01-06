
import { ExpressConfig } from "./api/express.config";
import dotenv from "dotenv"

dotenv.config()
const PORT = process.env.PORT;

async function configure() {
  const app = await ExpressConfig.configure(PORT);
}

configure();

