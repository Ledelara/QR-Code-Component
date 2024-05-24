import { Card, Box } from '@mui/material'
import QRCode from 'qrcode.react'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const QrCodeCard = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Card
      className="qrcode-container"
      sx={{
        backgroundColor: '#4888E8',
        borderRadius: 8,
        padding: '2.5em',
        maxWidth: isMobile ? '400px' : '900px',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <QRCode 
          value="https://github.com/Ledelara" 
          size={isMobile ? 200 : 256}
          bgColor="#4888E8"
          fgColor='hsl(0, 0%, 100%)'
        />
      </Box>
    </Card>
  );
}

export default QrCodeCard;
