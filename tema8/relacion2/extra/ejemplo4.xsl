<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xs="http://www.w3.org/2001/XMLSchema" exclude-result-prefixes="xs" version="2.0">
  <xsl:template match="/">
    <html>
      <head>
        <h1>RESULTADOS</h1>
      </head>

      <body>
        <table border="2">
          <xsl:for-each select="/inventario/producto">
            <tr>
              <td><xsl:value-of select="nombre"/></td>

              <td>
                <xsl:choose>
                  <xsl:when test="peso/@unidad='kg'">
                    <xsl:value-of select="peso"/>
                  </xsl:when>

                  <xsl:otherwise>
                    <xsl:value-of select="peso div 1000"></xsl:value-of>
                  </xsl:otherwise>
                </xsl:choose>
              </td>

              <xsl:variable name="aula" select="lugar/aula"/>

              <td><xsl:value-of select="concat(lugar/@edificio,$aula)"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>