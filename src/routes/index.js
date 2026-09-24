
import { Router } from "express";

const router = Router();
const hora = new Date().toLocaleTimeString("es-CO");


router.get("/Contactos", (req, res) => res.render("Contactos.ejs", {etiqueta: "Pagina de contatos empresariales."}));
router.get("/Sobre_Nosotros", (req, res) => res.render("Sobre_Nosotros.ejs", {etiqueta: "Como conduzco?"}));
router.get("/menu", (req, res) => res.render("menu.ejs", {etiqueta: "Menu Empresarial"}));
//router.get("/login", (req, res) => res.render("login.ejs", {etiqueta: "Vista de Inicio de Sesion"}));
router.get("/", (req, res) => res.render("index", {etiqueta: "Mi primer sitio web con Node.JS", hora: hora}));

//ruta get para el login 
router.get("/login", (req, res) => {
    res.render("login", {
        etiqueta:"Vista de Inicio de Sesión", 
        mensaje: null 
    })
});

// ruta post para prosesar el login
router.post("/login", (req, res) => {
    const {usuario, contrasena} = req.body;

    if (usuario === "admin" && contrasena === "1234") {
        return res.redirect("/menu");
    }
    return res.render("login", {
        etiqueta: "vista de inicio de sesion", 
        mensaje: "Usuario o contraseña incorrectos"
    });
});

export default router 





















// ejercicios de objetos 

const macbook = {
    marca: "apple",
    modelo: "macbook pro",
    pantalla: "15 pulgadas",
    porcesador: "M4",
    alamcenamiento: "1TB SSD",
    color: "gris epacial",
    precio: 500000,
    disponible: true
};
