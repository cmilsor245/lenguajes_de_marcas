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

<p>En resumen, el código utiliza una consulta XQuery para seleccionar los títulos de los libros en un archivo XML y los muestra en una tabla HTML en una página web. La consulta se hace con la cláusula for y los resultados se insertan en la tabla HTML usando las etiquetas "< tr >" y "<p td >".</p>

<p><b>b. ¿Qué resultado obtienes tras la ejecución de la consulta y añadir el resultado al código HTML que lo envuelve?</b></p>

<p>El resultado de la consulta sería una tabla HTML que mostraría los títulos de los libros contenidos en el archivo XML "libros.xml". Si se agrega el resultado de la consulta al código HTML que lo envuelve, se generaría una página web completa que incluiría la tabla con los títulos de los libros.</p>

<p>El código completo resultante se vería así:</p>

```html
<html>
  <body>
    <table border="1">
      <tr><td>TCP/IP Illustrated</td></tr>
      <tr><td>Advanced Programming in the Unix environment</td></tr>
      <tr><td>Data on the Web</td></tr>
      <tr><td>Economics of Technology for Digital TV</td></tr>
    </table>
  </body>
</html>
```

<p>Y si se carga este archivo HTML en un navegador web, se mostraría una página con una tabla que contiene los títulos de los libros del archivo XML "libros.xml".</p>

<p><b>2. Dado el siguiente código:</b></p>

<p><b>a.</b></p>

```xquery
for $baile in /bailes/baile
where $baile/precio>30
return $baile/nombre
```

<p><b>1. Explica qué se realiza con estas sentencias.</b></p>

<p>En la primera línea, se utiliza el comando "for" para establecer una variable $baile que se usará para iterar sobre todos los elementos "baile" del documento XML. La ruta "/bailes/baile" especifica que los elementos "baile" se encuentran en la raíz del documento.</p>

<p>En la segunda línea, se utiliza el comando "where" para establecer una condición. La condición es que el precio del baile ($baile/precio) debe ser mayor que 30.</p>

<p>En la tercera línea, se utiliza el comando "return" para especificar que se debe devolver el nombre de los bailes que cumplen con la condición establecida en la línea anterior. El resultado de esta consulta sería una lista de los nombres de los bailes que cumplen con la condición establecida.</p>

<p>En resumen, estas sentencias son una consulta XQuery que busca el nombre de los bailes cuyo precio es mayor que 30 en un documento XML.</p>

<p><b>2. Modifica estas sentencias para que desaparezca la cláusula "where" pero donde se haga el control del precio del baile.</b></p>

<p>Respuesta:</p>

```xquery
for $baile in /bailes/baile[precio>30]/nombre
return $baile
```

<p><b>b.</b></p>

```xquery
for $baile in /bailes/baile
where $baile/precio>30 and $baile/precio/@moneda="euro"
return $baile/nombre
```

<p><b>1. Explica qué realizan estas sentencias.</b></p>

<p>Estas sentencias realizan una consulta a un documento XML que contiene información sobre bailes y sus precios. La consulta filtra los elementos "baile" que tienen un precio mayor a 30 euros y que la moneda en la que está establecido el precio sea "euro". A continuación, devuelve el nombre de cada uno de los bailes que cumple con estos criterios.</p>

<p>La consulta comienza con un "for" que recorre todos los elementos "baile" que se encuentran en la ruta "/bailes/baile". La variable $baile toma el valor de cada uno de los elementos "baile" que se recorren.</p>

<p>A continuación, se utiliza la cláusula "where" para filtrar los elementos "baile" que cumplan con la condición de tener un precio mayor a 30 euros y que la moneda en la que está establecido el precio sea "euro". Para hacer esto, se utiliza la sintaxis "$baile/precio>30" para indicar que el precio del baile debe ser mayor a 30 euros y se utiliza la sintaxis "$baile/precio/@moneda="euro"" para indicar que la moneda en la que está establecido el precio debe ser "euro". El operador "and" se utiliza para indicar que ambas condiciones deben cumplirse para que un elemento "baile" se considere válido.</p>

<p>Por último, se utiliza la cláusula "return" para devolver el nombre de cada uno de los elementos "baile" que cumplen con los criterios establecidos. Para hacer esto, se utiliza la sintaxis "$baile/nombre" para indicar que se debe devolver el contenido del elemento "nombre" que se encuentra dentro del elemento "baile" que cumple con las condiciones.</p>

<p><b>2. Modifica estas sentencias para que desaparezca la cláusula "where" pero donde se haga el control del precio del baile.</b></p>

<p>Respuesta:</p>

```xquery
for $baile in /bailes/baile[precio>30 and precio/@moneda="euro"]
return $baile/nombre
```

<p><b>c.</b></p>

```xquery
for $baile in /bailes/baile
order by $baile/sala
return 
  <baile>
    {$baile/profesor}
    {$baile/sala}
  </baile>
```

<p><b>1. Explica qué realizan estas sentencias.</b></p>

<p>Estas sentencias realizan una consulta a un documento XML que contiene información sobre bailes. La consulta devuelve una lista de elementos "baile" que incluyen información sobre el profesor que imparte el baile y la sala en la que se lleva a cabo, ordenados por el nombre de la sala.</p>

<p>La consulta comienza con la cláusula "for", que establece la variable $baile para iterar a través de todos los elementos "baile" que se encuentran en el documento XML. Dentro del ciclo "for", se crea un elemento "baile" que incluye información sobre el profesor y la sala en la que se lleva a cabo el baile. Para agregar esta información, se utiliza la sintaxis "{$baile/profesor}" y "{$baile/sala}", que accede al contenido de los elementos "profesor" y "sala" que están dentro del elemento "baile".</p>

<p>La cláusula "order by" se utiliza para ordenar los elementos "baile" por el nombre de la sala. En este caso, se utiliza la sintaxis "$baile/sala" para acceder al contenido del elemento "sala" que se encuentra dentro del elemento "baile" y ordenar los resultados en función de este valor.</p>

<p>En resumen, estas sentencias realizan una consulta que devuelve una lista de elementos "baile" que incluyen información sobre el profesor y la sala en la que se lleva a cabo el baile, ordenados por el nombre de la sala.</p>

<p><b>2. Modifica estas sentencias para que se produzcan criterios de búsqueda por un determinado profesor y por una determinada sala.</b></p>

<p>Respuesta:</p>

```xquery

```

<p><b>3. Realiza un pequeño programa en XQUERY que proporcione el siguiente resultado:</b></p>

```xml
<test>1 2 3 4 5</test>
<test>1 2 3 4 5</test>
<test>1 2 3 4 5</test>
```

<p>Respuesta:</p>

```xquery

```