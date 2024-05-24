import { Card, useMediaQuery } from "@mui/material"
import QrCodeCard from "./components/BlueCard/QrCodeCard"
import Text from "./components/Text/Text"
import { useTheme } from '@mui/material/styles'

const QrCode = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  
  return (
    <Card
      sx={{
        backgroundColor: 'hsl(0, 0%, 100%)',
        borderRadius: 8,
        boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)',
        padding: 2,
        marginBottom: 16,
        width: isMobile ? '260px' : '20%',
        height: isMobile ? '400px' : '420px',
      }}
    >
      <QrCodeCard />
      <Text 
        text="Scan the QR Code" 
      />
    </Card>
    
  )
}

export default QrCode
