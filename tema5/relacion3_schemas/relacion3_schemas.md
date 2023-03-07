<style>
  h1{
    text-align: center;
    font-weight: bold;
    border: none;
    margin-bottom: 0px;
  }

  p{
    text-align: justify;
  }
</style>

<h1>RELACIÓN 3 - SCHEMAS</h1>

<hr>

<p><b>1. Para los siguientes elementos:</b></p>

```xml
<ciudad>Roma</ciudad>

<hora>18:29:45</hora>

<nota>7.5</nota>

<apto>true</apto>
```

<p><b>Escribir sus definiciones simples correspondientes.</b></p>

<li><code>< ciudad ></code>: Un elemento simple que contiene el nombre de una ciudad.</li>

<li><code>< hora ></code>: Un elemento simple que contiene una hora en el formato "hora:minutos:segundos".</li>

<li><code>< nota ></code>: Un elemento simple que contiene una calificación en formato decimal.</li>

<li><code>< apto ></code>: Un elemento simple que indica si una persona está apta o no, representado por un valor booleano.</li>

<p><b>2. Definir un elemento llamado "puertaCerrada" de tipo lógico, que por defecto tenga el valor "falso", y otro elemento llamado "ventanaAbierta" también de tipo lógico, que tenga asignado el valor fijo "verdadero".</b></p>

```xml
<?xml version="1.0"?>

<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:element name="root">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="puertaCerrada" type="xs:boolean" default="false"/>

        <xs:element name="ventanaAbierta" type="xs:boolean" fixed="true"/>
      </xs:sequence>
    </xs:complexType>
  </xs:element>
</xs:schema>
```

<p>Ejemplo:</p>

```xml
<puertaCerrada>false</puertaCerrada>
<ventanaAbierta>true</ventanaAbierta>
```

<p><b>3. Dado el siguiente documento XML:</b></p>

```xml
<?xml version="1.0" encoding="UTF-8"?>

<fichas xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="fichas.xsd">
 <ficha numero="1">
  <nombre>Ana Sanz Tin</nombre>

  <edad>22</edad>
 </ficha>

 <ficha numero="2">
  <nombre>Iker Rubio Mol</nombre>

  <edad>23</edad>
 </ficha>
</fichas>
```

<p><b>Escribir el contenido del archivo "fichas.xsd" que permita validarlo.</b></p>

```xml
<?xml version="1.0"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:element name="fichas">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="ficha" maxOccurs="unbounded">
          <xs:complexType>
            <xs:sequence>
              <xs:element name="nombre" type="xs:string"/>

              <xs:element name="edad" type="xs:integer"/>
            </xs:sequence>

            <xs:attribute name="numero" type="xs:integer" use="required"/>
          </xs:complexType>
        </xs:element>
      </xs:sequence>
    </xs:complexType>
  </xs:element>
</xs:schema>
```