<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xs="http://www.w3.org/2001/XMLSchema" exclude-result-prefixes="xs" version="2.0">
  <xsl:template match="/">
    <html>
      <head><title>Resultado</title></head>
      <body>
      <h1>Edificio A</h1>
      <table border='1'>
      <xsl:for-each select="inventario/producto">
      <xsl:if test="lugar/@edificio='A'">
      <tr>
      <td><xsl:value-of select="nombre"/> </td>
      <td><xsl:choose>
      <xsl:when test="peso/@unidad= 'kg'">
      <xsl:value-of select="peso"/>
      </xsl:when>
      <xsl:otherwise>
      <xsl:value-of select="peso div 1000"></xsl:value-of>
      </xsl:otherwise>
      </xsl:choose></td>
      <td><xsl:value-of select="lugar/@edificio"/>
      <xsl:value-of select="lugar/aula"/></td>
      </tr>
      </xsl:if>
      </xsl:for-each>
      </table>
      <h1>Edificio B</h1>
      <table border='1'>
      <xsl:for-each select="inventario/producto">
      <xsl:if test="lugar/@edificio='B'">
      <tr>
      <td><xsl:value-of select="nombre"/></td>
      <td><xsl:value-of select="peso"/></td>
      <td><xsl:value-of select="lugar/@edificio"/>
      <xsl:value-of select="lugar/aula"/></td>
      </tr>
      </xsl:if>
      </xsl:for-each>
      </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>