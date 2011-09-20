$(document).ready(function() {
	$('.datepicker').datepicker({
		dateFormat: 'd/mm/yy',
		buttonText: ""
	});
	
	$("#dialog-error").dialog({
		autoOpen: false,
		modal: true,
		open: function (){
			$(this).parents(".ui-dialog:first").find(".ui-dialog-titlebar").addClass("ui-state-error");
		}
	});
	
	$( "#dialog-form" ).dialog({
		autoOpen: false,
		height: 400,
		width: 250,
		modal: true,
		errorClass: "errorMessage",
		open: function(){
			$('.ui-widget-overlay').css({background: 'black' });
			
            $('.ui-widget-overlay').hide().fadeIn().fadeTo("slow",0.8);	
        },
		
		buttons: {
		
			"OK": function() {
					//Agrego un nuevo partido.
					
					/*{
						Add();
						clear();
						$( this ).dialog( "close" );
					}
					else
					{
						alert('error');
					}
					*/
					
				},
								
			"Cancel": function() {
			
						//limpio los datos del form.
						clear();
						$( this ).dialog( "close" );
					}
				}
	});
});

function Add()
{
	//Obtengo los datos del partido.
	/*var objPartido =  {"equipoA": '' + $('#txtEquipoA').val() + '',
							   "equipoB": '' + $('#txtEquipoB').val() + '',
							   "fecha": '' + $('#txtFecha').val() + '',
							   "lugar": '' + $('#txtLugar').val() + '',
							   "cochera": '' + $('#chkCochera').val() + '' };
	*/
	
	$.ajax({
		url: "",
		data: $("#frmDatosPartido").serializeArray(),
		type: "POST",
		success:  function(data, textStatus, jqXHR){
				$("#dialog-ok").dialog('open');
			},
		error: function (datos){
			$("#dialog-error").dialog('open');
			}
		});
};

//limpio los datos del formulario.
function clear()
{
	$('#txtEquipoA').val("");
	$('#txtEquipoB').val("");
	$('#txtFecha').val("");
	$('#txtLugar').val("");
	$('#chkCochera').val("");
};



