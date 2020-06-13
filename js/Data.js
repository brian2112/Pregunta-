$(document).ready(function(){
	comenzar();
$('#btnEntrar').click(function(){
  Saludar();
});
$('#btnCancelar').click(function(){
$.ajax({
window.open('usuario.html')
}); 
});
$('#btnvolver').click(function(){
  window.close();window.open('login.html');
});
function comenzar(){
	$('#txtusuario').focus();
}
function Saludar( ){
	var usuario;var clave;var mensaje;
	usuario=$('#txtusuario').val();
	clave=$('#txtclave').val();
	mensaje=ValidarEntradaDatos(usuario,clave);
	if(mensaje==='1'){
	 $('#txtusuario').focus();swal("!Advertencia¡", "Ingrese su usuario","error");
	}else{
	if(mensaje==="0"){
	$('#txtclave').focus();	swal("!Advertencia¡", "Ingrese su Clave","error");
	}else{
	if(mensaje==="2"){
			Borrar();
       swal('Mensaje del sistema',MandarMensaje(usuario,clave),'success');
	}
	}
	}

}
function MandarMensaje(Usuario,Clave){
var Datos;
Datos="Usuario : "+Usuario+" \n\n Clave: "+Clave;

return Datos;
}function Borrar( ){
$('#txtusuario').val("");$('#txtclave').val("");
comenzar();
}
function ValidarEntradaDatos( usuario,clave){var mando;
if(usuario.trim().length===0){
	 mando="1";
}else{
if(clave.trim().length===0){
	mando="0";
}else{
	mando="2";
}
}
return mando;
}
});