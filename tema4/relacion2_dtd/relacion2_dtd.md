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
<!-- primer caso | no aparece ningún elemento "escritor" -->

<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE escritores[
  <!ELEMENT escritores(escritor*)>
  <!ELEMENT escritor(nombre, nacimiento)>
  <!ELEMENT nombre(#PCDATA)>
  <!ELEMENT nacimiento(#PCDATA)>
]>

<escritores></escritores>
```

```xml
<!-- segundo caso | aparecen n elementos "escritor" -->

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
    <nombre>milan kundera</nombre>

    <nacimiento>1 de abril de 1929</nacimiento>
  </escritor>
</escritores>
```

<p><b>g. Músicos</b></p>

```xml
<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE musicos[
  <!ELEMENT musicos(musico*)>
  <!ELEMENT musico((nombre | apodo), fechaNacimiento)>
  <!ELEMENT nombre(#PCDATA)>
  <!ELEMENT apodo(#PCDATA)>
  <!ELEMENT fechaNacimiento(#PCDATA)>
]>

<musicos>
  <musico>
    <nombre>antonio vivaldi</nombre>

    <apodo>el cura pelirrojo</apodo>

    <fechaNacimiento>4 de marzo de              1678</fechaNacimiento>
  </musico>

  <musico>
    <nombre>johann sebastian bach</nombre>

    <apodo>el viejo peluca</apodo>

    <fechaNacimiento>21 de marzo de              1685</fechaNacimiento>
  </musico>
</musicos>
```

<p>Respuesta:</p>

```xml
<!-- primer caso | no aparece ningún elemento "musico" -->

<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE musicos[
  <!ELEMENT musicos(musico*)>
  <!ELEMENT musico((nombre | apodo), fechaNacimiento)>
  <!ELEMENT nombre(#PCDATA)>
  <!ELEMENT apodo(#PCDATA)>
  <!ELEMENT fechaNacimiento(#PCDATA)>
]>

<musicos></musicos>
```

```xml
<!-- segundo caso | aparecen n elementos "musico" -->

<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE musicos[
  <!ELEMENT musicos(musico*)>
  <!ELEMENT musico((nombre | apodo), fechaNacimiento)>
  <!ELEMENT nombre(#PCDATA)>
  <!ELEMENT apodo(#PCDATA)>
  <!ELEMENT fechaNacimiento(#PCDATA)>
]>

<musicos>
  <musico>
    <nombre>antonio vivaldi</nombre>

    <fechaNacimiento>4 de marzo de 1678</fechaNacimiento>
  </musico>

  <musico>
    <apodo>el viejo peluca</apodo>

    <fechaNacimiento>21 de marzo de 1685</fechaNacimiento>
  </musico>
</musicos>
```

<p><b>h. Teléfonos de emergencia</b></p>

```xml
<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE agenda[
  <!ELEMENT agenda(contacto*)>
  <!ELEMENT contacto(nombre, telefonoFijo*, telefonoMovil+)>
  <!ELEMENT nombre(#PCDATA)>
  <!ELEMENT telefonoFijo(#PCDATA)>
  <!ELEMENT telefonoMovil(#PCDATA)>
]>

<agenda>
  <contacto>
    <nombre>ayuntamiento</nombre>

    <telefonoFijo>010</telefonoFijo>
  </contacto>

  <contacto>
    <nombre>emergencias</nombre>

    <telefonoFijo>112 (unión europea)</telefonoFijo>

    <telefonoMovil>desconocido</telefonoMovil>

    <telefonoFijo>911 (estados unidos)</telefonoFijo>
  </contacto>
</agenda>
```

<p>Respuesta:</p>

```xml
<!-- primer caso | no aparece ningún elemento "contacto" -->

<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE agenda[
  <!ELEMENT agenda(contacto*)>
  <!ELEMENT contacto(nombre, telefonoFijo*, telefonoMovil+)>
  <!ELEMENT nombre(#PCDATA)>
  <!ELEMENT telefonoFijo(#PCDATA)>
  <!ELEMENT telefonoMovil(#PCDATA)>
]>

<agenda></agenda>
```

```xml
<!-- segundo caso | aparecen n elementos "contacto" -->

<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE agenda[
  <!ELEMENT agenda(contacto*)>
  <!ELEMENT contacto(nombre, telefonoFijo*, telefonoMovil+)>
  <!ELEMENT nombre(#PCDATA)>
  <!ELEMENT telefonoFijo(#PCDATA)>
  <!ELEMENT telefonoMovil(#PCDATA)>
]>

<agenda>
  <contacto>
    <nombre>ayuntamiento</nombre>

    <telefonoFijo>010</telefonoFijo>

    <telefonoMovil>611 11 11 11</telefonoMovil>
  </contacto>

  <contacto>
    <nombre>emergencias</nombre>

    <telefonoMovil>622 22 22 22</telefonoMovil>
  </contacto>
</agenda>
```

```xml
<!-- tercer caso | no aparece ningún elemento "telefonoFijo" y solo aparece 1 elemento "telefonoMovil" -->

<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE agenda[
  <!ELEMENT agenda(contacto*)>
  <!ELEMENT contacto(nombre, telefonoFijo*, telefonoMovil+)>
  <!ELEMENT nombre(#PCDATA)>
  <!ELEMENT telefonoFijo(#PCDATA)>
  <!ELEMENT telefonoMovil(#PCDATA)>
]>

<agenda>
  <contacto>
    <nombre>ayuntamiento</nombre>

    <telefonoMovil>611 11 11 11</telefonoMovil>
  </contacto>

  <contacto>
    <nombre>emergencias</nombre>

    <telefonoMovil>622 22 22 22</telefonoMovil>
  </contacto>
</agenda>
```

```xml
<!-- cuarto caso | no aparece ningún elemento "telefonoFijo" y aparecen n elementos "telefonoMovil" -->

<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE agenda[
  <!ELEMENT agenda(contacto*)>
  <!ELEMENT contacto(nombre, telefonoFijo*, telefonoMovil+)>
  <!ELEMENT nombre(#PCDATA)>
  <!ELEMENT telefonoFijo(#PCDATA)>
  <!ELEMENT telefonoMovil(#PCDATA)>
]>

<agenda>
  <contacto>
    <nombre>ayuntamiento</nombre>

    <telefonoMovil>611 11 11 11</telefonoMovil>

    <telefonoMovil>633 33 33 33</telefonoMovil>
  </contacto>

  <contacto>
    <nombre>emergencias</nombre>

    <telefonoMovil>622 22 22 22</telefonoMovil>

    <telefonoMovil>644 44 44 44</telefonoMovil>
  </contacto>
</agenda>
```

```xml
<!-- quinto caso | aparecen n elementos "telefonoFijo" y solo aparece 1 elemento "telefonoMovil" -->

<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE agenda[
  <!ELEMENT agenda(contacto*)>
  <!ELEMENT contacto(nombre, telefonoFijo*, telefonoMovil+)>
  <!ELEMENT nombre(#PCDATA)>
  <!ELEMENT telefonoFijo(#PCDATA)>
  <!ELEMENT telefonoMovil(#PCDATA)>
]>

<agenda>
  <contacto>
    <nombre>ayuntamiento</nombre>

    <telefonoFijo>010</telefonoFijo>

    <telefonoFijo>020</telefonoFijo>

    <telefonoMovil>611 11 11 11</telefonoMovil>
  </contacto>

  <contacto>
    <nombre>emergencias</nombre>

    <telefonoFijo>112</telefonoFijo>

    <telefonoFijo>911</telefonoFijo>

    <telefonoMovil>622 22 22 22</telefonoMovil>
  </contacto>
</agenda>
```

```xml
<!-- sexto caso | aparecen n elementos "telefonoFijo" y aparecen n elementos "telefonoMovil" -->

<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE agenda[
  <!ELEMENT agenda(contacto*)>
  <!ELEMENT contacto(nombre, telefonoFijo*, telefonoMovil+)>
  <!ELEMENT nombre(#PCDATA)>
  <!ELEMENT telefonoFijo(#PCDATA)>
  <!ELEMENT telefonoMovil(#PCDATA)>
]>

<agenda>
  <contacto>
    <nombre>ayuntamiento</nombre>

    <telefonoFijo>010</telefonoFijo>

    <telefonoFijo>020</telefonoFijo>

    <telefonoMovil>611 11 11 11</telefonoMovil>

    <telefonoMovil>633 33 33 33</telefonoMovil>
  </contacto>

  <contacto>
    <nombre>emergencias</nombre>

    <telefonoFijo>112</telefonoFijo>

    <telefonoFijo>911</telefonoFijo>

    <telefonoMovil>622 22 22 22</telefonoMovil>

    <telefonoMovil>644 44 44 44</telefonoMovil>
  </contacto>
</agenda>
```