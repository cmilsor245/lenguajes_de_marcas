<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
  <xsl:template match="/">
    <html>
      <head>
        <h1>RESULTADOS</h1>
      </head>
      <body>
        <table border="2">
          <xsl:for-each select="/catalogo/cd">
            <tr>
              <td><xsl:value-of select="titulo"/></td>
              <td><xsl:value-of select="artista"/></td>
              <td><xsl:value-of select="pais"/></td>
              <td><xsl:value-of select="compania"/></td>
              <td><xsl:value-of select="precio"/></td>
              <td><xsl:value-of select="fecha_publicacion"/></td>
              <td><xsl:value-of select="genero"/></td>
              <td><xsl:value-of select="canciones"/></td>
            </tr>
          </xsl:for-each>
        </table>
        <xsl:choose>
          <xsl:when test="/catalogo/cd/artista='Nirvana'">
            <p>Se encontró un CD del artista Nirvana.</p>
          </xsl:when>
          <xsl:otherwise>
            <p>No se encontró ningún CD del artista Nirvana.</p>
          </xsl:otherwise>
        </xsl:choose>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>