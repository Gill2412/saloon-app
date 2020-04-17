<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="/">
                <table id="TableSalon" class="indent">
                    <thead>
                        <tr>
                            <th colspan="3">Jnails And Beauty</th>
                        </tr>
                        <tr>
                
                            <th>Client</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <xsl:for-each select="/Appointments/Days">
                            <tr>
                                <td colspan="3">
                                    <xsl:value-of select="@name" />
                                </td>
                            </tr>
                            <xsl:for-each select="Details">
                            <tr id="{position()}">
                                
                                <td>
                                    <xsl:value-of select="Client" />
                                </td>
                                <td align="right">
                                    <xsl:value-of select="Time" />
                                </td>
                            </tr>
                            </xsl:for-each>
                        </xsl:for-each>
                    </tbody>
                </table><br/>
    </xsl:template>
</xsl:stylesheet>