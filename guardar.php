<?php

    include("abre.php");
    $Nombre     =$_POST['Nombre']
    $Apellidos     =$_POST['Apellidos']
    $Calle     =$_POST['Calle']
    $rating     =$_POST['raring']


    $consula  = "INSERT Into Usuarios(Nombre, Apellidos, Calle, rating) VALUES('$Nombre','$Apellidos','$Calle','$rating')";

    if($conexion->query($Consulta)=== TRUE){
        header("Location: formulario.html");
    }else{
        echo  "Error: " . $consulta . <br> . $conexion->error;
    }

    $conexion->close();





?>