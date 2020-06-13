$(document).ready(function(){ 
	$('#txtcliente').focus();
$('#txtcliente').keyup(function(ev){
 if($('#txtcliente').val().trim().length===0){
 	$('#txtcliente').focus();
 }else{
 	PasarEnter(ev,$('#txtprecio'));
 }
});
 $('#btnok').click(function(){
 	if($('#txtcliente').val().trim().length===0){
    $('#txtcliente').focus();
  } else{
    if($('#txtprecio').val().trim().length===0){
      $('#txtprecio').focus();
    }else{$('#txtcliente').focus();
       swal("Mensaje del sistema","Cliente : "+$('#txtcliente').val()
   +"\n inicial : "+CalcularInicial($('#txtprecio').val() )
   +"\n Monto Restante : "+CalcularMontoRestante($('#txtprecio').val()), "success" );
       AgregarFilas();
Limpiar(); 
    }
  }
});
  $('#btncancel').click(function(){
 eliminar(filas);
  });

 
  function saludar(){
    alert("hola fff");
  }
 function Limpiar(){
  $('#txtprecio').val("");$('#txtcliente').val("");
  $('#txtcliente').focus();
 }
function CalcularInicial(precio){
  var inicial=0.0;
  if(precio>50000){
     inicial=(0.35)*precio;
  }else{
  	inicial=(0.25)*precio;
  }
  return inicial;
}
function CalcularMontoRestante(precio){
  var monto=0.0;
  if(precio>50000){
    
     monto=precio- CalcularInicial(precio);
  }else{
    monto=precio-CalcularInicial(precio);
  }
  return monto;
}
 
function PasarEnter(Event,Campo){
 if(Event.which===13 || Event.keyCode===13){
 	Campo.focus();
 }
}
var cont=0;
function AgregarFilas(){
  cont++;
  var fila='<tr id="fila'+cont+'" conclick="seleccionar(this.id);"  ><td>'+cont+'</td> <td>'+$('#txtcliente').val()+'</td>'
  + '<td>'+$('#txtprecio').val()+'</td><td>'+CalcularInicial($('#txtprecio').val())+'</td>'
  +'<td>'+CalcularMontoRestante($('#txtprecio').val())+'</td><td class="form-inline col-sm-12 col-md-12 col-lg-12" ><button class="col-sm-5 col-md-6 col-lg-5   btn btn-default" ><image src="imagenes/quitarcompra.png"></button>'
  + '<button class="col-sm-5 col-md-6 col-lg-5 btn btn-default"      ><image src="imagenes/editarlos.png"></button></td></tr>';
  $('#tabla').append(fila);
 
}

function seleccionar(fila1){
 if($('#'+fila1).hasClass('selecionada')){
  $('#'+fila1).removeClass('seleccionada');
 }else{
   $('#'+fila1).addClass('seleccionada');
 }
  
 
  }

 function eliminar(fil){
  $('#'+fil).remove();
 }
});