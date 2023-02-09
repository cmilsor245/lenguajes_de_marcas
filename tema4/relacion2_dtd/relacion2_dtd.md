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
  <periferico>Impresora</periferico>
  <periferico>Monitor</periferico>
  <periferico>Teclado</periferico>
</perifericos>
```

<p>Respuesta:</p>

```xml
<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE perifericos[
  <!ELEMENT periferico(#PCDATA)>
]>

<perifericos>
  <periferico>Impresora, monitor, teclado</periferico>
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