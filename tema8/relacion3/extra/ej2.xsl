<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
  <xsl:template match="/">
    <html>
      <head>
        <title>Resultado</title>
      </head>
      <body>
        <table border="1">
          <tr>
            <th>Título</th>
            <th>Artista</th>
            <th>País</th>
            <th>Compañía</th>
            <th>Precio</th>
            <th>Fecha de Publicación</th>
            <th>Género</th>
            <th>Canciones</th>
          </tr>
          <xsl:for-each select="catalogo/cd">
            <xsl:if test="pais = 'Estados Unidos'">
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
            </xsl:if>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>