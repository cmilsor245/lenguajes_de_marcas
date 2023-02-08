<style>
  h1{
    border: none;
    margin-bottom: 0px;
    text-align: center;
    font-weight: bold;
  }

  p{
    text-align: justify;
  }
</style>

<h1>RELACIÓN INICIAL</h1>

<hr>

<p><b>1. Crea la gramática elemental de la siguiente parte del fichero XML.</b></p>

```xml
<alumno>Olga Velarde Cobo</alumno>
```

La gramática sería:

```xml
<!ELEMENT alumno(#PCDATA)>
```

<p><b>2. Los elementos terminales de tipo "any" son aquellos que están:</b></p>

<p>c. formados por cualquier cosa</p>

<p><b>3. Crea el fichero XML para que cumpla la siguiente parte de la DTD:</b></p>

```xml
<!ELEMENT telefono(trabajo?, casa)>
```

<p>Respuesta:</p>

```xml
<telefono>
  <trabajo/>

  <casa>911 11 11 11</casa>
</telefono>

<!--**************************-->

<telefono>
  <trabajo>611 11 11 11</trabajo>
  <casa>911 11 11 11</casa>
</telefono>
```

<p><b>4. Crea el fichero XML para que cumpla la siguiente parte de la DTD:</b></p>

```xml
<!ELEMENT provincia(nombre, (cp, ciudad)*)>
```

<p>Respuesta:</p>

```xml
<provincia>
  <nombre>Málaga</nombre>

  <cp>29014</cp>
  <ciudad>Málaga</ciudad>
</provincia>

<!--**************************-->

<provincia>
  <nombre>Cádiz</nombre>
</provincia>
```

<p><b>5. Crea el fichero XML para que cumpla la siguiente parte de la DTD.</b></p>

```xml
<!ELEMENT provincia (nombre, (cp, ciudad)+)>
```

<p>Respuesta:</p>

```xml
<provincia>
  <nombre>Cádiz</nombre>

  <cp>29014</cp>

  <ciudad>Cádiz</ciudad>
</provincia>

<!--**************************-->

<provincia>
  <nombre>Andorra</nombre>

  <cp>29014</cp>

  <ciudad>Andorra</ciudad>
</provincia>
```

<p><b>6. Crea el fichero XML para que cumpla la siguiente parte de la DTD.</b></p>

```xml
<!ELEMENT provincia (nombre, (cp | ciudad))>
```

<p>Respuesta:</p>

```xml
<provincia>
  <nombre>Málaga</nombre>

  <cp>29014</cp>
</provincia>

<!--**************************-->

<provincia>
  <nombre>Cádiz</nombre>

  <ciudad>Cádiz</ciudad>
</provincia>
```

<p><b>7. La diferencia entre el operador "?" y el "+" es que el primero permite que el elemento sobre el que se aplica esté presente una vez, como máximo, mientras que el operador "+" no limita el número máximo de veces que está presente el elemento en el documento XML.</b></p>

<p>Verdadero.</p>

<p><b>8. Dada la siguiente DTD, escribe un fichero XML que sea válido para la DTD mostrada:</b></p>

```xml
<!ELEMENT alumno(nombre, apellidos, direccion)>
<!ATTLIST alumno edad CDATA #REQUIRED>
<!ELEMENT nombre(#PCDATA)>
<!ELEMENT apellidos(#PCDATA)>
<!ELEMENT direccion(#PCDATA)>
```

<p>Respuesta:</p>

```xml
<alumno edad="25">
  <nombre>Juan</nombre>
  <apellidos>Pérez García</apellidos>
  <direccion>Calle Falsa 123</direccion>
</alumno>
```