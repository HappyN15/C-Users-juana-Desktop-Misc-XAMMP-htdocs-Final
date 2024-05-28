Usuarios = [{
    "id": 1, 
    "nombreUsuario": "Juan",
    "contraseña":"12345",
    "datosPersonales":{
        "edad":23,
        "nombre":"Juan",
        "apellidos":"asdad",
        "urlFoto":"../recursos/img/evee.png"
    }
},
{
    "id": 2,
    "nombreUsuario": "Amancio",
    "contraseña":"123456",
    "datosPersonales":{
        "edad":26,
        "nombre":"Amancio",
        "apellidos":"Torres",
        "urlFoto":"../recursos/img/evee.png"
    }
}
]

let id_usuario = 0;

function validarDatos(event){

    console.log(Usuarios[0].datosPersonales.nombre);
    const formulario = document.querySelector("#formulario");

    formData = new FormData(formulario);

    datosFormulario = Object.fromEntries(formData.entries());

    let nombreUsuario = false;
    let contraseña =  false;

    for(let i=0; i<Usuarios.length; i++){
        if(datosFormulario.nombreUsuario == Usuarios[i].nombreUsuario && 
            datosFormulario.contraseña == Usuarios[i].contraseña){
            nombreUsuario = true;
            contraseña = true;
            id_usuario = Usuarios[i].id;
            break;
        }else{
            nombreUsuario = false;
            contraseña = false;
        }
    }

    if(nombreUsuario && contraseña){
        alert("Datos correctos")
        agregarDatosUsuario(id_usuario);
    }else{
        alert("Nombre de usuario o contraseña incorrectos")
    }
}

function agregarDatosUsuario(id){

    let usuario_actual;
    const foto = document.querySelector("#foto-info");
    const nombre = document.querySelector("#info-nombre");
    const apellido = document.querySelector("#info-apellido");
    const edad = document.querySelector("#info-edad");

    for(let i = 0; i<Usuarios.length; i++){
        if(id == Usuarios[i].id){
            usuario_actual = Object.assign({},Usuarios[i]);
        }
    }

    foto.style.backgroundImage = `url("${usuario_actual.datosPersonales.urlFoto}")`;
    nombre.textContent = usuario_actual.datosPersonales.nombre;
    apellido.textContent = usuario_actual.datosPersonales.apellidos;
    edad.textContent = usuario_actual.datosPersonales.edad;
}   