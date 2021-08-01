import dotenv from "dotenv";

const path = process.env.NODE_ENV === "test" ? ".env.test" : process.env.NODE_ENV === "production" ? ".env.production" : ".env" ;

dotenv.config({ path });