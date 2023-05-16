<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
  <xsl:template match="/">
    <html>
      <head>Resultado HTML</head>
      <body>
        <ol>
          <xsl:for-each select="/catalogo/cd[pais='Estados Unidos']">
            <li>
              <strong>Título:</strong> <xsl:value-of select="titulo"/><br/>
              <strong>Artista:</strong> <xsl:value-of select="artista"/><br/>
              <strong>País:</strong> <xsl:value-of select="pais"/><br/>
              <strong>Compañía:</strong> <xsl:value-of select="compania"/><br/>
              <strong>Precio:</strong> <xsl:value-of select="precio"/><br/>
              <strong>Fecha de publicación:</strong> <xsl:value-of select="fecha_publicacion"/><br/>
              <strong>Género:</strong> <xsl:value-of select="genero"/><br/>
              <strong>Número de canciones:</strong> <xsl:value-of select="canciones"/><br/>
            </li>
          </xsl:for-each>
        </ol>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>