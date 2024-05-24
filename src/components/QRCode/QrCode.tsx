import { Card } from "@mui/material"
import QrCodeCard from "./components/BlueCard/QrCodeCard"
import Text from "./components/Text/Text"

const QrCode = () => {
  return (
    <Card
        sx={{
            backgroundColor: 'hsl(0, 0%, 100%)',
            borderRadius: 8,
            boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)',
            padding: 2,
            marginBottom: 16,
        }}
    >
        <QrCodeCard />
        <Text text="Scan the QR Code" />
    </Card>
  )
}

export default QrCode