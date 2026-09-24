
import express from "express";
import { dirname, join} from "path";
import { fileURLToPath } from "url";

import rutasdenavegacion from "./routes/index.js";
import authRoutes from "./routes/autenticacion.js"

const app = express();


const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(join(__dirname, "/views"));


app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(rutasdenavegacion)
app.use(authRoutes)

app.use(express.static(join(__dirname, "public")))

app.listen(10);
console.log("hola mundo");
console.log("el puerto esta escuchando en el puerto", 10);










