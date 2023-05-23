<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/">
    <html>
      <head>
        <style>
          table {
            border-collapse: collapse;
            width: 100%;
            font-family: Arial, sans-serif;
          }
          th, td {
            text-align: left;
            padding: 10px;
            border: 1px solid #ccc;
          }
          th {
            background-color: #4CAF50;
            color: white;
            font-weight: bold;
          }
          tr:nth-child(even) {
            background-color: #f2f2f2;
          }
          tr:hover {
            background-color: #ddd;
          }
          td {
            border-bottom: 1px solid #ddd;
          }
          h1 {
            color: #333;
            font-size: 24px;
            margin-bottom: 20px;
          }
          .highlight {
            background-color: yellow;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <h1>GRADO SUPERIOR</h1>
        <table>
          <tr>
            <th>Código</th>
            <th>Nombre</th>
          </tr>
          <xsl:for-each select="ciclos/ciclo">
            <xsl:if test="@grado='Superior'">
              <tr>
                <td>
                  <xsl:value-of select="@codigo"/>
                </td>
                <td>
                  <xsl:choose>
                    <xsl:when test="nombre = 'Desarrollo de Aplicaciones Web'">
                      <xsl:attribute name="class">highlight</xsl:attribute>
                    </xsl:when>
                  </xsl:choose>
                  <xsl:value-of select="nombre"/>
                </td>
              </tr>
            </xsl:if>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>