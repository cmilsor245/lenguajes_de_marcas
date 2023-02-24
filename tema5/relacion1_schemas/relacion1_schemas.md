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

<h1>RELACIÓN 1 - SCHEMAS</h1>

<hr>

<p><b>1. El elemento "< edadLaboral >" es un entero no negativo, que debe tener un valor mínimo de 16, incluido, y máximo 70, no incluido.</b></p>

```xml
<xs:element name="edadLaboral">
  <xs:simpleType>
    <xs:restriction base="xs:nonNegativeInteger">
      <xs:minInclusive value="16"/>

      <xs:maxExclusive value="70"/>
    </xs:restriction>
  </xs:simpleType>
</xs:simpleType>
```

<p><b>2. Si quisiéramos definir un tipo de datos al que poder referenciar repetidas veces y declarar un elemento "< edadLaboral >" de ese tipo sería...</b></p>

```xml
<xs:simpleType name="TipoEdadLaboral">
  <xs:restriction base="xs:nonNegativeInteger">
    <xs:minInclusive value="16"/>

    <xs:maxExclusive value="70"/>
  </xs:restriction>
</xs:simpleType>

<xs:element name="edadLaboral" type="TipoEdadLaboral">
```

<p><b>3. Se quiere definir un tipo de datos simple llamado "TipoEstaciones", basado en el tipo predefinido "xs:token", y que solamente permita como valores los nombres de las cuatro estaciones.</b></p>

```xml
<xs:simpleType name="TipoEstaciones">
  <xs:restriction base="xs:token">
    <xs:enumeration value="Primavera"/>

    <xs:enumeration value="Verano"/>

    <xs:enumeration value="Otoño"/>

    <xs:enumeration value="Invierno"/>
  </xs:restriction>
</xs:simpleType>
```

<p><b>4. Se quiere un tipo de datos llamado "TipoCantidad", basado en "xs:decimal", que permita números con 2 dígitos decimales y 11 dígitos totales. El rango de valores implícito sería desde -999999999.99 hasta 999999999.99.</b></p>

```xml
<xs:simpleType name="TipoCantidad">
  <xs:restriction base="xs:decimal">
    <xs:totalDigits value="11"/>

    <xs:fractionDigits value="2"/>
  </xs:restriction>
</xs:simpleType>
```

<p><b>5. Un número de teléfono que se debe representar de la siguiente manera: 3 dígitos -> 1 punto -> 3 dígitos -> 1 punto -> 3 dígitos -> 1 punto.</b></p>

```xml
<xs:simpleType name="TipoTelefonoPunteado">
  <xs:restriction base="xs:string">
    <xs:pattern value="[0-9]{3}\.[0-9]{3}\.[0-9]{3}">
  </xs:restriction>
</xs:simpleType>
```

<p><b>6. Se quiere reflejar que las tallas de ropa se pueden identificar por números (38, 40, 42) o por letras, que son las iniciales en inglés (S, M, L).</b></p>

<p>Primera opción:</p>

```xml
<xs:simpleType name="TipoTallaNumerica">
  <xs:restriction base="xs:integer">
    <xs:enumeration value="38"/>

    <xs:enumeration value="40"/>

    <xs:enumeration value="42"/>
  </xs:restriction>
</xs:simpleType>
```

<p>Segunda opción:</p>

```xml
<xs:simpleType name="TipoTallaTextual">
  <xs:restriction base="xs:string">
    <xs:enumeration value="S"/>

    <xs:enumeration value="M"/>

    <xs:enumeration value="L"/>
  </xs:restriction>
</xs:simpleType>
```