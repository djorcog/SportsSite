//Verifico si la posicion esta libre u ocupado.
function IsFree(that)
{
	return $(that).data("libre");
};
				
//Modifico la imagen dependiendo del estado de la posicion.
function changeStateImage(that){
	//verifico si la posicion es libre.
	var idPlayer = $(that).attr('id');
	
	if (isFree(that))
	{
		//modifico el atributo del selector, modificando la imagen.
		$(that).attr('src', './CSS/images/' + $(that).attr('id') + '.png');
			
		//Modifico el estilo de la imagen.
		$(that).addClass(idPlayer);
			
		//modifico la propiedad "libre" del data que corresponde al selector.
		changeState($(that), false);
			
		//detengo la animacion.
		$(that).data("mouseover", false);
	}
	else
	{
		//modifico el atributo del selector, modificando la imagen.
		$(that).attr('src', $(that).data("urlImg"));
			
		$(that).removeClass(idPlayer);
			
		//modifico la propiedad "libre" del data que corresponde al selector.
		changeState($(that), true);
	}
	
};

//Modifico el estado del jugador. true --> libre, false --> ocupado.
function changeState(that, state)
{
	$(that).data("libre", state);
}




