<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xs="http://www.w3.org/2001/XMLSchema" exclude-result-prefixes="xs" version="2.0">
  <xsl:template match="/">
    <html>
      <head>Resultado html</head>
      <body>
      <ul>
      <xsl:for-each select="/inventario/producto[lugar/@edificio='A' and lugar/aula=6]">
      Elemento
      <xsl:value-of select="@codigo"/>
      <ul>
      <li>
      Nombre:<xsl:value-of select="nombre"/>
      </li>
      <li>
      Peso:<xsl:value-of select="peso"/>
      </li>
      </ul>
      </xsl:for-each>
      </ul>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>