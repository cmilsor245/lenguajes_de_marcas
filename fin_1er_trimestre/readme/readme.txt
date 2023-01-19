ERRORES CONOCIDOS:

  - La página web no es responsive, es decir, al cambiar de navegador o dispositivo casi todos los elementos se descolocan de su posición correcta y no funcionan como deberían.
    
    Me di cuenta de este inconveniente cuando la página estaba demasiado avanzada, por lo que no he conseguido arreglarlo a tiempo.
    
    Para poder ver la página de la forma correcta (aunque sé que no es lo suyo), se debe establecer un zoom del 100% en los ajustes de Windows (tampoco sé por qué este ajuste cambia totalmente la visualización de la página) y bajar el zoom de la página a un 80% en el navegador web.

    El ajuste de Windows se puede cambiar desde la aplicación Configuración->Sistema->Pantalla->Escala->del 125%(predeterminado de Windows) al 100%.

    El zoom de la página se debe cambiar desde el mismo navegador una vez la página web esté abierta.

    Estos dos ajustes son fáciles de cambiar y fáciles de revertir a su valor original, no debería haber ningún problema, pero en caso de no querer cambiarlos, he adjuntado algunas capturas de pantalla donde se ve como cuadran los elementos perfectamente en mi entorno de trabajo. Estas capturas están en el directorio "readme/proof/" de mi proyecto. 

    Este problema se debe a que no he utilizado desde el principio valores de asignación de posición y tamaño relativos, que se adaptan al zoom de la página. Al haber utilizado valores absolutos (como "position: absolute" o "width: 500px", en lugar de "position: relative" y "width: 80%", por ejemplo), los tamaños y posiciones de los elementos se mantienen aun cambiando el zoom de la página, por lo que todo se descoloca o no cuadra correctamente con otros elementos con los que debe cuadrar.