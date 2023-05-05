<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xs="http://www.w3.org/2001/XMLSchema" exclude-result-prefixes="xs" version="2.0">
  <xsl:template match="/">
    <inventario>
      <xsl:for-each select="inventario/producto">
        <xsl:if test="lugar/@edificio='B' ">
          <producto>
            <peso>
              <xsl:atribute name="unidad">
                <xsl:value-of select="peso/@unidad">
                </xsl:value-of>
              </xsl:atribute>
              <xsl:value-of select="peso"/>
            </peso>

            <nombre>
              <xsl:value-of select="nombre"/>
            </nombre>

            <lugar>
              <xsl:atribute name="edificio">
                <xsl:value-of select="lugar/@edificio"></xsl:value-of>
              </xsl:atribute>
              <aula>
                <xsl:value-of select="lugar/aula"/>
              </aula>
            </lugar>
          </producto>
        </xsl:if>
      </xsl:for-each>
    </inventario>
  </xsl:template>
</xsl:stylesheet>