<style>
  h1, h4{
    text-align: center;
    font-weight: bold;
    border: none;
    margin-bottom: 0px;
  }

  p{
    text-align: justify;
  }

  img{
    border: 2px solid black;
  }

  #ex{
    border: none;
  }
</style>

<h1>RELACIÓN 1</h1>

<h4>CHRISTIAN MILLÁN SORIA</h4>

<hr>

<p><b>1. Dado el siguiente código:</b></p>

```html
<html>
  <body>
    <table border="1">
      {
        for $x in doc("libros.xml")/bib/libro
        return <tr><td>{string($x/titulo)}</td></tr>
      }
    </table>
  </body>
</html>
```

<p><b>a. Explicar qué se hace en el trozo de código seleccionado o sombreado de color. Explícalo con todo detalle.</b></p>

<p>El código lo que hace es generar una tabla HTML con los títulos de los libros que se encuentran en un archivo XML llamado "libros.xml". Esta tabla se muestra en una página web cuando se carga el archivo HTML que contiene el código.</p>

<p>La tabla tiene un borde que se muestra gracias al atributo border que se le asigna en la etiqueta "< table >". Dentro de la tabla, se van a agregar filas ("< tr >") y celdas ("< td >") por cada libro que se encuentre en el archivo XML.</p>

<p>Para obtener los libros del archivo XML, se utiliza una consulta XQuery. Esta consulta se hace con la cláusula for y selecciona todos los elementos "< libro >" que están dentro del elemento raíz "< bib >" del archivo XML. Por cada libro seleccionado en la consulta, se va a crear una fila en la tabla HTML.</p>

<p>Dentro de cada fila, se crea una celda que va a contener el título del libro. Para obtener el título, se utiliza una expresión XQuery que toma el contenido del elemento "< titulo >" de cada libro seleccionado y lo convierte en una cadena de caracteres con la función string(). Esta cadena de caracteres se agrega dentro de la etiqueta "< td >" para mostrar el título en la celda correspondiente.</p>

<p>En resumen, el código utiliza una consulta XQuery para seleccionar los títulos de los libros en un archivo XML y los muestra en una tabla HTML en una página web. La consulta se hace con la cláusula for y los resultados se insertan en la tabla HTML usando las etiquetas "< tr >" y "< td >".</p>