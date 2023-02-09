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
</numeros>
```

<p>Respuesta:</p>

```xml
<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE numeros[
  <!ELEMENT numeros(#PCDATA)>
]>

<numeros>25</numeros>
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
<!-- creo que ya es válido -->

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
<!-- primer caso | no aparece ningún elemento "color" -->

<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE colores[
  <!ELEMENT colores(color*)>
  <!ELEMENT color(#PCDATA)>
]>

<colores></colores>
```

```xml
<!-- segundo caso | aparecen n elementos "color" -->

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
<!-- primer caso | aparece 1 elemento "flor" -->

<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE flores[
  <!ELEMENT flores(flor+)>
  <!ELEMENT flor(#PCDATA)>
]>

<flores>
  <flor>rosa</flor>
</flores>
```

```xml
<!-- segundo caso | aparecen n elementos "flor" -->

<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE flores[
  <!ELEMENT flores(flor+)>
  <!ELEMENT flor(#PCDATA)>
]>

<flores>
  <flor>rosa</flor>

  <flor>lirio</flor>

  <flor>tulipán</flor>
</flores>
```

<p><b>e. Animales</b></p>

```xml
<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE animales[
  <!ELEMENT animales(animal*)>
  <!ELEMENT animal(#PCDATA)>
]>

<animales>
  <perro>caniche</perro>

  <gato>siamés</gato>
</animales>
```

<p>Respuesta:</p>

```xml
<!-- primer caso | no aparece ningún elemento "animal" -->

<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE animales[
  <!ELEMENT animales(animal*)>
  <!ELEMENT animal(#PCDATA)>
]>

<animales></animales>
```

```xml
<!-- segundo caso | aparecen n elementos "animal" -->

<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE animales[
  <!ELEMENT animales(animal*)>
  <!ELEMENT animal(#PCDATA)>
]>

<animales>
  <animal>caniche</animal>

  <animal>siamés</animal>
</animales>
```

<p><b>f. Escritores</b></p>

```xml
<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE escritores[
  <!ELEMENT escritores(escritor*)>
  <!ELEMENT escritor(nombre, nacimiento)>
  <!ELEMENT nombre(#PCDATA)>
  <!ELEMENT nacimiento(#PCDATA)>
]>

<escritores>
  <escritor>
    <nombre>mario vargas llosa</nombre>

    <nacimiento>28 de marzo de 1936</nacimiento>
  </escritor>

  <escritor>
    <nacimiento>1 de abril de 1929</nacimiento>

    <nombre>milan kundera</nombre>
  </escritor>
</escritores>
```

<p>Respuesta:</p>

```xml
<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE escritores[
  <!ELEMENT escritores(escritor*)>
  <!ELEMENT escritor(nombre, nacimiento)>
  <!ELEMENT nombre(#PCDATA)>
  <!ELEMENT nacimiento(#PCDATA)>
]>


```