$(document).ready(function(){ 
	
 $('#txtusuario').focus();
 document.getElementById('cboperfil').selectedIndex=-1;
 $('#btnregistro').click(function(){
ValidarCampos();
});
 $('#txtusuario').keyup(function(ev){
  if($('#txtusuario').val().trim().length===0){
   $('#txtusuario').focus();
  } else{
  	PasarEnter(ev,$('#txtclave'));
  }
  
 });
 function PasarEnter(Event,Campo){
  if(Event.which===13 || Event.keyCode===13){
  	 
  		Campo.focus();
   }
 }
function ValidarCampos(){
 
 if($('#txtusuario').val().trim().length===0){
 	$('#txtusuario').focus();swal("!Advertencia¡","ingrese su su suario","warning"); 
 }else{
 	if($('#txtclave').val().trim().length===0){
 		$('#txtclave').focus();swal("!Advertencia¡","Ingrese su Clave de usuario","warning");
 	}  else{var perfil=document.getElementById('cboperfil').options[document.getElementById('cboperfil').selectedIndex].innerHTML;
 		swal(perfil);
 	}
 }
}
function 
});