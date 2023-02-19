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
    <xs:restriction base="xs:string">
      <xs:enumeration value="Audi"/>

      <xs:enumeration value="Golf"/>

      <xs:enumeration value="BMW"/>
    </xs:restriction>
  </xs:simpleType>
</xs:element>
```

<p><b>3. Define un elemento llamado "letra" restricción. El único valor aceptable es de tres de las letras mayúsculas de la A a la Z.</b></p>

```xml
<xs:element name="letra">
  <xs:simpleType>
    <xs:restriction base="xs:string">
      <xs:pattern value="[A-Z]{3}"/>
    </xs:restriction>
  </xs:simpleType>
</xs:element>
```

<p><b>4. Define un elemento llamado "prodid" con una restricción. El único valor aceptable es de cinco dígitos en una secuencia, y cada dígito debe estar en un rango de 0 a 9.</b></p>

```xml
<xs:element name="prodid">
  <xs:simpleType>
    <xs:restriction base="xs:integer">
      <xs:pattern value="[0-9]{5}"/>
    </xs:restriction>
  </xs:simpleType>
</xs:element>
```

<p><b>5. Define un elemento llamado "letra" con una restricción. El único valor aceptable es cero o más ocurrencias de letras minúsculas de la a a la z.</b></p>

```xml
<xs:element name="letra">
  <xs:simpleType>
    <xs:restriction base="xs:string">
      <xs:pattern value="[a-z]*"/>
    </xs:restriction>
  </xs:simpleType>
</xs:element>
```

<p><b>6. Define un elemento llamado "contraseña" con una restricción. Debe haber exactamente ocho caracteres en una fila y los caracteres deben estar en minúsculas o en mayúsculas (desde la a/A a la z/Z) o ser números del 0 al 9.</b></p>

```xml
<xs:element name="contraseña">
  <xs:simpleType>
    <xs:restriction base="xs:string">
      <xs:pattern value="[a-zA-Z0-9]{8}"/>
    </xs:restriction>
  </xs:simpleType>
</xs:element>
```

<p><b>7. Define un elemento llamado "dirección" con una restricción. La restricción de espacio en blanco en ajustado a "preservar". No eliminará los caracteres de espacio en blanco.</b></p>

```xml
<xs:element name="dirección">
  <xs:simpleType>
    <xs:restriction base="xs:string">
      <xs:whiteSpace value="preserve"/>
    </xs:restriction>
  </xs:simpleType>
</xs:element>
```

<p><b>8. Define otro elemento llamado "contraseña" con una restricción. El valor debe ser como mínimo de cinco caracteres y un máximo de ocho caracteres.</b></p>

```xml
<xs:element name="contraseña">
  <xs:simpleType>
    <xs:restriction base="xs:string">
      <xs:minLength value="5"/>

      <xs:maxLength value="8"/>
    </xs:restriction>
  </xs:simpleType>
</xs:element>
```

<p><b>9. Rellena los huecos que faltan en la siguiente parte del esquema:</b></p>

```xml
<xs:element name="bola">
  <xs:complexType>
    <xs:attribute name="numero" type="_____"/>
  </xs:complexType>
</xs:element>

<xs:simpleType name="numeroDeBola">
  <xs:_____ base="xs:positiveInteger">
    <xs:_____ value="1"/>

    <xs:_____ value="90"/>
  </xs:restriction>
</xs:_____>
```

<p>Respuesta:</p>

```xml
<xs:element name="bola">
  <xs:complexType>
    <xs:attribute name="numero" type="numeroDeBola"/>
  </xs:complexType>
</xs:element>

<xs:simpleType name="numeroDeBola">
  <xs:restriction base="xs:positiveInteger">
    <xs:minInclusive value="1"/>

    <xs:maxInclusive value="90"/>
  </xs:restriction>
</xs:simpleType>
```