<style>
  h1{
    tex-align: center;
    font-weight: bold;
    border: none;
    margin-bottom: 0px;
  }

  p{
    text-align: justify;
  }
</style>

<h1>RELACIÓN 2 - SCHEMAS</h1>

<hr>

<p><b>1. Define un elemento llamado "edad" con una restricción. El valor de la edad no puede ser menor que 0 o mayor que 120.</b></p>

```xml
<xs:element name="edad">
  <xs:simpleType>
    <xs:restriction base="xs:integer">
      <xs:minInclusive value="0"/>

      <xs:maxInclusive value="120"/>
    </xs:restriction>
  </xs:simpleType>
</xs:element>
```

<p><b>2. Define un elemento llamado "coche" con una restricción. Los únicos valores aceptables son: Audi, Golf y BMW.</b></p>

```xml
<xs:element name="coche">
  <xs:simpleType>
    <xs:restriction base="string">
      <xs:enumeration value="Audi"/>

      <xs:enumeration value="Golf"/>

      <xs:enumeration value="BMW"/>
    </xs:restriction>
  </xs:simpleType>
</xs:element>
```