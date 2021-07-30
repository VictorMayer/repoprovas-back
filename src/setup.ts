import dotenv from "dotenv";

const path = process.env.NODE_ENV === "test" ? ".env.test" : process.env.NODE_ENV === "production" ? ".env.production" : process.env.NODE_ENV === "development" ? ".env" : ".env" ;

dotenv.config({ path });