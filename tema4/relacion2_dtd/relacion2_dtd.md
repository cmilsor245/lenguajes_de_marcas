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
  <!ELEMENT perifericos(#PCDATA)>
]>

<perifericos>
  <periferico>Impresora</periferico>
  <periferico>Monitor</periferico>
  <periferico>Teclado</periferico>
</perifericos>
```