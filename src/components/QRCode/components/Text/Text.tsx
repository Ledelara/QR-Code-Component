import { Typography } from '@mui/material'
import React from 'react'

type TextProps = {
    text: string
}

const Text = (props: TextProps) => {
    const { text } = props
  return (
    <Typography
        variant="h6"
        sx={{
            color: 'hsl(218, 44%, 22%)',
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 2,
        }}
    >
        {text}
    </Typography>
  )
}

export default Text