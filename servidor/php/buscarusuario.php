<?php
include "conexiones.php";
function valida(){
	$usuario=$_POST["usuario"];
	$clave =md5($_POST["clave"]);

	$con=conecta();
	$consulta ="select * from usuarios where usuario = '".$usuario."' and clave='".$clave."' limit 1";
	$resConsulta=mysqli_query($con,$consulta);
	$respuesta = false;

	$nombre ="";
	$clave ="";
	if(mysqli_num_rows($resConsulta) > 0){
		$respuesta = true;
		while($regConsulta= mysql_fetch_array($resConslta)){
			$nombre=$regConsulta["nombre"];
			$clave=$regConsulta["clave"];
		}
	}

	$salidaJSON = array('respuesta' => $respuesta,
						'nombre' => $nombre,
						'clave' => $clave);
	print json_encode($salidaJSON);
}

	$opc=$_POST['opc'];
	switch ($opc) {
		case 'validaentrada':
			valida();
			break;
		
		default:
			# code...
			break;
	}

?>