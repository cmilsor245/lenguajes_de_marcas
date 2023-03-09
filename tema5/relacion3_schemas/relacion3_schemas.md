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

<p><b>4. Utilizando el mismo documento XML del ejercicio anterior, escribir el contenido del archivo "fichas.xsd" que permita validarlo, teniendo en cuenta que se debe definir la edad con la restricción de que el valor que tome no pueda ser menor que 0 ni mayor que 130. Además, en vez de "xs:minInclusive" y "xs:maxInclusive", se debe utilizar:</b></p>

<li><b>"xs:minExclusive": que sirve para especificar que el valor debe ser mayor que el indicado.</b></li>

<li><b>"xs:maxExclusive": que sirve para especificar que el valor debe ser menor que el indicado.</b></li>

<p>Respuesta:</p>

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

              <xs:element name="edad">
                <xs:simpleType>
                  <xs:restriction base="xs:integer">
                    <xs:minExclusive value="-1"/>

                    <xs:maxExclusive value="131"/>
                  </xs:restriction>
                </xs:simpleType>
              </xs:element>
            </xs:sequence>

            <xs:attribute name="numero" type="xs:integer" use="required"/>
          </xs:complexType>
        </xs:element>
      </xs:sequence>
    </xs:complexType>
  </xs:element>
</xs:schema>
```

<p><b>5. Determina y corrige el/los error/errores que provoca que el fichero XML no esté bien formado.</b></p>

```xml
<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE etiqueta[
  <!ELEMENT etiqueta (nombre, calle, ciudad, pais, codigo)>
  <!ELEMENT nombre (#PCDATA)>
  <!ELEMENT calle (#PCDATA)>
  <!ELEMENT ciudad (#PCDATA)>
  <!ELEMENT pais (#PCDATA)>
  <!ELEMENT codigo (#PCDATA)>
]>

<nombre>Pepe García</nombre>
<calle>C/Ronda, 3</calle>
<pais>España<pais>
<codigo>18465</codigo>
</etiqueta>
```

<p>Corrección:</p>

```xml
<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE etiqueta[
  <!ELEMENT etiqueta (nombre, calle, ciudad, pais, codigo)>
  <!ELEMENT nombre (#PCDATA)>
  <!ELEMENT calle (#PCDATA)>
  <!ELEMENT ciudad (#PCDATA)>
  <!ELEMENT pais (#PCDATA)>
  <!ELEMENT codigo (#PCDATA)>
]>

<etiqueta>
  <nombre>Pepe García</nombre>

  <calle>C/Ronda, 3</calle>

  <ciudad>Granada</ciudad>

  <pais>España</pais>

  <codigo>18465</codigo>
</etiqueta>
```

<p>XML Schema:</p>

```xml
<?xml version="1.0" encoding="UTF-8"?>

<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:element name="etiqueta" type="etiquetaType"/>
  <xs:element name="nombre" type="xs:string"/>
  <xs:element name="calle" type="xs:string"/>
  <xs:element name="ciudad" type="xs:string"/>
  <xs:element name="pais" type="xs:string"/>
  <xs:element name="codigo" type="xs:string"/>

  <xs:complexType name="etiquetaType">
    <xs:sequence>
      <xs:element ref="nombre"/>
      <xs:element ref="calle"/>
      <xs:element ref="ciudad"/>
      <xs:element ref="pais"/>
      <xs:element ref="codigo"/>
    </xs:sequence>
  </xs:complexType>
</xs:schema>
```

<p><b>6. </b></p>