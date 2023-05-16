<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xs="http://www.w3.org/2001/XMLSchema" exclude-result-prefixes="xs" version="2.0">
  <xsl:template match="/">
    <html>
      <head>Resultado HTML</head>
      <body>
        <h1>Lista de elementos filtrados</h1>
        <ol>
          <xsl:for-each select="/inventario/producto[@atributo='valor']">
            <li>
              <xsl:value-of select="nombre"/> - <xsl:value-of select="peso"/>
            </li>
          </xsl:for-each>
        </ol>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>