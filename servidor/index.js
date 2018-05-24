
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

		$("#btnAceptar").on("click",Aceptar);
		$("#txtNombreUsuario").on("keypress",teclaNombreUsuario);
}
$(document).ready(inicioApp);