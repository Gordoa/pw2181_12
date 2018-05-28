
var inicioApp = function(){
	var Aceptar = function(){
	
		var usuario=$("#txtUsuario").val();
		var clave =$("#txtClave").val();
		var parametros="opc=validaentrada"+
						"&usuario="+usuario+
						"&clave="+clave+
						"&aleatorio="+Math.random();
		$.ajax({
			cache:false,
			type: "POST",
			dataType: "json",
			url: "php/validaentrada.php",
			data: parametros,
			success: function(response){
				if(response.respuesta == true){
					$("#secInicio").hide("slow");

					$("#frmUsuarios").show("slow");
					$("#txtNombreUsuario").focus();
				}
				else{
					alert("usuario o clave incorrecta");
				}
			},
			error: function(xhr,ajaxOption,thrownError){
				console.log(xhr);
			}

			});
			
		}

		var buscarUsuario = function(){
			var usuario = $("#txtNombreUsuario").val();
			var parametros = "opc=validaentrada"+
						"&usuario="+usuario+
						"&aleatorio="+Math.random();
			if(usuario != ""){
					$.ajax({
				cache:false,
				type: "POST",
				dataType: "json",
				url: "php/buscarusuario.php",
				data: parametros,
				success: function(response){
				if(response.respuesta == true){
					$("#txtNombre").val(response.nombre);
					$('#txtClaveUsuario').val(response.clave);
				}
				else{
					$("#txtNombre").focus();
				}
			},
			error: function(xhr,ajaxOption,thrownError){
				console.log(xhr);
			}

			});
			}
		}
		var teclaNombreUsuario = function(tecla){
			if(tecla.which == 13){
				buscarUsuario();
			}
		}
		var Guardar = function(){
			var usuario=$("#txtNombreUsuario").val();
			var nombre=$("#txtNombre").val();
			var clave=$("#txtClaveUsuario").val();
			var parametros= "opc=guardarUsuario"+
							"&usuario="+usuario+
							"&clave"+clave+
							"&nombre="+nombre+
							"&aleatorio="+Math.random();
			if(usuario!="" && nombre!="" && clave!=""){
				$.ajax({
				cache:false,
				type: "POST",
				dataType: "json",
				url: "php/guardarusuario.php",
				data: parametros,
				success: function(response){
				if(response.respuesta == true){
					
				}
				
			},
			error: function(xhr,ajaxOption,thrownError){
				
			}

			});

			}else{
				alert("Llene todos los campos");
			}
		}

		var Borrar= function(){
			var usuario= $("#txtNombreUsuario").val();
			var nombre= $("#txtNombre").val();
			var pregunta= prompt("Seguro de borrar a"+nombre+"? (si/no)","no");
			var parametros= "opc=borrarUsuario"+
							"&usuario="+usuario+
							"&clave"+clave+
							"&nombre="+nombre+
							"&aleatorio="+Math.random();
			if(usuario!="" && nombre!="" && clave!=""){
				$.ajax({
				cache:false,
				type: "POST",
				dataType: "json",
				url: "php/borrarusuario.php",
				data: parametros,
				success: function(response){
				if(response.respuesta == true){
					
				}
				
			},
			error: function(xhr,ajaxOption,thrownError){
				
			}

			});

			if (pregunta != null && pregunta== "si"){

			}

		}

		$("#btnBorrar").on("click",Borrar);
		$("#btnAceptar").on("click",Aceptar);
		$("#txtNombreUsuario").on("keypress",teclaNombreUsuario);
		$("btnGuardar").on("click",Guardar);
}
$(document).ready(inicioApp);