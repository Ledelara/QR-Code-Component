import { Card } from '@mui/material'
import QRCode from 'qrcode.react'

const QrCodeCard = () => {
  return (
    <Card
        sx={{
            backgroundColor: '#4888E8',
            borderRadius: 8,
            padding: '2.5em',
            width: '100%',
        }}
    >
      <QRCode 
        value="https://github.com/Ledelara" 
        size={256}
        bgColor="#4888E8"
        fgColor='hsl(0, 0%, 100%)'
      />
    </Card>
  )
}

export default QrCodeCard
