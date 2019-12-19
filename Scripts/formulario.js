function validarForm()
{
	var nombre=document.forms["Formulario"]["Nombre"].value;
	var apellidos=document.forms["Formulario"]["Apellidos"].value;
	var correo=document.forms["Formulario"]["Correo"].value;
	var provincia = document.forms["Formulario"]["lista"].selectedIndex;
	var informacion = document.getElementsByName("informacion");
	var seleccionado = false;

	if(nombre == null || nombre == "" || nombre.length == 0  || /^\s+$/.test(nombre) || !isNaN(nombre))
	{
		window.alert('Debe insertar el nombre');
		return false;
	}
	if(apellidos == null || apellidos == "" || apellidos.length == 0  || /^\s+$/.test(apellidos) || !isNaN(apellidos))
	{
		alert('Debe insertar el apelldo');
		return false;
	}
	if(correo == "")
	{
		alert('Debe insertar un correo');
		return false;
	}
	if(provincia == null || provincia == 0) 
	{
		alert("Debe seleccionar una opción en el campo 'Provincia'");
		return false;					
	}
	for(var i=0; informacion.length; i++)
	{
		if(informacion[i].checked)
		{
			seleccionado=true;
			break;
		}
	}
	if(!seleccionado)
	{
		alert("Debe seleccionar una opción");
		return false;
	}
	alert("Correcto");
	limpiar();
}
