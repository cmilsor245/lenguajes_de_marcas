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

<p><b>Dado el siguiente documento XML, realiza las siguientes consultas con XPATH:</b></p>

```xml
<?xml version="1.0" encoding="UTF-8"?>

<ies>
  <nombre>IES TicArte</nombre>

  <web>http://www.ticarte.com</web>

  <ciclos>
    <ciclo id="ASIR">
      <nombre>Administración de Sistemas Informáticos en Red</nombre>
      <grado>Superior</grado>
      <decretoTitulo anyo="2009"/>
    </ciclo>

    <ciclo id="DAW">
      <nombre>Desarrollo de Aplicaciones Web</nombre>
      <grado>Superior</grado>
      <decretoTitulo anyo="2010"/>
    </ciclo>

    <ciclo id="SMR">
      <nombre>Sistemas Microinformáticos y Redes</nombre>
      <grado>Medio</grado>
      <decretoTitulo anyo="2008"/>
    </ciclo>
  </ciclos>
</ies>
```

<p><b>1. Realiza las siguientes consultas:</b></p>

<li><b>Mostrar el nombre del instituto.</b></li>

```bash
/ies/nombre/text()
```

<img src="img/1.png">

<li><b>Mostrar la página web del instituto sin etiquetas.</b></li>

```bash
/ies/web/text()
```

<img src="img/2.png">

<li><b>Mostrar el nombre de los ciclos formativos sin etiquetas.</b></li>

```bash
//ciclo/nombre/text()
```

<img src="img/3.png">