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