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
<?xml version="1.0"?>

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

<p><b>6. Explica esta línea y realiza su equivalente en XML Schema (xsd):</b></p>

```xml
<!ELEMENT receta (titulo, ingrediente+, procedimiento+, tiempo?)>
```

<p>Explicación:</p>

<p>La línea "<!ELEMENT receta (titulo, ingrediente+, procedimiento+, tiempo?)>" es una declaración de tipo de elemento en DTD (Document Type Definition) que especifica la estructura de un elemento llamado "receta". Esta línea indica que un elemento "receta" debe tener como sub-elementos un elemento "titulo", uno o más elementos "ingrediente", uno o más elementos "procedimiento", y un elemento opcional "tiempo".</p>

<p>Equivalente:</p>

```xml
<xs:element name="receta">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="titulo" type="xs:string"/>

      <xs:element name="ingrediente" type="xs:string" maxOccurs="unbounded"/>

      <xs:element name="procedimiento" type="xs:string" maxOccurs="unbounded"/>

      <xs:element name="tiempo" type="xs:string" minOccurs="0"/>
    </xs:sequence>
  </xs:complexType>
</xs:element>
```

<p><b>7. Escribir un XML Schema para el siguiente documento XML, e incluir los cambios necesarios en el mismo para referenciar al esquema creado. Se sabe que todos los elementos hijos del elemento "nota" son obligatorios y deben aparecer solo una vez.</b></p>

```xml
<?xml version="1.0" encoding="UTF-8"?>

<nota>
  <para>Pedro</para>

  <de>Laura</de>

  <titulo>Recordatorio</titulo>

  <contenido>A las 7:00 pm en la puerta del teatro</contenido>
</nota>
```

<p>XML Schema:</p>

```xml
<?xml version="1.0"?>

<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:element name="nota" type="notaType"/>

  <xs:complexType name="notaType">
    <xs:sequence>
      <xs:element name="para" type="xs:string"/>

      <xs:element name="de" type="xs:string"/>

      <xs:element name="titulo" type="xs:string"/>

      <xs:element name="contenido" type="xs:string"/>
    </xs:sequence>
  </xs:complexType>
</xs:schema>
```

<p>Cambios en el XML para referenciar al esquema:</p>

```xml
<?xml version="1.0" encoding="UTF-8"?>

<nota xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="nombre_del_archivo.xsd">
  <para>Pedro</para>

  <de>Laura</de>

  <titulo>Recordatorio</titulo>

  <contenido>A las 7:00 pm en la puerta del teatro</contenido>
</nota>
```

<p><b>8. Escribir un XML Schema para el siguiente documento XML, e incluir los cambios necesarios en el mismo para referenciar al esquema creado. Se debe cumplir también lo siguiente:</b></p>

<li><b>Los elementos "vehículo", "nombre" y "modificacion" deben aparecer una vez como mínimo, el máximo no está limitado. El resto de elementos deben aparecer 1 vez.</b></li>

<li><b>Todos los elementos que aparecen en el documento instancia de abajo son obligatorios y deben aparecer siempre en el mismo orden.</b></li>

<li><b>Los elementos que obtienen información de fecha son todos de tipo cadena.</b></li>

```xml
<?xml version="1.0" encoding="UTF-8"?>

<vehiculos>
  <vehiculo>
    <nombre>Count Zero</nombre>

    <modelo>Series I, 80"</modelo>

    <fabricacion>
      <inicio>
        <dia>21</dia>

        <mes>July</mes>

        <anyo>1949</anyo>
      </inicio>

      <fin>
        <dia>9</dia>

        <mes>August</mes>

        <anyo>1949</anyo>
      </fin>
    </fabricacion>

    <modificaciones>
      <modificacion>Change Engine</modificacion>

      <modificacion>Change pedals</modificacion>

      <modificacion>Change gearbox</modificacion>

      <modificacion>Fit Rollcage</modificacion>
    </modificaciones>
  </vehiculo>
</vehiculos>
```

<p>XML Schema:</p>

```xml
<?xml version="1.0"?>

<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:element name="vehiculos" type="vehiculosType"/>

  <xs:complexType name="vehiculosType">
    <xs:sequence>
      <xs:element name="vehiculo" type="vehiculoType" maxOccurs="unbounded"/>
    </xs:sequence>
  </xs:complexType>

  <xs:complexType name="vehiculoType">
    <xs:sequence>
      <xs:element name="nombre" type="xs:string"/>

      <xs:element name="modelo" type="xs:string"/>

      <xs:element name="fabricacion" type="fabricacionType"/>

      <xs:element name="modificaciones" type="modificacionesType"/>
    </xs:sequence>
  </xs:complexType>

  <xs:complexType name="fabricacionType">
    <xs:sequence>
      <xs:element name="inicio" type="fechaType"/>

      <xs:element name="fin" type="fechaType"/>
    </xs:sequence>
  </xs:complexType>

  <xs:complexType name="fechaType">
    <xs:sequence>
      <xs:element name="dia" type="xs:string"/>

      <xs:element name="mes" type="xs:string"/>

      <xs:element name="anyo" type="xs:string"/>
    </xs:sequence>
  </xs:complexType>

  <xs:complexType name="modificacionesType">
    <xs:sequence>
      <xs:element name="modificacion" type="xs:string" minOccurs="1" maxOccurs="unbounded"/>
    </xs:sequence>
  </xs:complexType>
</xs:schema>
```

<p>Cambios en el XML:</p>

```xml
<?xml version="1.0" encoding="UTF-8"?>

<vehiculos xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="nombre_del_archivo.xsd">
  <vehiculo>
    <nombre>Count Zero</nombre>

    <modelo>Series I, 80"</modelo>

    <fabricacion>
      <inicio>
        <dia>21</dia>

        <mes>July</mes>

        <anyo>1949</anyo>
      </inicio>

      <fin>
        <dia>9</dia>

        <mes>August</mes>

        <anyo>1949</anyo>
      </fin>
    </fabricacion>

    <modificaciones>
      <modificacion>Change Engine</modificacion>

      <modificacion>Change pedals</modificacion>

      <modificacion>Change gearbox</modificacion>

      <modificacion>Fit Rollcage</modificacion>
    </modificaciones>
  </vehiculo>
</vehiculos>
```

<p><b>9. Escribir un XML Schema para el siguiente documento XML, e incluir los cambios necesarios en el mismo para referenciar al esquema creado. Se debe cumplir también lo siguiente:</b></p>

<li><b>Todos los elementos que aparecen en el documento instancia de abajo son obligatorios y debe aparecer siempre en el mismo orden.</b></li>

<li><b>Se deben definir dos tipos de datos: "tipoPersona" (los elementos "persona" son de este tipo) e "info" (los elementos "datos" son de este tipo).</b></li>

<li><b>El atributo "nacimiento" es de tipo "date".</b></li>

<li><b>El elemento "comentario" no es obligatorio; si aparece lo hace solo 1 vez.</b></li>

```xml
<?xml version="1.0" encoding="UTF-8"?>

<persona nacimiento="1999-10-20">
  <datos>
    <nombre>Pepe</nombre>

    <apellidos>Garcia</apellidos>

    <dni>25390952</dni>
  </datos>

  <comentario>buena gente...</comentario>
</persona>
```