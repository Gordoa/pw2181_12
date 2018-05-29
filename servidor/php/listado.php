<?php
include "conexiones.php";
function listado(){
	$usuario=$_POST["usuario"];
	$clave =md5($_POST["clave"]);

	$con=conecta();
	$consulta ="SELECT * from usuarios order by nombre");
	$resConsulta=mysqli_query($con,$consulta);
	$respuesta = false;
	$tabla = "";
	if(mysqli_num_rows($resConsulta) > 0){
		$respuesta = true;
		$tabla.= "<thead>";
		$tabla.= "<tr>";
		$tabla.= "<th>No.</th><th>Usuario</th><th>Nombre</th>";
		$tabla.= "</tr>";
		$tabla.= "</thead>";

			while($registro=mysql
		$tabla.= "</tbody>";i_fetch_array($resConsulta)){
				$cuenta = $cuenta+1;
				$tabla.= "<tr>";
				$tabla.= "<td>".$cuenta."</td>";
				$tabla.= "<td>".$registro["usuario"]."<td>";
				$tabla.= "<td>".$registro["nombre"]."<td>";
				$tabla.= "</tr>";
			}
		$tabla.= "</tbody>";


		
	}

	$salidaJSON = array('respuesta' => $respuesta,
						'tabla' => $tabla);
	//var_dump($salidaJSON);
	print json_encode($salidaJSON);
}

	$opc=$_POST['opc'];
	switch ($opc) {
		case 'listado':
			listado();
			break;
		
		default:
			# code...
			break;
	}

?>