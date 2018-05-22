
var usuario=$("#txtUsuario").val();
var clave =$("#txtClave").val();
var parametros="opc=validaentrada"+
				"&usuario="+usuario+
				"&clave="+clave+
				"&aleatorio="+Math.random();
$.ajax([
	cache:false,
	type: "POST",
	dataType: "json",
	url

	])				