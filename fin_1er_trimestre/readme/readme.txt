ERRORES CONOCIDOS:
  - La página web no es responsive, es decir, al cambiar de navegador o dispositivo casi todos los elementos se descolocan de su posición correcta y no funcionan como deberían.
    
    Me di cuenta de este inconveniente cuando la página estaba demasiado avanzada, por lo que no he conseguido arreglarlo a tiempo.
    
    Para poder ver la página de la forma correcta (aunque sé que no es lo suyo), se debe establecer un zoom del 100% en los ajustes de Windows (tampoco sé por qué este ajuste cambia totalmente la visualización de la página) y bajar el zoom de la página a un 80% en el navegador web.

    El ajuste de Windows se puede cambiar desde la aplicación Configuración->Sistema->Pantalla->Escala->del 125%(predeterminado de Windows) al 100%.

    El zoom de la página se debe cambiar desde el mismo navegador una vez la página web esté abierta.

    Hay que tener en cuenta que cada vez que se cambie de página (por ejemplo, de la página HOME a la página MEDIA) es posible que el zoom del navegador se resetee a 100% otra vez y se descoloque todo de nuevo. Se puede establecer un zoom predeterminado de un 80% para el navegador mientras para no tener que estar cambiándolo.

    Estos dos ajustes son fáciles de cambiar y fáciles de revertir a su valor original, no debería haber ningún problema, pero en caso de no querer cambiarlos, he adjuntado algunas capturas de pantalla donde se ve como cuadran los elementos perfectamente en mi entorno de trabajo. Estas capturas están en el directorio "readme/proof/" de mi proyecto. Las capturas han sido tomadas con un 100% de zoom en el ajuste de Windows y un 80% de zoom en la página web.

    Este problema se debe a que no he utilizado desde el principio valores de asignación de posición y tamaño relativos, que se adaptan al zoom de la página. Al haber utilizado valores absolutos (como "position: absolute" o "width: 500px", en lugar de "position: relative" y "width: 80%", por ejemplo), los tamaños y posiciones de los elementos se mantienen aun cambiando el zoom de la página, por lo que todo se descoloca o no cuadra correctamente con otros elementos con los que debe cuadrar.

--------------------------------------------------------------------------------------------------------------------------------------------------------

CÓMO NAVEGAR POR EL proyecto
  Lo primero es abrir en archivo "index.html" situado en la raíz del proyecto. Una vez abierto no será necesario abrir ningún archivo más manualmente, ya que se puede navegar entre todos ellos con simples clics en las distintas páginas.

  En todas las páginas hay un título en la parte superior que cambia de color automáticamente y una barra de navegación que se utiliza para ir a cualquier página del proyecto.

  En la barra de navegación, los elementos con nombre "MEDIA", "CHARACTERS" y "PLANETS" contienen un desplegable cada uno de ellos, es decir, al colocar el cursor encima de cualquiera de ellos, se abre un desplegable con enlaces a otras sub-páginas del proyecto. Estos enlaces también tienen animaciones, al igual que la barra de navegación al completo.

  -------------------------------------------------------

  PÁGINA HOME
    En la página "HOME" se encuentra un slideshow/carrusel de imágenes que cambia de imagen automáticamente y de forma aleatoria. Al colocar el cursor encima se cambia el tamaño de la imagen.

    Al fondo de la página, detrás de todos los objetos, hay varias naves que se mueven cada una con su propia animación de un lado de la pantalla a otro.

    Debajo del slideshow hay una barra de búsqueda, donde se puede introducir el título de un artículo (sub-página) del proyecto, por ejemplo, se puede introducir las palabras "rey skywalker" o "rey" y darle a Enter o al botón "SEARCH" para acceder al artículo sobre este personaje. La barra de búsqueda tiene una animación de hover.

    Debajo de la barra de búsqueda se encuentra una sección de noticias relacionadas con la saga de Star Wars. El poster que aparece en la primera sección tiene una animación de hover, al igual que las imágenes sobre los personajes que aparecen en medio del cuadro.
    
    A la derecha de la sección de noticias se encuentran algunas noticias más mucho más cortas y comprimidas, entre las que se encuentra un vídeo que se reproduce automáticamente.

    El vídeo se reproduce sin sonido, pero se puede activar, ya que cuenta con los controles básicos de YouTube.

    La imagen en la sección de debajo del vídeo tiene un enlace que redirecciona a una página externa relacionada con lo que se comenta en esta sección de mi página.

  -------------------------------------------------------

  PÁGINAS MEDIA, CHARACTERS Y PLANETS
    La barra de navegación cambia según la página o sub-página en la que te encuentres. Si te encuentras, por ejemplo, en la página del artículo de la película "THE PHANTOM MENACE", su enlace en el desplegable de la barra de navegación no aparecerá. Si te encuentras en la página de "CHARACTERS", viendo el grid de imágenes con enlaces a todos los personajes que he introducido, el desplegable de la página de "CHARACTERS" no aparecerá en la barra de navegación al poner el cursor encima, ya que no es necesario porque los enlaces ya están en las propias imágenes de la página "CHARACTERS".

    Cada una de estas páginas (MEDIA, CHARACTERS y PLANTES) cuenta con un grid de imágenes, cada una con una animación de hover, para poder poner el cursor encima de ellas y ver otra imagen diferente a la que aparece y poder hacer clic en ellas para acceder al artículo de cada elemento.