<?php
include "conexiones.php";
function valida(){
	$usuario=$_POST["usuario"];
	$clave =md5($_POST["clave"]);

	$con=conecta();
	$consulta ="select * from usuarios where usuario = '".$usuario."' and clave='".$clave."' limit 1";
	$resConsulta=mysqli_query($con,$consulta);
	$respuesta = false;
	if(mysqli_num_rows($resConsulta) > 0){
		$respuesta = true;
	}

	$salidaJSON = array('respuesta' => $respuesta);
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