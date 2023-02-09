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

<h1>SEGUNDA RELACIÓN</h1>

<hr>

<p><b>1. El siguiente documento XML está bien formado. Sin embargo, no es válido. Para que lo sea, realiza los cambios necesarios en dicho documento, pero sin modificar la DTD interna.</b></p>

```xml
<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE perifericos[
  <!ELEMENT perifericos(#PCDATA)>
]>

<perifericos>
  <periferico>impresora</periferico>

  <periferico>monitor</periferico>

  <periferico>teclado</periferico>
</perifericos>
```

<p>Respuesta:</p>

```xml
<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE perifericos[
  <!ELEMENT periferico(#PCDATA)>
]>

<perifericos>
  <periferico>impresora, monitor, teclado</periferico>
</perifericos>
```

<p><b>2. Los siguientes documentos no son válidos porque contienen uno o dos errores (los errores no están en la DTD interna). Corrige los errores.</b></p>

<p><b>a. Números</b></p>

```xml
<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE numeros[
  <!ELEMENT numeros(#PCDATA)>
]>

<numeros>
  <numero>25</numero>
</numero>
```

<p>Respuesta:</p>

```xml
<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE numeros[
  <!ELEMENT numeros(#PCDATA)>
]>

<numeros>
  <numeros>25</numeros>
</numeros>
```

<p><b>b. Letras</b></p>

```xml
<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE letras[
  <!ELEMENT letras(letra)>
  <!ELEMENT letra(#PCDATA)>
]>

<letras>
  <letra>m</letra>

  <letra>uve doble</letra>
</letras>
```

<p>Respuesta:</p>

```xml

```

<p><b>c. Colores</b></p>

```xml
<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE colores[
  <!ELEMENT colores(color*)>
  <!ELEMENT color(#PCDATA)>
]>

<colores>
  <color>azul marino</color>

  negro

  <color>amarillo</color>
</colores>
```

<p>Respuesta:</p>

```xml
<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE colores[
  <!ELEMENT colores(color*)>
  <!ELEMENT color(#PCDATA)>
]>

<colores>
  <color>azul marino</color>

  <color>negro</color>

  <color>amarillo</color>
</colores>
```

<p><b>d. Flores</b></p>

```xml
<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE flores[
  <!ELEMENT flores(flor+)>
  <!ELEMENT flor(#PCDATA)>
]>

<flores>
</flores>
```

<p>Respuesta:</p>

```xml
<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE flores[
  <!ELEMENT flores(flor+)>
  <!ELEMENT flor(#PCDATA)>
]>


```