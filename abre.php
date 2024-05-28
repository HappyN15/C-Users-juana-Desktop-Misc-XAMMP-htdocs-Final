<?php
    $conexion = new mysqli("Localhost","root","","contactos")
        if($conexion){
            echo "la gestion fue exitosa";
        }
        else{
            echo "Fallo la gestion";
        }
?>