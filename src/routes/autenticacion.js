import { Router } from "express";
const router = Router ()

// ruta post para procesar el login 
router.post("/api/login", (req,res) => {
    const {usuario, contrasena} =req.body;

    console.log("Usuario recibido: ", usuario);
    console.log("Contraseña recibido: ", contrasena);

    if (usuario === "admin" && contrasena === "12345"){
        res.redirect("/Contactos")
    } else {
        res.send("Usuario o contraseña incorrectos")
    }
});

// Boton crear usuario
router.get("/registro", (req, res) => {
    res.send("aquí se mostrará el formulario para crear un nuevo usuario")
});

// enlace para restablecer contraseña 
router.get("/recuperar-password", (req, res) => {
    res.send("Vista o Logica para enviar el correo de recuperacion de contraseña")
});

// enlace para recordar usuario 
router.get("/recordar-usuario", (req, res) => {
    res.send("Vista o Logica para recordar el nombre del usuario")
});

//ruta de ejemplo para el exito del login 
router.get("/Contactos", (req, res) => {
    res.send("bienvenido al sistema")
});

export default router