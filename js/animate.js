//Inicio la animacion.
function animatePlayer(that) {
	//seteo la propiedad de la animacion con el top.
	//seteo la duracion de la animacion y la function a ejecutar cuando termina la animacion.
	$(that).animate({ top: '-=25px' }, 250, function() { animateOpposite(that); });
};

//Inicio la animacion en sentido contrario.
function animateOpposite(that) {
	$(that).animate({ top: '+=25px' }, 250, function () { 
		//Si esta posicionado en la imagen entonces reinicio la animacion.
		if ($(that).data("mouseover"))
		{
			animatePlayer(that); 
		}	
	});
};
