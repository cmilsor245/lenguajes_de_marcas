<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xs="http://www.w3.org/2001/XMLSchema" exclude-result-prefixes="xs" version="2.0">
  <xsl:template match="/">
    <html>
      <head>Resultado HTML</head>
        <body>
        <ul>
        <xsl:for-each select="inventario/producto">
        <li>
        Elemento
        <xsl:value-of select="@codigo"/> PREGUNTA POR UN ATRIBUTO.
        <ul>
        <li>
        Nombre: <xsl:value-of select="nombre"/>
        </li>
        <li>
        Peso: <xsl:value-of select="peso"/>
        </li>
        </ul>
        </li>
        </xsl:for-each>
        </ul>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>