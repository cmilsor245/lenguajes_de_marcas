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

<p><b>3. Se quiere definir un tipo de dato simple llamado "TipoEstaciones", basado en el tipo predefinido "xs:token", y que solamente permita como valores los nombres de las cuatro estaciones.</b></p>

```xml

```